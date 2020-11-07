const Axios = require('axios');
const Character = require('../models').character;

/**
 * This function get a character by id
 * @param {*} idCharacter id of character that will be get
 */
const getCharacter = async (idCharacter) => {
    return await Character.findByPk(idCharacter);
}

/**
 * This function get all character record in the dataBase
 */
const getAllCharacters = async () => {
    return await Character.findAll();
}

/**
 * This function update a current charcate with new data
 * @param {*} character character will be updated
 */
const updateCharacter = async (character) => {

    let currentCharacter = await Character.findByPk(character.id);
    currentCharacter.name = character.name;
    currentCharacter.height = character.height;
    currentCharacter.mass = character.mass;
    currentCharacter.hair_color = character.hair_color;
    currentCharacter.planet = character.planet;
    return await currentCharacter.save();
}

/**
 * Delete a character by id 
 * @param {} idCharacter id of character that will be deleted
 */
const deleteCharacter = async (idCharacter) => {
    return await Character.destroy({
        where: { id: idCharacter }
    });
}

/**
 * Create a new character in the dataBase
 * @param {} character object wil be created
 */
const createCharacter = async (character) => {
    return await Character.findOrCreate({
        where: { name: character.name },
        defaults: character
    });
}

/**
 * get all characters since the API
 */
const getCharactersByExternalData = async () => {
    return await Axios.get("https://swapi.dev/api/people/");
}

/**
 * This function get a planet by planet URL
 * @param {*} urlPlanet Url to get a planet 
 */
const getPlanetByExternalData = async (urlPlanet) => {
    return await Axios.get(urlPlanet);
}



module.exports = {
    getCharacter,
    getAllCharacters,
    updateCharacter,
    deleteCharacter,
    createCharacter,
    getCharactersByExternalData,
    getPlanetByExternalData


}