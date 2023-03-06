import React, { Fragment } from "react";
import "../../shared/gray_img/style.css";
import GrayImg from "../../shared/gray_img/index.js";

const Planet = (props) => {
  return (
    <div>
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <GrayImg img_url={props.img_url} />
    </div>
  );
};
export default Planet;
