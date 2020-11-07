const CharacterController = require('../controllers/characterController');

/**
 * Character Routes
 */
module.exports = (app) => {
    app.get('/api/character', CharacterController.getAllCharacters);
    app.post('/api/character', CharacterController.createCharacter);
    app.get('/api/character/:id', CharacterController.getCharacterById);
    app.get('/api/character/delete/:id', CharacterController.deleteCharacter);
    app.post('/api/character/update', CharacterController.updateCharacter);
};