import React, { Fragment } from "react";

const DescriptionWithLink = (props) => {
  return (
    <p>
      <fragment>
        <p>{props.description}</p>
        <a href={props.link}>{props.link}</a>
      </fragment>
    </p>
  );
};
export default DescriptionWithLink;
