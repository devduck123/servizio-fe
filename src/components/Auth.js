import React from "react";
import firebase from "firebase/compat/app";
import "firebaseui/dist/firebaseui.css";
import { useSelector, useDispatch } from "react-redux";
import { setJWT } from "../app/store";

export default function Auth() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    window.ui.start("#firebaseui-auth-container", {
      callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          firebase
            .auth()
            .currentUser.getIdToken()
            .then(function (token) {
              // console.log(token);
              dispatch(setJWT(token));
            });
          return true;
        },
        uiShown: function () {
          // The widget is rendered.
          // Hide the loader.
          document.getElementById("loader").style.display = "none";
        },
      },
      signInFlow: "popup",
      signInSuccessUrl: "/",
      signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
      // Other config options...
    });
  }, [dispatch]);

  const jwt = useSelector((state) => {
    return state.jwt;
  });
  console.log("jwt from redux: " + jwt.value);

  return (
    <section>
      <div id="firebaseui-auth-container"></div>
      <div id="loader">Loading...</div>
    </section>
  );
}
