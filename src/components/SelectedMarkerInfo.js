import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import GoogleMapsLink from "./GoogleMapsLink";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import { useStore } from "../hooks";
import { UI_SELECTED_MARKER } from "../reducers/actions";
import ImageWithModal from "./ImageWithModal";

import AddLocationForm from "./AddLocationForm";



function SelectedMarkerInfo({ location }) {
  console.log("aaaaa", location);
  const shortenedID = location.id;
  const [{ ui }, dispatch] = useStore(); // eslint-disable-line
  const closeSidebar = () => {
    dispatch({ type: UI_SELECTED_MARKER, location: null });
  };


  return (
    <div id="selected-marker-info">
      <Card>
        <Card.Header variant="primary">
          <h4 className="text-center">{location.name}</h4>
        </Card.Header>
        <ImageWithModal src={location.locationPicture} />
        <Card.Body>
          <p>
            <small>{location.address}</small>
          </p>
          <Card.Title>{location.description}</Card.Title>
          <Badge variant="dark">{location.type}</Badge>
          <hr />
          <GoogleMapsLink location={location} />
          {location.response && <h4>{location.response}</h4>}
          <hr />
          <Card.Subtitle>
            Have a comment? Want to see what other people are saying?{" "}
            <Link to={`/location/${shortenedID}`}>
              Head over to the detailed view
            </Link>
          </Card.Subtitle>
          <Button
            onClick={closeSidebar}
            block
            size="sm"
            variant="primary"
            className="mt-3"
          >
            Edit
          </Button>


          <Button
            onClick={closeSidebar}
            block
            size="sm"
            variant="primary"
            className="mt-3"
          >
            Close this info
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

SelectedMarkerInfo.propTypes = {
  location: PropTypes.object
};

export default SelectedMarkerInfo;
