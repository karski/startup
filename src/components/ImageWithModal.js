import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Image } from "react-bootstrap";
import { useKeyboardEvent } from "../hooks";

function ImageWithModal({ src }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  useKeyboardEvent("Escape", () => {
    setIsModalVisible(false);
  });
  return (
    <div>
      <Image
        fluid
        className="w-100"
        onClick={() => {
          if (!isModalVisible) {
            setIsModalVisible(true);
          }
        }}
        fluid
        src={src}
      />
      {isModalVisible && (
        <div
          className={isModalVisible ? "is-visible" : ""}
          id="img-modal"
          onClick={e => {
            setIsModalVisible(false);
          }}
        >
          <Image fluid src={src} />
        </div>
      )}
    </div>
  );
}

ImageWithModal.propTypes = {
  src: PropTypes.string
};

export default ImageWithModal;
