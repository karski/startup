export const someOtherReducer = (state, action) => {
  switch (action.type) {
    case "OTHER_ON":
      return {
        value: "on"
      };
    case "OTHER_OFF":
      return { value: "off" };
    default:
      return state;
  }
};
