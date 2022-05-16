import firebase from "firebase/compat/app";
import "firebaseui/dist/firebaseui.css";
import { useSelector, useDispatch } from "react-redux";
import { setJWT } from "./app/store";

import Header from "./components/Header";
import Description from "./components/Description";
import Feature from "./components/Feature";

export default function App() {
  const dispatch = useDispatch();

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
  const jwt = useSelector((state) => {
    return state.jwt;
  });
  console.log("jwt from redux: " + jwt.value);

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  return (
    <div>
      <Header />
      <Description />
      <Feature />
      <div id="firebaseui-auth-container"></div>
      <div id="loader">Loading...</div>
    </div>
  );
}
