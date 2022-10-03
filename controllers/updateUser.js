// Requires model
const updateUserModel = require('../models/updateUser.js').updateUser;

async function putUser(req, res, next) {
    const objReturn = {
        data: null,
        error: null
    }

    if (!req.body) {
        console.log("controllers/updateUser - missing req.body");
        objReturn.error = "missing req.body";
        controllerReturn(objReturn, res);
        return;
    }

    if (!req.params?.id) {
        console.log("controllers/updateUser - missing req.params.id");
        objReturn.error = "missing req.params.id";
        controllerReturn(objReturn, res);
        return;
    }

    const {
        name,
        birth_date,
        access_level,
        office_role,
        sector
    } = req.body;

    if (name && (typeof name != 'string')) {
        console.log("controllers/updateUser - missing req.name or wrong format");
        objReturn.error = "missing req.name or wrong format";
        controllerReturn(objReturn, res);
        return;
    }

    if (access_level && (typeof access_level != 'number')) {
        console.log("controllers/updateUser - missing req.access_level or wrong format");
        objReturn.error = "missing req.access_level or wrong format";
        controllerReturn(objReturn, res);
        return;
    }

    if (office_role && (typeof office_role != 'string')) {
        console.log("controllers/updateUser - missing req.office_role or wrong format");
        objReturn.error = "missing req.office_role or wrong format";
        controllerReturn(objReturn, res);
        return;
    }

    if (sector && (typeof sector != 'string')) {
        console.log("controllers/updateUser - missing req.sector or wrong format");
        objReturn.error = "missing req.sector or wrong format";
        controllerReturn(objReturn, res);
        return;
    }

    const updateParams = {
        id: req.params.id,
        name,
        birth_date,
        access_level,
        office_role,
        sector
    };

    const updateUserRes = await updateUserModel(updateParams);

    if (updateUserRes.err || !updateUserRes.data?.length) {
        objReturn.error = updateUserRes.err || 'NO RESPONSE FROM updateUser model';
        controllerReturn(objReturn, res);
        return;
    }

    objReturn.data = updateUserRes.data;
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

exports.putUser = putUser;
