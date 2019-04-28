import { useState, useEffect } from "react";
import {
  getUserLocations,
  getLocationWithComments,
  getAreaLocations
} from "../graphql/customQueries";
import { API, graphqlOperation } from "aws-amplify";
import get from "lodash/get";
import sortBy from "lodash/sortBy";

export const useUserLocations = (user, fetchKey) => {
  let [locations, setLocations] = useState([]);
  useEffect(() => {
    const fetchUserLocations = async () => {
      const result = await API.graphql(
        graphqlOperation(getUserLocations, {
          id: user.id
        })
      );
      let locations = get(result, "data.getUser.locations.items", []);
      setLocations(locations);
    };
    fetchUserLocations();
  }, [fetchKey]);
  return locations;
};

export const useAreaLocations = (areaId, fetchKey) => {
  let [locations, setLocations] = useState([]);
  useEffect(() => {
    const fetchAreaLocations = async () => {
      const result = await API.graphql(
        graphqlOperation(getAreaLocations, {
          id: areaId
        })
      );
      let locations = get(result, "data.getArea.locations.items", []);
      setLocations(locations);
    };
    fetchAreaLocations();
  }, [fetchKey]);
  return locations;
};

export const useLocationWithComments = (id, fetchKey) => {
  let [location, setLocation] = useState();
  useEffect(() => {
    const fetchLocationsWithComments = async () => {
      const result = await API.graphql(
        graphqlOperation(getLocationWithComments, {
          filter: { id: { contains: id } }
        })
      );
      let location = get(result, "data.listLocations.items[0]", []);
      // * sort comments by creation time
      if (location.comments && location.comments.items) {
        let comments = sortBy(location.comments.items, o => new Date(o.time));
        location.comments.items = comments;
      }
      setLocation(location);
    };
    fetchLocationsWithComments();
  }, [fetchKey]);
  return location;
};
