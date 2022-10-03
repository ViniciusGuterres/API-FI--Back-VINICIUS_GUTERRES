// requires
const { Client } = require('pg');

const {
    user,
    host,
    database,
    password,
    port
} = require('../settings.js');

exports.updateUser = (paramsObject) => {
    console.log("🚀 ~ file: updateUser.js ~ line 13 ~ paramsObject", paramsObject)
    const {
        name,
        birth_date,
        access_level,
        office_role,
        sector,
        id
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
        console.log('models/updateUser - error:', err);
        db.end();

        result.err = err;

        return result;
    };

    const executeQuery = () => {
        let setName = '';
        let setBirthDate = '';
        let setAccessLevel = '';
        let setOfficeRole = '';
        let setSector = '';

        if (name) {
            let shouldPutComma = false;

            if (
                birth_date ||
                access_level ||
                office_role ||
                sector
            ) {
                shouldPutComma = true;
            }

            setName = ` name = '${name}' ${shouldPutComma ? ',' : ''}`;
        }

        if (birth_date) {
            let shouldPutComma = false;

            if (
                access_level ||
                office_role ||
                sector
            ) {
                shouldPutComma = true;
            }

            setBirthDate = ` birth_date = '${birth_date}' ${shouldPutComma ? ',' : ''}`;
        }

        if (access_level) {
            let shouldPutComma = false;

            if (office_role || sector) {
                shouldPutComma = true;
            }

            setAccessLevel = ` access_level = ${access_level} ${shouldPutComma ? ',' : ''}`;
        }

        if (office_role) {
            let shouldPutComma = false;

            if (sector) {
                shouldPutComma = true;
            }

            setOfficeRole = ` office_role = '${office_role}' ${shouldPutComma ? ',' : ''}`;
        }

        if (sector) {
            setSector = ` sector = '${sector}' `;
        }

        const query = `
        UPDATE
            User_vg 
        SET 
            ${setName}
            ${setBirthDate}
            ${setAccessLevel}
            ${setOfficeRole}
            ${setSector}
        WHERE 
            id = ${id}
        RETURNING id;
        `;

        const succesful = (data) => {
            db.end();

            result.data = data.rows;
            console.log("🚀 ~ file: updateUser.js ~ line 65 ~ succesful ~ result", result)
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