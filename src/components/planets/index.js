import React, { Fragment, useState, useEffect } from "react";
import Planet from "./planet";

async function getPlanets() {
  let response = await fetch("http://localhost:3000/api/planets.json");
  let data = await response.json();
  return data;
}
/*componentDidMount() {
  getPlanets().then((data) => {
    setState((state) => ({
      planets: data["planets"],
    }));
  });
}*/

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    getPlanets().then((data) => {
      setPlanets(data["planets"]);
    });
  }, []);

  const removeLast = () => {
    //... pega todas as proprieadades do objeto
    let new_planets = [...planets];
    //pop remove o ultimo elemento do array
    new_planets.pop();
    setPlanets(new_planets);
  };

  const duplicateLastPlanet = () => {
    let last_planet = planets[planets.length - 1];
    setPlanets([...planets, last_planet]);
  };

  return (
    <Fragment>
      <h3>Planet List</h3>
      <button onClick={removeLast}>Remove Last</button>
      <button onClick={duplicateLastPlanet}>Duplicate Last</button>
      <hr />
      {planets.map((planet, index) => (
        <Planet
          name={planet.name}
          description={planet.description}
          img_url={planet.img_url}
          link={planet.link}
          id={planet.id}
          key={index}
        />
      ))}
    </Fragment>
  );
};

export default Planets;
