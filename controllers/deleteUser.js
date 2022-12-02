// Requires model
const deleteUserModel = require('../models/deleteUser.js').deleteUser;

async function deleteUser(req, res, next) {
    const objReturn = {
        data: null,
        error: null
    }

    if (!req.params) {
        console.log("controllers/deleteUser - missing req.params");
        objReturn.error = "missing req.params";
        controllerReturn(objReturn, res);
        return;
    }

    const { id } = req.params;

    if (!id) {
        console.log("controllers/deleteUser - missing req.id");
        objReturn.error = "missing req.id";
        controllerReturn(objReturn, res);
        return;
    }

    const deleteUserRes = await deleteUserModel({ id });

    if (deleteUserRes.err || !deleteUserRes.data?.length) {
        objReturn.error = deleteUserRes.err || 'NO RESPONSE FROM deleteUser model';
        controllerReturn(objReturn, res);
        return;
    }

    objReturn.data = deleteUserRes.data;
    controllerReturn(objReturn, res);
};

function controllerReturn(objReturn, res) {
    const { error, data } = objReturn;

    if (error || !data.length) {
        res.status(406).send(objReturn);
        return;
    }

    res.status(201).send(objReturn);
}

exports.deleteUser = deleteUser;
