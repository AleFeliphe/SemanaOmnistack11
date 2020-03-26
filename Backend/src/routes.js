
/**
 * Rota / recursos
 */

/**
 * Metodos HTTP;
 * 
 * GET : Buscar uma informação do backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 */

/**
 * Tipos de parametros
 * 
 * Query Parans: parametros nomeadops enviados na rota após "?" (Filtros, paginação)
 * Route Parans: Parametros utilizados para identificar recursos 
 * Request Body: Corpo da requisiçao, utilizado para criar ou alterar recursos
 */

/**
 * SQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc.
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select
 */

/**
 * ONG
 * Caso (incident)
 * 
 * Funcionalidade
 * 
 * login ONG
 * logout ONG
 * Cadastro ONG
 * Cadastro novos casos ONG
 * Delete casos ONG
 * Listar casos da especificos de uma ONG
 * listar todos os casos
 * entrar em contato com a ong
 */



const express = require('express');

const ongcontroller = require('./controllers/ongcontroller')
const incidentcontroller = require('./controllers/incidentcontroller');
const profilecontroller = require('./controllers/profilecontroller');
const sessioncontroller = require('./controllers/sessioncontroller');

const routes = express.Router();

routes.post('/sessions', sessioncontroller.create);

routes.get('/ongs', ongcontroller.index); 
routes.post('/ongs', ongcontroller.create);

routes.get('/profile', profilecontroller.index);

routes.get('/incidents', incidentcontroller.index);
routes.post('/incidents', incidentcontroller.create);
routes.delete('/incidents/:id', incidentcontroller.delete)

module.exports = routes;