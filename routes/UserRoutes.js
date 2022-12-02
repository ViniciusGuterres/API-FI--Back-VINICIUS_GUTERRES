const bodyParser = require('body-parser');

// Controllers
const saveUserController = require('../controllers/saveUser.js').postUser;
const deleteUserController = require('../controllers/deleteUser.js').deleteUser;
const getUsersController = require('../controllers/getUsers.js').getUsers;
const updateUserController = require('../controllers/updateUser.js').putUser;

module.exports = (app) => {
    app.post('/createUser', bodyParser.json(), saveUserController);
    app.delete('/deleteUser/:id', deleteUserController);
    app.get('/getUsers/:id?', getUsersController);
    app.put('/updateUser/:id', bodyParser.json(), updateUserController);
}
