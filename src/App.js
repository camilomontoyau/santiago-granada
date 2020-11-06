import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import Axios from "axios";

function ListStarWars() {
  const [characters, setCharacter] = useState([]);

  useEffect(() => {
    Axios.get("https://swapi.dev/api/people/")
      .then((response) => {
        setCharacter(response.data.results);
      }).catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Characters Star Wars</h1>
      {/* componente reusable por cada personaje nombre, altura, masa, color cabello, nombre del planeta */}
      {/* API en express, que permita hacer CRUD de cada persona */}
      {characters.map((character, index) => (
        <li key={index}>{character.name}</li>
      ))}
    </div>
  );
}

export default ListStarWars;
