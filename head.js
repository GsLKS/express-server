// code:
const express = require('express');
const app = express();
const port = 8080;

// pasta do servidor
app.use(express.static(__dirname + '/www'));

// ...
app.listen(port, () => {
  console.log('[root@server]: servidor rodando em http://localhost:8080');
});