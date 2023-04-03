import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlanetsScreen from "./screens/planets";
import PlanetScreen from "./screens/planet";

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<PlanetsScreen />} />
      <Route exact path="/planet" element={<PlanetScreen />} />
    </Routes>
  </BrowserRouter>
);

export default Rotas;
