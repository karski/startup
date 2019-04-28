import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Notification from "./Notification";
import AddLocationForm from "./AddLocationForm";
import AddComment from "./AddComment";

import { API, graphqlOperation } from "aws-amplify";
import { deleteLocation } from "../graphql/mutations";

import { useStore, useUserLocations } from "../hooks";
import { NOTIFICATION_CLOSE, NOTIFICATION_NEW } from "../reducers/actions";
import { truncate } from "../utils";
import shortid from "shortid";

const UserLocationsList = ({ history }) => {
  const [{ auth, notification }, dispatch] = useStore();
  const [isRemoving, setIsRemoving] = useState();
  const [isBeingEdited, setIsBeingEdited] = useState();
  const [isBeingCommented, setIsBeingCommented] = useState();
  const [fetchKey, setFetchKey] = useState(shortid.generate());
  let locations = useUserLocations(auth.user, fetchKey);

  // TODO: Is there another way of updating locations than changing key
  // * DeltaQueries, Subscriptions?
  const removeLocation = async location => {
    setIsRemoving(location.id);
    try {
      await API.graphql(
        graphqlOperation(deleteLocation, {
          input: { id: location.id }
        })
      );
      dispatch({
        type: NOTIFICATION_NEW,
        category: "delete_location",
        variant: "warning",
        text: `${location.name} removed`
      });
      setTimeout(() => {
        dispatch({ type: NOTIFICATION_CLOSE, category: "delete_location" });
      }, 2000);
    } catch (err) {
      console.log("err", err);
    } finally {
      setIsRemoving();
      // * changing fetchKey updates the list after the delete
      setFetchKey(shortid.generate());
    }
  };

  const editLocation = location => {
    setIsBeingEdited(location);
  };

  const doneUpdating = () => {
    setIsBeingEdited();
    setFetchKey(shortid.generate());
  };

  const addComment = location => {
    setIsBeingCommented(location);
  };

  const doneCommenting = () => {
    setIsBeingCommented();
    setFetchKey(shortid.generate());
  };

  const linkToLocation = location => {
    console.log("location", location);
    // * using shortened ID
    const shortenedID = location.id.substring(0, 8);
    history.push(`/location/${shortenedID}`);
  };
  return (
    <div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Type</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {locations.map(l => (
            <tr key={l.id}>
              <td>{l.name}</td>
              <td>{truncate(l.description, 5, true)}</td>
              <td>{l.type}</td>
              <td>
                {isRemoving === l.id ? (
                  <FontAwesomeIcon className="mx-2" icon="spinner" spin />
                ) : (
                  <FontAwesomeIcon
                    className="mx-2"
                    onClick={() => removeLocation(l)}
                    icon="trash-alt"
                  />
                )}
                <FontAwesomeIcon
                  className="mx-2"
                  onClick={() => editLocation(l)}
                  icon="edit"
                />
                <FontAwesomeIcon
                  className="mx-2"
                  onClick={() => addComment(l)}
                  icon="comment"
                />
                <FontAwesomeIcon
                  className="mx-2"
                  onClick={() => linkToLocation(l)}
                  icon="external-link-alt"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {isBeingEdited && (
        <AddLocationForm
          formValues={isBeingEdited}
          doneUpdating={doneUpdating}
        />
      )}
      {isBeingCommented && (
        <AddComment
          location={isBeingCommented}
          doneCommenting={doneCommenting}
          user={auth.user}
        />
      )}
      <Notification category="delete_location" />
      <Notification category="updated_location" />
    </div>
  );
};

export default withRouter(UserLocationsList);
