import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BusinessesByCategory from "./components/BusinessesByCategory";
import "./styles.css";
import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));
// NOTE: React 18 replaced the above approach with the below
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
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
    </Routes>
  </BrowserRouter>
);
