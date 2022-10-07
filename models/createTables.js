// requires
const { Client } = require('pg');

const {
    user,
    host,
    database,
    password,
    port
} = require('../settings.js');

exports.createTables = (paramsObject) => {
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
        db.end();
        result.err = err;

        return result;
    };

    const executeQuery = () => {
        const query = `
        create table Movies_VG (
            id serial primary key,
            name varchar not null,
            is_on_nextflix boolean not null,
            imdb_score int,
            director varchar NOT NULL,
            genre varchar NOT NULL
            );
            create table User_VG (
                id serial primary key,
                name varchar not null,
                birth_date timestamp not null,
                access_level int NOT NULL,
                office_role varchar NOT NULL,
                sector varchar
            );
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
}