import React from "react";
import PropTypes from "prop-types";
import SingleLocation from "../components/SingleLocation";

function Location(props) {
  console.log("props", props);
  return (
    <div>
      <SingleLocation id={props.match.params.id} />
    </div>
  );
}

Location.propTypes = {};

export default Location;
