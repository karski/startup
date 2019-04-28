import React, { useEffect, useState } from "react";
import AddLocationForm from "../components/AddLocationForm";
import Sidebar from "../components/Sidebar";
import Bottombar from "../components/BottomBar";
import SelectedMarkerInfo from "../components/SelectedMarkerInfo";
import UserLocationList from "../components/UserLocationsList";

import { useStore } from "../hooks/index";
import { OTHER_OFF, UI_TOGGLE_SIDEBAR } from "../reducers/actions";
import Map from "../components/Map";
import app from "firebase/app";

import "firebase/firestore";
const config = {
  apiKey: "AIzaSyD9ZqOHmA3eCGHNWFvwamTYc813Pa_IWzc",
  authDomain: "control-freak-e23e3.firebaseapp.com",
  databaseURL: "https://control-freak-e23e3.firebaseio.com",
  projectId: "control-freak-e23e3",
  storageBucket: "control-freak-e23e3.appspot.com",
  messagingSenderId: "403671167912"
};

const Home = () => {
  const [{ auth, other, ui }, dispatch] = useStore(); // eslint-disable-line
  const [db, setDB] = useState();
  useEffect(() => {
    app.initializeApp(config);
    const db = app.firestore();
    setDB(db);
    // const unsubscribe = db.collection("tasks").onSnapshot(docSnapshot => {
    //   console.log(`Received doc snapshot: ${docSnapshot}`);
    //   console.log("doc", docSnapshot.val());
    // });
    // // ...
    // // .doc(id)
    // // .collection('ingredients') .onSnapshot( snapshot => { const ingredients = [] snapshot.forEach(doc => { ingredients.push(doc) }) setLoading(false) setIngredients(ingredients) }, err => { setError(err) } )

    // return () => unsubscribe();
  }, []);
  console.log("aaaaaaaaaaaaa", db);
  if (db) {
    return (
      <div id="home">
        {ui.bottomBarOpen && (
          <Bottombar db={db}>
            {/* {auth.isAuthenticating ? <div>Loading</div> : <AddLocationForm />} */}
            <AddLocationForm db={db} />
          </Bottombar>
        )}
        <Sidebar visible={ui.selectedLocation}>
          {ui.selectedLocation && (
            <SelectedMarkerInfo location={ui.selectedLocation} />
          )}
        </Sidebar>
        <Map db={db} />
      </div>
    );
  } else return null;
};

export default Home;
