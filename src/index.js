const express = require('express');
const rotas = require('./roteador');
const port = 3000;

const app = express();

app.use(express.json());
app.use(rotas);

app.listen(port, () => {
    console.log(`O servidor escuta a porta ${port}`);
})