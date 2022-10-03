const bodyParser = require('body-parser');

// Controllers
const saveMovieController = require('../controllers/saveMovie.js').postMovie;
// const deleteUserController = require('../controllers/deleteUser.js').deleteUser;
// const getUsersController = require('../controllers/getUsers.js').getUsers;
// const updateUserController = require('../controllers/updateUser.js').putUser;

module.exports = (app) => {
    app.post('/createMovie', bodyParser.json(), saveMovieController);
    // app.delete('/deleteUser/:id', deleteUserController);
    // app.get('/getUsers/:id?', getUsersController);
    // app.put('/updateUser/:id', bodyParser.json(), updateUserController);
}