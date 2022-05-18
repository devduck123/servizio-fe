import React from "react";
import firebase from "firebase/compat/app";

import Header from "./components/Header";
import Description from "./components/Description";
import Feature from "./components/Feature";

export default function App() {
  let currSignedIn = firebase.auth().currentUser != null ? true : false;
  let [signedIn, setSignedIn] = React.useState(currSignedIn);

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // user is signed in
      console.log(user);
      // TODO: manually pulling values out instead of using redux lol
      window.displayName = user.displayName;
      window.email = user.email;
      window.emailVerified = user.emailVerified;
      window.uid = user.uid;
      window.jwt = user._delegate.accessToken;
      setSignedIn(() => true);
    } else {
      // user is signed out
      console.log("user is signed out");
      window.displayName = "";
      window.emailVerified = "";
      window.uid = "";
      window.jwt = "";
      setSignedIn(() => false);
    }
  });

  function signOut() {
    console.log("signing out");
    firebase
      .auth()
      .signOut()
      .then(() => alert("Successfully signed out."));
  }

  return (
    <div>
      <Header signedIn={signedIn} signOut={signOut} />
      <Description />
      <Feature />
    </div>
  );
}
