import './App.css';
import Crud from './components/crud';
import { useEffect, useState } from "react";
import { getAllCharacters, deleteCharacter, updateCharacter, createCharacter } from './services/characterService';

/**
 * Main aplication
 */
const ListStarWars = () => {
  const [currentData, setCurrentData] = useState([{ "status": "NO DATA" }]);
  
  const updateData = async () => {
    let x = await getAllCharacters();
    x = x.data;
    setCurrentData(x);
  }


  useEffect(() => {
    updateData();
  }, []);

  return (
    <div>
      <Crud
        data={currentData}
        updateData={updateData}
        handleDelete={deleteCharacter}
        handleUpdate={updateCharacter}
        handleCreate={createCharacter}
        title={'Welcome to the star wars characters'}
      />
    </div>
  );
}

export default ListStarWars;
