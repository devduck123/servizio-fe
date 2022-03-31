import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));
// NOTE: React 18 replaced the above approach with the below
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
