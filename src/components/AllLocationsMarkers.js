import React, { useState } from "react";
import PropTypes from "prop-types";
import { Marker } from "react-map-gl";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";
import { useStore } from "../hooks/index";
import { UI_SELECTED_MARKER } from "../reducers/actions";

function AllLocationsMarkers({ locations }) {
  const [{ ui }, dispatch] = useStore();
  const _onMarkerClick = location => {
    dispatch({ type: UI_SELECTED_MARKER, location });
  };
  return (
    <>
      {locations.length !== 0
        ? locations.map(l => (
            <Marker
              key={l.position.lat}
              latitude={l.position.lat}
              longitude={l.position.lng}
              offsetLeft={-15}
              offsetTop={-40}
            >
              <LocationMarker location={l} onMarkerClick={_onMarkerClick} />
            </Marker>
          ))
        : null}
    </>
  );
}

AllLocationsMarkers.propTypes = {
  locations: PropTypes.array
};

export default AllLocationsMarkers;
