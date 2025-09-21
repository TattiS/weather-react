import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import { WeatherSearchEngine } from "./WeatherSearch";
import Footer from "./Footer";
import Weather from "./Weather";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <WeatherSearchEngine /> */}
    <Weather />
    <Footer />
  </StrictMode>
);
