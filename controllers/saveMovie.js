// Requires model
const saveMovieModel = require('../models/saveMovie.js').saveMovie;

async function postMovie(req, res, next) {
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    const objReturn = {
        data: null,
        error: null
    }

    if (!req.body) {
        console.log("controllers/saveMovie - missing req.body");
        objReturn.error = "missing req.body";
        controllerReturn(objReturn, res);
        return;
    }

    let {
        name,
        is_on_nextflix,
        imdb_score,
        director,
        genre
    } = req.body;

    if (!name || (typeof name != 'string')) {
        console.log("controllers/saveMovie - missing req.name or wrong format");
        objReturn.error = "missing req.name or wrong format";
        controllerReturn(objReturn, res);
        return;
    }

    if (!imdb_score) {
        console.log("controllers/saveMovie - missing req.imdb_score or wrong format");
        objReturn.error = "missing req.imdb_score or wrong format";
        controllerReturn(objReturn, res);
        return;
    }

    if (!director || (typeof director != 'string')) {
        console.log("controllers/saveMovie - missing req.director or wrong format");
        objReturn.error = "missing req.director or wrong format";
        controllerReturn(objReturn, res);
        return;
    }

    if (!genre || (typeof genre != 'string')) {
        console.log("controllers/saveMovie - missing req.genre or wrong format");
        objReturn.error = "missing req.genre or wrong format";
        controllerReturn(objReturn, res);
        return;
    }

    if (!is_on_nextflix) {
        is_on_nextflix = false;
    }

    imdb_score = Number(imdb_score);

    const saveMovieRes = await saveMovieModel({
        name,
        is_on_nextflix,
        imdb_score,
        director,
        genre
    });

    if (saveMovieRes.err || !saveMovieRes.data?.length) {
        objReturn.error = saveMovieRes.err || 'NO RESPONSE FROM saveMovie model';
        controllerReturn(objReturn, res);
        return;
    }

    objReturn.data = saveMovieRes.data;
    controllerReturn(objReturn, res);
};

function controllerReturn(objReturn, res) {
    const { error, data } = objReturn;

    if (error || !data) {
        res.status(406).send(objReturn);
        return;
    }

    res.status(201).send(objReturn);
}

exports.postMovie = postMovie;
