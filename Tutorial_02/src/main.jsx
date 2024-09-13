import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { StrictMode } from "react";
import { FirebaseProvider } from "./Context/Firebase.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FirebaseProvider>
    <App />
    </FirebaseProvider>
  </StrictMode>
);