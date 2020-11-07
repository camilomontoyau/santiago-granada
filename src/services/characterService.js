import Axios from 'axios';

let url = 'http://localhost:8000/api/character';

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
const updateCharacter = async (character) => {
    url += "/update";
    return await Axios.post(url, character);
}

/**
 * Delete a character by id 
 * @param {} idCharacter id of character that will be deleted
 */
const deleteCharacter = async (idCharacter) => {
    url += "/delete/" + idCharacter;
    return await Axios.get(url);
}

/**
 * Create a new character in the dataBase
 * @param {} character object wil be created
 */
const createCharacter = async (character) => {
    return await Axios.post(url, character);
}


export {
    getCharacter,
    getAllCharacters,
    updateCharacter,
    deleteCharacter,
    createCharacter

}