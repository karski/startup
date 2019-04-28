const initialAuthState = {
  isAuthenticating: true,
  isAuthenticated: false,
  user: null
};

const initialOtherState = {
  value: "xxxx"
};

const uiInitialState = {
  sidebarOpen: false,
  bottomBarOpen: false,
  isAddingLocation: false,
  selectedLocation: null
};

const mapInitialState = {
  markerPosition: null
};

const initialState = {
  auth: initialAuthState,
  other: initialOtherState,
  notification: {},
  ui: uiInitialState,
  map: mapInitialState
};

export default initialState;
