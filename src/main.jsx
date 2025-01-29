import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { MainLayout } from "./layouts/main.layout";
import { Floatmenu } from "./pages/floatmenu";
import { Embed } from "./pages/embed";
import "./style.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Floatmenu />} />
          <Route path="/embed" element={<Embed />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
