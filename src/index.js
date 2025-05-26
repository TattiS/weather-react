import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { WeatherSearchEngine } from "./WeatherSearch";
import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <WeatherSearchEngine />
    <footer>
      {" "}
      <a
        href="https://github.com/TattiS/weather-react.git"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open-source code
      </a>{" "}
      by{" "}
      <a
        href="https://github.com/TattiS"
        target="_blank"
        rel="noopener noreferrer"
      >
        TattiS
      </a>{" "}
      at{" "}
      <a
        href="https://www.shecodes.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        SheCodes
      </a>
    </footer>
  </StrictMode>
);
