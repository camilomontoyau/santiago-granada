import Axios from 'axios';

const url = 'http://localhost:8000/api/character';

/**
 * This function get all character record in the dataBase
 */
const getAllCharacters = async () => {
    return await Axios.get(url);
}

/**
 * This function update a current charcate with new data
 * @param {*} character character will be updated
 */
const updateCharacter = async (dataCharacter) => {
    const character = buildCharacter(dataCharacter);
    console.log(character);
    let updateUrl = url + "/update";
    return await Axios.post(updateUrl, character);
    
}

/**
 * Delete a character by id 
 * @param {} idCharacter id of character that will be deleted
 */
const deleteCharacter = async (idCharacter) => {
    let deleteUrl = url + "/delete/" + idCharacter;
    return await Axios.get(deleteUrl);
}

/**
 * Create a new character in the dataBase
 * @param {} character object wil be created
 */
const createCharacter = async (dataCharacter) => {
    let character = buildCharacter(dataCharacter);
    delete character['id'];
    return await Axios.post(url, character);
     
}

/**
 * Make a character object
 */
const buildCharacter = (dataCharacter) =>(
    {
        "id": dataCharacter[0].value,
        "name": dataCharacter[1].value,
        "height": dataCharacter[2].value,
        "mass": dataCharacter[3].value,
        "hair_color": dataCharacter[4].value,
        "planet_name": dataCharacter[5].value
    }
)
    


export {
    getAllCharacters,
    updateCharacter,
    deleteCharacter,
    createCharacter

}