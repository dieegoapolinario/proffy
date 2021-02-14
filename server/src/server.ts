// rotas = http://localhost:3333/users
// recursos = users (usado no final da rota)
//GET: buscar ou listar uma informação
//POST: Criar alguma nova informação
//PUT: Atualizar uma informação existente
//Delete: Deletar uma informação existente
//Corpo (Request body): Dados para criação ou atualização de um registro
//Route Params: identificar qual recurso eu quero atualizar ou deletar
//Query Params: Paginação, filtros, ordenação
//SELECT * FROM users
//knex('users').select('*')

import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);