import React from "react";
import PropTypes from "prop-types";
import AddLocationForm from "./AddLocationForm";
import { useStore } from "../hooks";

function BottomBar() {
  const [{ auth, other, ui }, dispatch] = useStore(); // eslint-disable-line
  return (
    <div id="bottom-bar">
      <h5>Add new issue</h5>
      <AddLocationForm />
    </div>
  );
}

BottomBar.propTypes = {};

export default BottomBar;
