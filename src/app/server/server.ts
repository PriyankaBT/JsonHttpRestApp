const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('server/db.json');
const middlewares = jsonServer.defaults();
const db = require('./db.json');
const fs = require('fs');

server.use(middlewares);
server.use(jsonServer.bodyParser);
function getUsers() {
    const dbRaw = fs.readFileSync('./server/db.json');  
    const users = JSON.parse(dbRaw).users
    return users;
  }