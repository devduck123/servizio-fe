import ReactDOM from "react-dom/client";
import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import { Provider } from "react-redux";
import store from "./app/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";
import BusinessesByCategory from "./components/BusinessesByCategory";
import "./styles.css";
import App from "./App";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzXC6EKzNjC4WQHS6fzNY32BSddWHYQ-4",
  authDomain: "servizio-be.firebaseapp.com",
  projectId: "servizio-be",
  storageBucket: "servizio-be.appspot.com",
  messagingSenderId: "526984009579",
  appId: "1:526984009579:web:0d2226094c641af0dfde2e",
};

firebase.initializeApp(firebaseConfig);

// Initialize the FirebaseUI Widget using Firebase.
window.ui = new firebaseui.auth.AuthUI(firebase.auth());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            // <Provider store={store}>
              <App />
            // </Provider>
          }
        >
          <Route path="businesses" element={<BusinessesByCategory />} />
          <Route
            path="*"
            element={
              <main>
                <h1>nothing here</h1>
              </main>
            }
          />
        </Route>
        <Route path="auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
