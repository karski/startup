import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import { ProgressBar } from "react-bootstrap";
import { useInterval, useStore } from "../hooks";
import { useDropzone } from "react-dropzone";
import request from "superagent";
import { CLOUDINARY_UPLOAD_PRESET, CLOUDINARY_UPLOAD_URL } from "../constants";

import { NOTIFICATION_CLOSE, NOTIFICATION_NEW } from "../reducers/actions";

function ImageUpload({ callback, stylingClass, text }) {
  let user = {
    id: "festival"
  };
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState();
  const [progress, setProgress] = useState(0);
  const [{}, dispatch] = useStore();
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png",
    onDrop: f => {
      onImageDrop(f);
    }
  });
  useInterval(() => {
    isUploading && setProgress(progress + 1);
  }, 50);

  const onImageDrop = files => {
    setIsUploading(true);
    let upload = request
      .post(`${CLOUDINARY_UPLOAD_URL}`)
      .field("upload_preset", CLOUDINARY_UPLOAD_PRESET)
      .field("context", `userid=${user.id}`)
      .field("file", files[0]);

    upload.end((err, response) => {
      setIsUploading(false);
      if (err) {
        dispatch({
          type: NOTIFICATION_NEW,
          category: "img_upload",
          variant: "error",
          text: `Image upload failed`
        });
        console.error(err);
        callback(null);
      }
      try {
        if (response.body.secure_url !== "") {
          setUploadedFile(response.body.secure_url);
          callback(response.body.secure_url);
          return;
        }
      } catch (err) {
        dispatch({
          type: NOTIFICATION_NEW,
          category: "img_upload",
          variant: "danger",
          text: `Image upload failed`
        });
        callback(null);
      }
    });
  };
  return (
    <div>
      {isUploading ? (
        <div className="d-flex justify-content-center">
          <ProgressBar
            className="progress-bar-image-upload "
            animated
            now={progress % 100}
          />
        </div>
      ) : (
        <div className={`my-2 ${stylingClass} dark-text`}>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>{text}</p>
          </div>
        </div>
      )}
    </div>
  );
}

ImageUpload.defaultProps = {
  text: "Drag or click to upload images"
};

ImageUpload.propTypes = {
  callback: PropTypes.func.isRequired,
  stylingClass: PropTypes.string,
  text: PropTypes.string
};

export default ImageUpload;
