import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ImageUpload from "./ImageUpload";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Notification from "./Notification";
import {
  NOTIFICATION_CLOSE,
  NOTIFICATION_NEW,
  UI_CLOSE_SIDEBAR,
  UI_CLOSE_BOTTOMBAR,
  UI_IS_ADDING_LOCATION,
  MAP_SET_MARKER,
  MAP_RESET_MARKER
} from "../reducers/actions";

import { useStore } from "../hooks";
import { API, graphqlOperation } from "aws-amplify";
import { createLocation, updateLocation } from "../graphql/mutations";
import isEmpty from "lodash/isEmpty";
import get from "lodash/get";
import { reverseGeoLocation } from "../utils";

// ! Necessary to set explicitly for error (from controlled to uncontrolled) not being thrown
const emptyForm = {
  name: "",
  description: "",
  type: "LikeIt",
  locationPicture: ""
};

const AddLocationForm = ({ formValues = emptyForm, doneUpdating = null }) => {
  const [isValid, setIsValid] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadImage, setUploadImage] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [values, setValues] = useState(
    !isEmpty(formValues) ? formValues : { ...emptyForm }
  );
  const [{ auth, map }, dispatch] = useStore();
  // * Validation
  useEffect(() => {
    try {
      if (
        values.name.length > 0 &&
        values.description.length > 0 &&
        values.type
      ) {
        setIsValid(true);
      }
    } catch (e) {
      setIsValid(false);
    }
  });
  // * Form Submit
  async function formSubmit(e) {
    e.preventDefault();
    console.log("e", e);
    console.log("formvaliues", formValues);
    console.log("values", values);
    console.log("map", map);
    // const lat = get(map, "markerPosition[1]", values.position.lat);
    // const lng = get(map, "markerPosition[0]", values.position.lng);
    let lat = get(values, "position.lat", null);
    let lng = get(values, "position.lng", null);
    // * If there is a map position from the map it overrides previous position
    if (!lat) {
      lat = map.markerPosition && map.markerPosition.latitude;
    }
    if (!lng) {
      lng = map.markerPosition && map.markerPosition.longitude;
    }
    setIsUploading(true);
    const address = await reverseGeoLocation({
      lat,
      lng
    });
    if (emptyForm !== formValues) {
      // * update previous Location
      try {
        const input = {
          ...formValues,
          ...values,
          date: new Date().toString(),
          locationAreaId: auth.user.area.id,
          locationUserId: auth.user.id,
          position: {
            lat,
            lng
          },
          address,
          locationPicture: imageUrl
        };
        const result = await API.graphql(
          graphqlOperation(updateLocation, {
            input
          })
        );
        console.log("final resolt", result);
        dispatch({
          type: NOTIFICATION_NEW,
          category: "updated_location",
          variant: "primary",
          text: `${result.data.updateLocation.name} updated`
        });
        setTimeout(() => {
          dispatch({ type: NOTIFICATION_CLOSE, category: "updated_location" });
        }, 2000);
      } catch (err) {
        console.log("UPDATE ERROR", err);
      } finally {
        setIsUploading(false);
        setImageUrl("");
        setValues(emptyForm);
        dispatch({ type: UI_CLOSE_SIDEBAR });
        dispatch({ type: UI_IS_ADDING_LOCATION, payload: false });
        if (doneUpdating) {
          // * close Form
          doneUpdating();
        }
      }
    } else {
      // * add new Location
      try {
        const input = {
          ...values,
          date: new Date().toString(),
          // locationAreaId: auth.user.area.id,
          locationAreaId: auth.user.area.id,
          locationUserId: auth.user.id,
          position: {
            lat,
            lng
          },
          address,
          locationPicture: imageUrl
        };
        const result = await API.graphql(
          graphqlOperation(createLocation, {
            input
          })
        );
        dispatch({ type: UI_IS_ADDING_LOCATION, payload: false });
        dispatch({
          type: NOTIFICATION_NEW,
          category: "new_location",
          variant: "primary",
          text: `${result.data.createLocation.name} added`
        });
        setTimeout(() => {
          dispatch({ type: NOTIFICATION_CLOSE, category: "new_location" });
        }, 2000);
      } catch (e) {
        console.log("e", e);
      } finally {
        setIsUploading(false);
        setValues(emptyForm);
        setImageUrl("");
        dispatch({ type: UI_CLOSE_BOTTOMBAR });
      }
    }
  }

  const handleChange = event => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };

  const onImageUploadFinished = url => {
    setImageUrl(url);
    setUploadImage(false);
  };

  const cancelUpload = () => {
    dispatch({ type: UI_CLOSE_BOTTOMBAR });
    dispatch({ type: UI_IS_ADDING_LOCATION, payload: false });
    dispatch({ type: MAP_RESET_MARKER });
  };
  return (
    <div id="add-location-form">
      <Container className="mb-4">
        <Row className="justify-content-center">
          <Col>
            <Form onSubmit={formSubmit}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  type="text"
                  placeholder="placename etc"
                  name="name"
                  value={values.name}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>Type</Form.Label>
                <Form.Control
                  as="select"
                  name="type"
                  onChange={handleChange}
                  value={values.type}
                >
                  <option>LikeIt</option>
                  <option>HateIt</option>
                  <option>Improvement</option>
                  <option>FixIt</option>
                  <option>Suggestion</option>
                  <option>Favorite</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  onChange={handleChange}
                  placeholder="more text"
                  name="description"
                  value={values.description}
                />
              </Form.Group>
              {imageUrl && <img className="img-fluid" src={imageUrl} />}
              {uploadImage && (
                <ImageUpload
                  user={auth.user}
                  callback={onImageUploadFinished}
                  stylingClass="img-upload"
                />
              )}
              <div className="d-flex justify-content-center">
                <Button
                  onClick={() => setUploadImage(true)}
                  variant="outline-primary"
                >
                  {imageUrl ? "Change image" : "Upload an image"}
                </Button>

                <Button
                  variant="outline-primary"
                  type="submit"
                  // block
                  disabled={!isValid}
                >
                  {isUploading ? "Submitting" : "Submit"}
                </Button>
                <Button onClick={cancelUpload} variant="outline-primary">
                  Cancel
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
        <Notification category="new_location" />
      </Container>
    </div>
  );
};

AddLocationForm.propTypes = {
  formValues: PropTypes.object,
  doneUpdating: PropTypes.func
};

export default AddLocationForm;