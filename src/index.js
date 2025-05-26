import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { WeatherSearchEngine } from "./WeatherSearch";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <WeatherSearchEngine />
  </StrictMode>
);
