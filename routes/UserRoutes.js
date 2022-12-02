const bodyParser = require('body-parser');

// Controllers
const saveUserController = require('../controllers/saveUser.js').postUser;
const deleteUserController = require('../controllers/deleteUser.js').deleteUser;
const getUsersController = require('../controllers/getUsers.js').getUsers;
const updateUserController = require('../controllers/updateUser.js').putUser;

module.exports = (app) => {
    app.post('/users', bodyParser.json(), saveUserController);
    app.delete('/users/:id', deleteUserController);
    app.get('/users/:id?', getUsersController);
    app.put('/users/:id', bodyParser.json(), updateUserController);
}
