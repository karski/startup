import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { marker } from "../constants";

const LocationMarker = ({ location, onMarkerClick }) => {
  let mark = marker[location.type];
  return (
    <span onClick={() => onMarkerClick(location)}>
      <svg
        width="30px"
        height="44px"
        viewBox="0 0 30 40"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs />
        <g stroke="none" strokeWidth="1" fill="none">
          <g id="map-marker-point" fill={mark.pinColor}>
            <ellipse
              id="Oval-1"
              fillOpacity="0.167006341"
              fill="#000000"
              cx="15"
              cy="39"
              rx="10"
              ry="5"
            />
            <path
              d="M14.9603111,0.0389586363 C6.69825573,0.0389586363 0,6.73721437 0,14.9992698 C0,23.2608382 12.4667636,39.932797 14.9603111,39.932797 C17.4533717,39.932797 29.9201353,23.2608382 29.9201353,14.9992698 C29.9201353,6.73721437 23.2218795,0.0389586363 14.9603111,0.0389586363 L14.9603111,0.0389586363 Z"
              id="Fill-1"
            />
          </g>
        </g>
        <g transform="translate(5,8)">
          <svg height="15px" width="20px">
            <FontAwesomeIcon
              className="mini-icon"
              icon={mark.icon}
              // color="#FFFFFF"
            />
          </svg>
        </g>
      </svg>
    </span>
  );
};
LocationMarker.propTypes = {
  location: PropTypes.object,
  onMarkerClick: PropTypes.func
};
export default LocationMarker;
