import React from "react";
import PropTypes from "prop-types";

import { Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useStore } from "../hooks";
import { NOTIFICATION_CLOSE } from "../reducers/actions";

function Notification({ category }) {
  const [{ notification }, dispatch] = useStore();
  const dismissMessage = e => {
    dispatch({ type: NOTIFICATION_CLOSE, category });
  };
  let msg = notification[category];
  return msg ? (
    <div className="my-3">
      <Alert variant={msg.variant}>
        <div className="d-flex justify-content-between">
          <p className="m-0">{msg.text}</p>
          <FontAwesomeIcon onClick={dismissMessage} icon="times-circle" />
        </div>
      </Alert>
    </div>
  ) : null;
}

Notification.propTypes = {
  category: PropTypes.string
};

export default Notification;
