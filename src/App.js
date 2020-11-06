import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [personajes, setPersonajes] = useState({});
  useEffect(() => {
    Axios.get("https://swapi.dev/api/people/")
      .then((response) => {
        console.log(response);
        setPersonajes(response.data.results);
      })
      .then((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {personajes.map((personaje) => {
        return personaje.name;
      })}
    </div>
  );
}

export default App;
