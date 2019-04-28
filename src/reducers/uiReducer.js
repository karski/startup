import {
  UI_CLOSE_SIDEBAR,
  UI_OPEN_SIDEBAR,
  UI_TOGGLE_SIDEBAR,
  UI_IS_ADDING_LOCATION,
  UI_SELECTED_MARKER,
  UI_OPEN_BOTTOMBAR,
  UI_CLOSE_BOTTOMBAR,
  UI_TOGGLE_BOTTOMBAR
} from "./actions";

const uiReducer = (state, action) => {
  switch (action.type) {
    case UI_CLOSE_SIDEBAR:
      return {
        ...state,
        sidebarOpen: false
      };
    case UI_OPEN_SIDEBAR:
      return { ...state, sidebarOpen: true };
    case UI_TOGGLE_SIDEBAR:
      return { ...state, sidebarOpen: !state.sidebarOpen };
    case UI_IS_ADDING_LOCATION:
      return { ...state, isAddingLocation: action.payload };
    case UI_SELECTED_MARKER:
      return { ...state, selectedLocation: action.location };
    case UI_OPEN_BOTTOMBAR:
      return { ...state, bottomBarOpen: true };
    case UI_CLOSE_BOTTOMBAR:
      return { ...state, bottomBarOpen: false };
    case UI_TOGGLE_BOTTOMBAR:
      return { ...state, bottomBarOpen: !state.bottomBarOpen };
    default:
      return state;
  }
};

export default uiReducer;
