import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Home from "./pages/Home";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Home title="Home Page"/>
  </StrictMode>
);