import React, { useEffect } from "react";
import AddLocationForm from "../components/AddLocationForm";
import Sidebar from "../components/Sidebar";
import Bottombar from "../components/BottomBar";
import SelectedMarkerInfo from "../components/SelectedMarkerInfo";

import { useStore } from "../hooks/index";
import { OTHER_OFF, UI_TOGGLE_SIDEBAR } from "../reducers/actions";
import Map from "../components/Map";

const Home = () => {
  const [{ auth, other, ui }, dispatch] = useStore(); // eslint-disable-line
  useEffect(() => {}, []);
  return (
    <div id="home">
      {ui.bottomBarOpen && (
        <Bottombar>
          {/* {auth.isAuthenticating ? <div>Loading</div> : <AddLocationForm />} */}
          <AddLocationForm />
        </Bottombar>
      )}
      <Sidebar visible={ui.selectedLocation}>
        {ui.selectedLocation && (
          <SelectedMarkerInfo location={ui.selectedLocation} />
        )}
      </Sidebar>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Map />
      </React.Suspense>
    </div>
  );
};

export default Home;
