import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import ReactMapGL, { Marker, NavigationControl } from "react-map-gl";
import AllLocationsMarkers from "./AllLocationsMarkers";
import AddLocationButton from "./AddLocationButton";
import { useStore, useUserLocations, useAreaLocations } from "../hooks";
import {
  UI_SELECTED_MARKER,
  UI_IS_ADDING_LOCATION,
  MAP_SET_MARKER,
  UI_OPEN_BOTTOMBAR
} from "../reducers/actions";
import shortid from "shortid";

import { festivalBounds, areaIdTemp } from "../constants";
import { bounds2Viewport } from "../utils/geo";

const mapStyle =
  "https://maps.watershedmap.org/styles/klokantech-basic/style.json";

const initialViewport = {
  // latitude: 29.98391,
  // longitude: -90.0813,
  // zoom: 12
};

const Map = props => {
  const [viewport, setViewport] = useState();
  const [fetchKey, setFetchKey] = useState(shortid.generate());
  const [refMap, setRefMap] = useState();
  const [selectedMarker, setSelectedMarker] = useState();
  const [{ map, ui }, dispatch] = useStore(); // eslint-disable-line
  let locations = useAreaLocations(areaIdTemp, fetchKey);
  let mapRef = React.createRef();
  let divRef = React.useRef(null);
  useEffect(() => {
    let el = document.getElementById("map");
    const vp = bounds2Viewport(festivalBounds, [
      el.offsetHeight,
      el.offsetWidth
    ]);
    setViewport({
      height: el.offsetHeight,
      width: el.offsetWidth,
      ...vp
    });
    setRefMap(mapRef.getMap());
  }, []);
  if (refMap) {
    // console.log("refMap", refMap.getCenter());
  }

  const onMapClick = e => {
    if (ui.isAddingLocation) {
      dispatch({ type: MAP_SET_MARKER, position: e.lngLat });
      dispatch({ type: UI_OPEN_BOTTOMBAR });
      return;
    }
    if (ui.selectedLocation) {
      dispatch({ type: UI_SELECTED_MARKER, location: null });
    }
    // setSelectedMarker(null);
  };

  const handleOnAddLocationButtonClick = e => {
    dispatch({ type: UI_IS_ADDING_LOCATION, payload: true });
  };
  return (
    <div id="map" ref={divRef}>
      <AddLocationButton
        isAddingLocation={ui.isAddingLocation}
        clickAddLocationButton={handleOnAddLocationButtonClick}
        markerPositionAlreadySet={map.markerPosition}
      />
      <ReactMapGL
        ref={map => (mapRef = map)}
        {...viewport}
        mapStyle={mapStyle}
        onViewportChange={vp => {
          setViewport(vp);
        }}
        onClick={onMapClick}
      >
        {map.markerPosition && (
          <Marker
            className="marker"
            {...map.markerPosition}
            offsetLeft={-25}
            offsetTop={-50}
            draggable={true}
            onDragEnd={e => {
              dispatch({ type: MAP_SET_MARKER, position: e.lngLat });
            }}
          />
        )}
        <AllLocationsMarkers
          locations={locations}
          selectedMarker={selectedMarker}
          setSelectedMarker={setSelectedMarker}
        />
      </ReactMapGL>
    </div>
  );
};

Map.propTypes = {};

export default Map;
