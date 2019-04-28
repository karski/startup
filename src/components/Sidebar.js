import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useStore } from "../hooks";

function Sidebar(props) {
  const [{ ui }, dispatch] = useStore();
  // * prevent body scroll when sidebar is open
  useEffect(() => {
    if (props.visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  });
  return (
    <div id="sidebar" className={props.visible ? "" : "is-closed"}>
      <div className="sidebar-container">{props.children}</div>
    </div>
  );
}

Sidebar.propTypes = {};

export default Sidebar;
