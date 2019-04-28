import React, { useState } from "react";
import PropTypes from "prop-types";

import { Button, Row, Col, Form } from "react-bootstrap";
import ImageUpload from "./ImageUpload";

import { API, graphqlOperation } from "aws-amplify";
import { createComment } from "../graphql/mutations";

import { useStore } from "../hooks";

// import { useKeyPress } from "../hooks";

function AddComment({ location, user, doneCommenting }) {
  const [comment, setComment] = useState("");
  const [commentImgUrl, setCommentImgUrl] = useState();
  const [{ auth }, dispatch] = useStore();
  const handleSubmit = async e => {
    e.preventDefault();
    if (comment.trim().length === 0) {
      return;
    }
    try {
      await API.graphql(
        graphqlOperation(createComment, {
          input: {
            content: comment,
            time: new Date().toString(),
            commentLocationId: location.id,
            commentUserId: user.id,
            commentPicture: commentImgUrl
          }
        })
      );
    } catch (err) {
      console.log(" ADD COMMENT ERR", err);
    } finally {
      setComment("");
      setCommentImgUrl();
      doneCommenting && doneCommenting();
    }
  };

  const handleChange = e => {
    setComment(e.target.value);
  };
  const onImageUploadFinished = url => {
    setCommentImgUrl(url);
  };

  return (
    <Form id="add-comment" className="my-2" onSubmit={handleSubmit}>
      <Row className="no-gutters">
        <Col>
          <Form.Control
            as="textarea"
            rows="3"
            onChange={handleChange}
            placeholder="your comment"
            value={comment}
          />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <div className="d-flex justify-content-center">
            {commentImgUrl ? (
              <img className="comment-img" src={commentImgUrl} />
            ) : (
              <ImageUpload
                user={auth.user}
                callback={onImageUploadFinished}
                stylingClass="img-upload-comment"
                text="drop img"
              />
            )}
            <Button type="submit">Submit comment</Button>
          </div>
        </Col>
      </Row>
    </Form>
  );
}

AddComment.propTypes = {
  location: PropTypes.object.isRequired,
  doneCommenting: PropTypes.func,
  user: PropTypes.object.isRequired
};

export default AddComment;
