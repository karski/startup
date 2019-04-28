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
import { useCollection } from "react-firebase-hooks/firestore";

import { UI_SELECTED_MARKER } from "../reducers/actions";
const UserLocationsList = ({ history, db }) => {
  const [{ auth, notification }, dispatch] = useStore();
  const [isRemoving, setIsRemoving] = useState();
  const [isBeingEdited, setIsBeingEdited] = useState();
  const [isBeingCommented, setIsBeingCommented] = useState();
  const [fetchKey, setFetchKey] = useState(shortid.generate());
  // let locations = useUserLocations(auth.user, fetchKey);
  // const { error, loading, value } = useCollection(db.collection("tasks"));

  let locations = [];
  const { error, loading, value } = useCollection(db.collection("tasks"));
  if (value) {
    const temp = value.docs;
    locations = temp.map(l => {
      // console.log("cc", l.data());
      return l.data();
    });
  }
  console.log("locations11111", locations);
  var date_sort_asc = function(l1, l2) {
    // This is a comparison function that will result in dates being sorted in
    // ASCENDING order. As you can see, JavaScript's native comparison operators
    // can be used to compare dates. This was news to me.
    if (new Date(l1.date) > new Date(l2.date)) return 1;
    if (new Date(l1.date) < new Date(l2.date)) return -1;
    return 0;
  };
  locations = locations.sort(date_sort_asc).reverse();
  console.log("sorted Locations", locations);
  // if (value) {
  //   console.log(value, "ccccccccccccccccccc");
  // }
  // locations = JSON.parse(localStorage.getItem("tasks"));
  // TODO: Is there another way of updating locations than changing key
  // * DeltaQueries, Subscriptions?
  const removeLocation = async location => {
    setIsRemoving(location.id);
    try {
      // await API.graphql(
      //   graphqlOperation(deleteLocation, {
      //     input: { id: location.id }
      //   })
      // );
      // TODO: XXX
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
    setIsBeingEdited(false);
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
    const shortenedID = location.key;
    //history.push(`/location/${shortenedID}`);
    dispatch({ type: UI_SELECTED_MARKER, location });
  };
  return (
    <div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Type</th>
            <th>Assigned</th>
            <th>Done</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {locations &&
            locations.map(l => {
              let rowColor = "red";
              if (l.assigned) {
                rowColor = "blue";
              }
              if (l.resolved) {
                rowColor = "green";
              }
              return (
                <tr key={l.key}>
                  <td className={rowColor}>{l.name}</td>
                  <td className={rowColor}>
                    {truncate(l.description, 25, true)}
                  </td>
                  <td>{l.type}</td>
                  <td>{l.assigned && "Johnny"}</td>
                  <td className={rowColor}>
                    {l.resolved && (
                      <FontAwesomeIcon className="mx-2" icon="check-circle" />
                    )}
                  </td>

                  <td>
                    {/* {isRemoving === l.id ? (
                    <FontAwesomeIcon className="mx-2" icon="spinner" spin />
                  ) : ( */}
                    <div>
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
                    </div>
                    {/* )} */}
                  </td>
                </tr>
              );
            })}
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
