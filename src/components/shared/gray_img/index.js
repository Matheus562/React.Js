import React, { Fragment } from "react";
import "../gray_img/style.css";

const GrayImg = (props) => {
  return <img class="gray-img" src={props.img_url}></img>;
};
export default GrayImg;
