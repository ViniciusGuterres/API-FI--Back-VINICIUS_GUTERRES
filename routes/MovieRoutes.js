const bodyParser = require('body-parser');

// Controllers
const saveMovieController = require('../controllers/saveMovie.js').postMovie;
const deleteMovieController = require('../controllers/deleteMovie.js').deleteMovie;
const getMoviesController = require('../controllers/getMovies.js').getMovies;
const updateMovieController = require('../controllers/updateMovie.js').putMovie;

module.exports = (app) => {
<<<<<<< Updated upstream
    app.post('/createMovie', bodyParser.json(), saveMovieController);
    app.delete('/deleteMovie/:id', deleteMovieController);
    app.get('/getMovies/:id?', getMoviesController);
    app.put('/updateMovie/:id', bodyParser.json(), updateMovieController);
=======
    app.post('/filmes', bodyParser.json(), saveMovieController);
    app.delete('/filmes/:id', deleteMovieController);
    app.get('/filmes/:id?', getMoviesController);
    app.put('/filmes/:id', bodyParser.json(), updateMovieController);
>>>>>>> Stashed changes
}
