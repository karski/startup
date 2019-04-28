import React, { useState } from "react";
import PropTypes from "prop-types";
import { Row, Col, Card, Image } from "react-bootstrap";
import ImageWithModal from "./ImageWithModal";
import ta from "time-ago";
import uuid from "uuid";
import { useInterval } from "../hooks";

function AllComments({ comments }) {
  const [commentKey, setCommentKey] = useState(uuid());
  useInterval(() => {
    setCommentKey(uuid());
  }, 10000);
  return (
    <Row className="my-2 ">
      <Col>
        <div className="card-columns" key={commentKey}>
          {comments.map((c, i) => (
            <Card key={c.id} className="my-2 masonry-card ">
              <Card.Body>
                <Card.Title>
                  <div className="d-flex justify-content-between">
                    <Image
                      src={`https://randomuser.me/api/portraits/thumb/men/${i}.jpg`}
                      thumbnail
                    />
                    <small className="text-monospace align-self-end">
                      {ta.ago(c.time)} by {c.user.name}
                    </small>
                  </div>
                </Card.Title>
                <Card.Text>{c.content}</Card.Text>
                <ImageWithModal src={c.commentPicture} />
              </Card.Body>
            </Card>
          ))}
        </div>
      </Col>
    </Row>
  );
}

AllComments.propTypes = {
  comments: PropTypes.array.isRequired
};

export default AllComments;
