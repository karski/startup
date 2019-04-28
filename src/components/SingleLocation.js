import React, { useState } from "react";
import PropTypes from "prop-types";
import { useStore } from "../hooks";
import AddComment from "./AddComment";
import AllComments from "./AllComments";
import ImageWithModal from "./ImageWithModal";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import GoogleMapsLink from "./GoogleMapsLink";
import { useLocationWithComments } from "../hooks";
import shortid from "shortid";
import find from "lodash/find";

function SingleLocation({ id }) {
  const [fetchKey, setFetchKey] = useState(shortid.generate());
  // const location = useLocationWithComments(id, fetchKey);

  let tasks = JSON.parse(localStorage.getItem("tasks"));
  let location = find(tasks, o => o.id === id);
  const [{ auth }, dispatch] = useStore();
  const doneCommenting = () => {
    setFetchKey(shortid.generate());
  };
  console.log("location", location);
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          {location && (
            <div id="single-location">
              <Card>
                <Card.Header variant="primary">
                  <h4 className="text-center">{location.name}</h4>
                </Card.Header>
                <ImageWithModal
                  className="my-2"
                  src={location.locationPicture}
                />
                <Card.Body>
                  <p>
                    <small>{location.address}</small>
                  </p>
                  <Card.Title>{location.description}</Card.Title>
                  <Badge variant="dark">{location.type}</Badge>
                  {/* <GoogleMapsLink location={location} /> */}
                </Card.Body>
                {location.response && <h4>{location.response}</h4>}
              </Card>
              <AddComment
                location={location}
                user={auth.user}
                doneCommenting={doneCommenting}
              />
              {location.comments && location.comments.items.length > 0 && (
                <AllComments comments={location.comments.items} />
              )}
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

SingleLocation.propTypes = {
  id: PropTypes.string.isRequired
};

export default SingleLocation;
