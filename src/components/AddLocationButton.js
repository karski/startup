import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { marker } from "../constants";

function AddLocationButton({
  clickAddLocationButton,
  isAddingLocation,
  markerPositionAlreadySet
}) {
  const buttonText = () => {
    if (markerPositionAlreadySet) {
      return "Move the marker around for another location";
    } else {
      return isAddingLocation
        ? "Click anywhere on the map to add location"
        : "Add a location";
    }
  };
  return (
    <div id="add-location-button">
      <Button onClick={clickAddLocationButton} size="sm">
        {buttonText()}
      </Button>
    </div>
  );
}

AddLocationButton.propTypes = {};

export default AddLocationButton;
