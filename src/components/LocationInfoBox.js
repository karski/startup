import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Popup } from "react-map-gl";
import { truncate } from "../utils";
import ta from "time-ago";

function LocationInfoBox({ location: l, closeInfoBox }) {
  console.log("l", l);
  const shortenedID = l.id.substring(0, 8);
  return (
    <Popup
      className="location-info-box"
      latitude={l.position.lat}
      longitude={l.position.lng}
      closeButton={true}
      onClose={() => {
        closeInfoBox(null);
      }}
    >
      <h5>{l.name}</h5>
      <h6>{l.description}</h6>
      <small>by {l.user.name}</small>
      <p className="grey">Added {ta.ago(l.date)}</p>
      <small>{truncate(l.address)}</small>
      <br />
      <small>{l.type}</small>
      <br />
      {l.locationPicture && (
        <img className="location-img" src={l.locationPicture} />
      )}
      <br />
      <Link to={`/location/${shortenedID}`}>
        <Button className="my-2" block variant="outline-primary">
          Details
        </Button>
      </Link>
    </Popup>
  );
}

LocationInfoBox.propTypes = {
  location: PropTypes.object.isRequired,
  closeInfoBox: PropTypes.func
};

export default LocationInfoBox;
