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
