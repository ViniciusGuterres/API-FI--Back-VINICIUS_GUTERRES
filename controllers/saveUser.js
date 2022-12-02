// Requires model
const saveUserModel = require('../models/saveUser.js').saveUser;

async function postUser(req, res, next) {
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    const objReturn = {
        data: null,
        error: null
    }

    if (!req.body) {
        console.log("controllers/saveUser - missing req.body");
        objReturn.error = "missing req.body";
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

    if (!name || (typeof name != 'string')) {
        console.log("controllers/saveUser - missing req.name or wrong format");
        objReturn.error = "missing req.name or wrong format";
        controllerReturn(objReturn, res);
        return;
    }

    if (!birth_date) {
        console.log("controllers/saveUser - missing req.birth_date");
        objReturn.error = "missing req.birth_date or wrong format";
        controllerReturn(objReturn, res);
        return;
    }

    if (!access_level || (typeof access_level != 'number')) {
        console.log("controllers/saveUser - missing req.access_level or wrong format");
        objReturn.error = "missing req.access_level or wrong format";
        controllerReturn(objReturn, res);
        return;
    }

    if (!office_role || (typeof office_role != 'string')) {
        console.log("controllers/saveUser - missing req.office_role or wrong format");
        objReturn.error = "missing req.office_role or wrong format";
        controllerReturn(objReturn, res);
        return;
    }

    if (sector && (typeof sector != 'string')) {
        console.log("controllers/saveUser - missing req.sector or wrong format");
        objReturn.error = "missing req.sector or wrong format";
        controllerReturn(objReturn, res);
        return;
    }

    const saveUserRes = await saveUserModel({
        name,
        birth_date,
        access_level,
        office_role,
        sector
    });

    if (saveUserRes.err || !saveUserRes.data?.length) {
        objReturn.error = saveUserRes.err || 'NO RESPONSE FROM saveUser model';
        controllerReturn(objReturn, res);
        return;
    }

    objReturn.data = saveUserRes.data;
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

exports.postUser = postUser;
