import React, { Fragment } from "react";

const DescriptionWithLink = (props) => {
  if (props.link) {
    return (
      <p>
        <fragment>
          <p>{props.description}</p>
          <p>
            <a href={props.link}>{props.link}</a>
          </p>
        </fragment>
      </p>
    );
  } else {
    return (
      <p>
        <fragment>
          <p>
            <u>{props.description}</u>
          </p>
        </fragment>
      </p>
    );
  }
};
export default DescriptionWithLink;
