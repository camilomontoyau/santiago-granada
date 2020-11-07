import './App.css';
import Crud from './components/crudComponent';
import { useEffect, useState } from "react";
import { getAllCharacters } from './services/characterService';

function ListStarWars() {
  const [currentData, setCurrentData] = useState([{"status": "NO DATA"}]);

  const getData = async () =>{
    let x = await getAllCharacters();
    x = x.data;
    console.log(x);
    setCurrentData(x);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>

      <Crud data={currentData} />


    </div>
  );
}

export default ListStarWars;
