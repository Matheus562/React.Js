import React from "react";
import "../gray_img/style.css";

const GrayImg = (props) => {
  return (
    <img
      className={props.gray ? "gray-img" : "color-img"}
      src={props.img_url}
    ></img>
  );
};
export default GrayImg;
