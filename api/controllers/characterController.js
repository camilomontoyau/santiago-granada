const Sequelize = require('sequelize');
const character = require('../models').character;
const CharacterService = require('../services/characterServices');

/**
 * Update one character
 */
const updateCharacter = async (request, response) => {
    try {
        const newCharacter = await CharacterService.updateCharacter(request.body);
        return response.status(200).send(newCharacter);
    }
    catch (error) {
        return response.status(404).send(error);
    }
}

/**
 * Delete a character by id
 */
const deleteCharacter = async (request, response) => {
    try {
        await CharacterService.deleteCharacter(request.params.id);
        return response.status(204).send();
    }
    catch (error) {
        return response.status(404).send(error);
    }
}

/**
 * Create a new character
 */
const createCharacter = async (request, response) => {
    try {
        const newCharacter = await CharacterService.createCharacter(buildCharacter(request.body));
        return response.status(201).send(newCharacter);
    } catch (error) {
        return response.status(404).send(error);
    }
}

/**
 *  get one character by id
 */
const getCharacterById = async (request, response) => {
    try {
        const newCharacter = await CharacterService.getCharacter(request.params.id);
        return response.status(200).send(newCharacter);
    }
    catch (error) {
        return response.status(404).send(error);
    }
}

/**
 * get all characters in the dataBase
 */
const getAllCharacters = async (request, response) => {
    try {
        let allCharacters = await CharacterService.getAllCharacters();
        return response.status(200).send(allCharacters);
    }
    catch (error) {
        return response.status(404).send(error);
    }
}

/**
 * This function fill all database with API characters data 
 */
const fillInitData = async () => {
    try {
        let allCharacters = await CharacterService.getCharactersByExternalData()
            .then(result => result.data.results);

        allCharacters.map(async (character) => {
            let characterPlanet = await CharacterService.getPlanetByExternalData(character.homeworld);
            character.homeworld = characterPlanet.data.name;
            await CharacterService.createCharacter(buildCharacter(character));
        })
    }
    catch (error) {
        console.error("Error llenando la base de datos", error);
    }

}

const buildCharacter = (characterData) => (
    {
        "name": characterData.name,
        "height": characterData.height,
        "mass": characterData.mass,
        "hair_color": characterData.hair_color,
        "planet_name": characterData.homeworld
    }
);
module.exports = {
    fillInitData,
    updateCharacter,
    deleteCharacter,
    createCharacter,
    getCharacterById,
    getAllCharacters
};
