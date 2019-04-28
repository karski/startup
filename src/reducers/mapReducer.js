import { MAP_SET_MARKER, MAP_RESET_MARKER } from "./actions";

const mapReducer = (state, action) => {
  switch (action.type) {
    case MAP_SET_MARKER:
      return {
        ...state,
        markerPosition: {
          latitude: action.position[1],
          longitude: action.position[0]
        }
      };
    case MAP_RESET_MARKER:
      return {
        ...state,
        markerPosition: null
      };
    default:
      return state;
  }
};

export default mapReducer;
