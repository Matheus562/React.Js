import React, { Fragment } from "react";

const DescriptionWithLink = (props) => {
  if (props.link) {
    return (
      <p>
        <fragment>
          <p>{props.description}</p>
          <a href={props.link}>{props.link}</a>
        </fragment>
      </p>
    );
  } else {
    return (
      <Fragment>
        <p>
          <u>{props.description}</u>
        </p>
      </Fragment>
    );
  }
};
export default DescriptionWithLink;
