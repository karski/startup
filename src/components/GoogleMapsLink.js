import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

function GoogleMapsLink({ location }) {
  const { lat, lng } = location.position;
  const googleMapLink = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
  return (
    <div className="d-flex justify-content-center">
      <Button size="sm" as="a" target="_blank" href={googleMapLink}>
        Show directions in Google Map
      </Button>
    </div>
  );
}

GoogleMapsLink.propTypes = {
  location: PropTypes.object.isRequired
};

export default GoogleMapsLink;
