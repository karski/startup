import { NOTIFICATION_NEW, NOTIFICATION_CLOSE } from "./actions";

export const notificationReducer = (state, action) => {
  switch (action.type) {
    case NOTIFICATION_NEW:
      return {
        ...state,
        [action.category]: {
          text: action.text,
          variant: action.variant
        }
      };
    case NOTIFICATION_CLOSE:
      let newState = { ...state };
      delete newState[action.category];
      return newState;
    default:
      return state;
  }
};
