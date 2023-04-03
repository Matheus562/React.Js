import React, { Fragment, useState, useEffect } from "react";
import GrayImg from "../../shared/gray_img/index.js";
import DescriptionWithLink from "../../shared/description_with_link";

const Planet = (props) => {
  let title;
  if (props.title_with_underline)
    title = (
      <h4>
        <u>{props.name}</u>
      </h4>
    );
  else title = <h4>{props.name}</h4>;

  return (
    <div>
      <h4>{title}</h4>
      <DescriptionWithLink description={props.description} link={props.link} />
      <GrayImg img_url={props.img_url} gray={props.gray} />
    </div>
  );
};

export default Planet;
