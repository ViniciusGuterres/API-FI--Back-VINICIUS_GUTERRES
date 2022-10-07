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

6°) Rotas de filmes:

get: http://localhost:3000/getMovies - para pegar a lista de filmes

get: http://localhost:3000/getMovies/1 - para pegar o filme do id passado na url

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

7°) Rotas para os users:

get: http://localhost:3000/getUsers - para pegar a lista de usuários

get: http://localhost:3000/getUsers/1 - Para pegar um usuário especifico com o id no final da url

delete: http://localhost:3000/deleteUser/3 - com o id do usuário a ser excluído

post: http://localhost:3000/createUser com o body no formato a seguir:
{
	"name": "vinicius",
	"birth_date": "20-09-2009",
	"access_level": 1,
	"office_role": "Auxiliar",
	"sector": "ADM"
}

put: http://localhost:3000/updateUser/3 - com o id do usuário a ser atualizado e body no formato a seguir:
{
        "name": "vinicius",
        "birth_date": "20-09-2009",
        "access_level": 1,
        "office_role": "Auxiliar",
        "sector": "ADM"
}

8°) Para usar outras configurações da base de dados, alterar o arquivo settings.js na raiz do projeto.
