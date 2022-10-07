# API-FI--Back-VINICIUS_GUTERRES
1°) npm init

2°) criar base de dados postgres com os seguintes parâmetros:
    user: 'postgres',
    host: 'localhost',
    database: 'Faculdade',
    password: 'admin',
    port: 5432

3°) O Script cria as tableas automaticamente, mas se quiser criar manualmente use os script sql a seguir:

-- create user table User_VG Table
`
create table User_VG (
	id serial primary key,
	name varchar not null,
	birth_date timestamp not null,
	access_level int NOT NULL,
	office_role varchar NOT NULL,
	sector varchar
);
`

-- create movies table 
`
create table Movies_VG (
	id serial primary key,
	name varchar not null,
	is_on_nextflix boolean not null,
	imdb_score int,
	director varchar NOT NULL,
	genre varchar NOT NULL
);
`

4°) Iniciar o servidor: node server.js

6°) API para as rotas de filmes:
``
get: http://localhost:3000/getMovies - para pegar a lista de filmes

post: http://localhost:3000/createMovie com o body no formato a seguir:
{
    "name": "la la land",
    "is_on_nextflix": true,
    "imdb_score": 8,
    "director": "james cameron",
    "genre": "musical"
}

delete: http://localhost:3000/deleteMovie/3 - com o id do filme a ser excluído

put: http://localhost:3000/updateMovie/3 - com o id do filme a ser atualizado e body no formato a seguir:
{
    "name": "la la land",
    "is_on_nextflix": true,
    "imdb_score": 8,
    "director": "james cameron",
    "genre": "musical"
}
``
