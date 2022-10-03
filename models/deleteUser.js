// requires
const { Client } = require('pg');

const {
    user,
    host,
    database,
    password,
    port
} = require('../settings.js');

exports.deleteUser = (paramsObject) => {
    const { id } = paramsObject;

    const db = new Client({
        user,
        host,
        database,
        password,
        port
    });

    const result = {
        err: null,
        data: null
    };

    const error = (err) => {
        console.log('models/deleteUser - error:', err);
        db.end();

        result.err = err;

        return result;
    };

    const executeQuery = () => {
        const query = `DELETE FROM user_vg  WHERE id = ${id} RETURNING id;`;

        const succesful = (data) => {
            db.end();

            result.data = data.rows;
            return result;
        };

        return db.query(query)
            .then(succesful)
            .catch(error)
    };

    return db.connect()
        .then(executeQuery)
        .catch(error)
}