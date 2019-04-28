import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Amplify from "aws-amplify";
import App from "./App";
import config from "./config";
import appSyncConfig from "./aws-exports";
import * as serviceWorker from "./serviceWorker";
import { StoreProvider, mainReducer } from "./hooks/index";
import initialState from "./reducers/initialState";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrashAlt,
  faThumbsUp,
  faThumbsDown,
  faEdit,
  faTimesCircle,
  faSpinner,
  faComment,
  faComments,
  faHeart,
  faHandMiddleFinger,
  faArrowCircleUp,
  faExclamation,
  faStickyNote,
  faStar,
  faExternalLinkAlt,
  faPoop
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faThumbsUp,
  faThumbsDown,
  faTrashAlt,
  faEdit,
  faTimesCircle,
  faSpinner,
  faComment,
  faComments,
  faExternalLinkAlt,
  faHeart,
  faHandMiddleFinger,
  faArrowCircleUp,
  faExclamation,
  faStickyNote,
  faStar,
  faPoop
);

Amplify.configure({
  // * AppSync config
  ...appSyncConfig,
  Auth: {
    // mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
    // region: config.cognito.REGION,
    // userPoolId: config.cognito.USER_POOL_ID,
    // identityPoolId: config.cognito.IDENTITY_POOL_ID,
    // userPoolWebClientId: config.cognito.APP_CLIENT_ID
  },
  Storage: {
    region: appSyncConfig.aws_user_files_s3_bucket_region,
    bucket: appSyncConfig.aws_user_files_s3_bucket,
    identityPoolId: appSyncConfig.aws_cognito_identity_pool_id
  }
  // API: {
  //   endpoints: [
  //     {
  //       name: "notes",
  //       endpoint: config.apiGateway.URL,
  //       region: config.apiGateway.REGION
  //     },
  //   ]
  // }
});

// Amplify.configure({...config, ...config2);

ReactDOM.render(
  <Router>
    <StoreProvider initialState={initialState} reducer={mainReducer}>
      <App />
    </StoreProvider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
