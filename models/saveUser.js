// requires
const { Client } = require('pg');

const {
    user,
    host,
    database,
    password,
    port
} = require('../settings.js');

exports.saveUser = (paramsObject) => {
    const {
        name,
        birth_date,
        access_level,
        office_role,
        sector
    } = paramsObject;

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
        console.log('models/saveUser - error:', err);
        db.end();

        result.err = err;

        return result;
    };

    const executeQuery = () => {
        const query = `
            INSERT INTO User_vg (name, birth_date, access_level, office_role, sector)
<<<<<<< Updated upstream
            VALUES ('${name}', '${birth_date}', ${access_level}, '${office_role}', '${sector || null}') RETURNING id;
=======
            VALUES ('${name}', '${birth_date}', ${access_level}, '${office_role}', '${sector}') RETURNING id;
>>>>>>> Stashed changes
        `;

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
<<<<<<< Updated upstream
}
=======
}
>>>>>>> Stashed changes
