import React, { Fragment } from "react";
import Planet from "./planet";

const Planets = () => {
  return (
    <Fragment>
      <h3>Planet List</h3>
      <hr />
      <Planet
        name="Mercúrio"
        description="Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres."
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/900px-Mercury_in_color_-_Prockter07-edit1.jpg"
      />
    </Fragment>
  );
};
export default Planets;
