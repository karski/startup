import { AUTH_LOGIN, AUTH_LOGOUT } from "./actions";

export const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        isAuthenticated: true,
        isAuthenticating: false,
        user: action.payload
      };
    case AUTH_LOGOUT:
      return { user: null, isAuthenticated: false, isAuthenticating: false };
    default:
      return state;
  }
};
