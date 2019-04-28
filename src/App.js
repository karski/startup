import React from "react";
// import { Auth } from "aws-amplify";
import Navbar from "./components/Navbar";
import PageWrapper from "./components/PageWrapper";
import Routes from "./components/Routes";
import LoadingBar from "./components/LoadingBar";
import { useAuth, useStore } from "./hooks";

import "./style/index.scss";

const App = () => {
  const [{ auth, ui }] = useStore();
  useAuth();
  return (
    <div id="app">
      <Navbar />
      <PageWrapper>
        {auth.isAuthenticating ? <LoadingBar /> : <Routes />}
      </PageWrapper>
    </div>
  );
};

export default App;
