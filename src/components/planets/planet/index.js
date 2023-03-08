import React, { Fragment } from "react";
import "../../shared/gray_img/style.css";
import GrayImg from "../../shared/gray_img/index.js";
import DescriptionWithLink from "../../shared/description_with_link";

const Planet = (props) => {
  const names = ["a", "b", "c", "d"];

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

      <h4>Satélites</h4>
      <ul>
        {names.map((n) => (
          <li>satélites {n}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
};
export default Planet;
