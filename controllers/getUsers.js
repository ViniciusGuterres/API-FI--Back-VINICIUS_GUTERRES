// Requires model
const getUsersModel = require('../models/getUsers.js').getUsers;

async function getUsers(req, res, next) {
<<<<<<< Updated upstream
=======
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

>>>>>>> Stashed changes
    const objReturn = {
        data: null,
        error: null
    }

    let modelParams = {}

    if (req?.params?.id) {
        modelParams.id = req.params.id;
    }

    const getUsersRes = await getUsersModel(modelParams);

    if (getUsersRes.err || !getUsersRes.data?.length) {
        objReturn.error = getUsersRes.err || 'NO RESPONSE FROM getUsers model';
        controllerReturn(objReturn, res);
        return;
    }

    objReturn.data = getUsersRes.data;
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

<<<<<<< Updated upstream
exports.getUsers = getUsers;
=======
exports.getUsers = getUsers;
>>>>>>> Stashed changes
