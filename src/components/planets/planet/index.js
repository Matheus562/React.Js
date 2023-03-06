import React, { Fragment } from "react";
import "../../shared/gray_img/style.css";
import GrayImg from "../../shared/gray_img/index.js";

const Planet = () => {
  return (
    <div>
      <h4>Mercúrio</h4>
      <p>
        Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o
        Sol a cada 87,969 dias terrestres.
      </p>
      <GrayImg />
    </div>
  );
};
export default Planet;
