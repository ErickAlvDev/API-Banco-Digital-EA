const express = require('express');
const { 
    listarContas, 
    criarConta, 
    atualizarUsuario,
     excluirConta, 
     depositar,
     estadoTransacoes,
     sacar,
     transferir,
     consultarSaldo,
     extrato
    } = require('./controladores/operacoes');


const rotas = express();

rotas.get('/contas', listarContas);
rotas.post('/contas', criarConta);
rotas.put('/contas/:numeroConta/usuario', atualizarUsuario);
rotas.delete('/contas/:numeroConta', excluirConta);
rotas.post('/transacoes/depositar', depositar);
rotas.post('/transacoes/sacar', sacar);
rotas.post('/transacoes/transferir', transferir);
rotas.get('/contas/saldo', consultarSaldo);
rotas.get('/contas/extrato', extrato);

module.exports = rotas;