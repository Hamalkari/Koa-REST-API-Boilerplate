import { createServer } from 'http';
import { Model } from 'objection';
import { port } from './config/index';
import app from './api/server';
import knex from './db';

const server = createServer(app.callback());

Model.knex(knex);

server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
