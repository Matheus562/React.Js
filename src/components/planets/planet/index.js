import React, { Fragment } from "react";
import "../../shared/gray_img/style.css";
import GrayImg from "../../shared/gray_img/index.js";
import DescriptionWithLink from "../../shared/description_with_link";

const Planet = (props) => {
  return (
    <div>
      <h4>{props.name}</h4>
      <DescriptionWithLink description={props.description} link={props.link} />
      <GrayImg img_url={props.img_url} />
    </div>
  );
};
export default Planet;
