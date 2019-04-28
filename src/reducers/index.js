import { authReducer } from "./auth";
import { someOtherReducer } from "./other";
import { notificationReducer } from "./notificationReducer";
import uiReducer from "./uiReducer";
import mapReducer from "./mapReducer";

const mainReducer = (state, action) => {
  // const prevState = { ...state };
  let newState = {
    auth: authReducer(state.auth, action),
    other: someOtherReducer(state.other, action),
    notification: notificationReducer(state.notification, action),
    ui: uiReducer(state.ui, action),
    map: mapReducer(state.map, action)
  };
  // const oldDiff = difference(prevState, newState);
  // const newDiff = difference(newState, prevState);
  console.group(`%cACTION: ${action.type}`, "color: blue; font-size: 0.8rem");
  // console.log("old State: ", prevState);
  // console.log(
  //   `%c changed values (old state)`,
  //   "color: blue; font-size: 0.8rem"
  // );
  // console.table(oldDiff);
  // console.log(
  //   `%c changed values (new values)`,
  //   "color: blue; font-size: 0.8rem"
  // );
  // console.table(newDiff);
  console.log("new State: ", newState);
  console.groupEnd();

  return newState;
};

export default mainReducer;
