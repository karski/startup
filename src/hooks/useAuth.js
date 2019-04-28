import { useEffect } from "react";
import { useStore } from "./index";
import { AUTH_LOGIN, AUTH_LOGOUT } from "../reducers/actions";
import { Auth, API, graphqlOperation, Hub, Logger } from "aws-amplify";
import { searchUsers } from "../graphql/queries";

import isEmpty from "lodash/isEmpty";
import get from "lodash/get";

const useAuth = () => {
  const [state, dispatch] = useStore(); // eslint-disable-line
  useEffect(() => {
    const checkAuth = async () => {
      const user = await Auth.currentUserInfo();
      if (isEmpty(user)) {
        dispatch({ type: AUTH_LOGOUT });
        return;
      }
      const result = await API.graphql(
        graphqlOperation(searchUsers, {
          filter: {
            uid: {
              match: user.username
            }
          }
        })
      );
      dispatch({
        type: AUTH_LOGIN,
        payload: get(result, "data.searchUsers.items[0]", null)
      });
    };

    checkAuth();
    const authLogger = new Logger("auth_logger");
    authLogger.onHubCapsule = capsule => {
      switch (capsule.payload.event) {
        case "signIn":
          checkAuth();
          break;
        case "signUp":
          checkAuth();
          break;
        case "signOut":
          checkAuth();
          break;
        case "signIn_failure":
          checkAuth();
          break;
        case "configured":
          authLogger.log("the Auth module is configured");
          break;
        default:
          break;
      }
    };
    Hub.listen("auth", authLogger);
  }, []);
};

export default useAuth;
