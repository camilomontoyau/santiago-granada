import './App.css';
import Crud from './components/crud';
import GridVsFlex from './components/gridVsFlex';
import { useEffect, useState } from "react";
import { getAllCharacters, deleteCharacter, updateCharacter, createCharacter } from './services/characterService';

/**
 * Main aplication
 */
const App = () => {
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
      <GridVsFlex/>
    </div>
  );
}

export default App;
