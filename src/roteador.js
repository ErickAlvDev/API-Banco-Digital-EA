const express = require('express');
const { 
    listarContas, 
    criarConta, 
    atualizarUsuario,
     excluirConta, 
     depositar,
     sacar,
     transferir,
     consultarSaldo,
     extrato
    } = require('./controladores/operacoes');
const { 
    verificarEmaileCpf,
    verificarTodosOsCampos,
    verificarNumeroConta,
    verificarExisteContaParams,
    verificarExisteContaBody,
    verificarDoisCampos,
    verificarValor,
    verificarSenhaContaBody,
    verificarDoisCamposQuery,
    verificarExisteContaQuery,
    verificarSenhaContaQuery
    } = require('./intermediarios');



const rotas = express();

rotas.get('/contas', listarContas);
rotas.post('/contas', verificarTodosOsCampos, verificarEmaileCpf, criarConta);
rotas.put('/contas/:numeroConta/usuario', verificarTodosOsCampos, verificarNumeroConta, verificarEmaileCpf, verificarExisteContaParams, atualizarUsuario);
rotas.delete('/contas/:numeroConta', verificarNumeroConta, verificarExisteContaParams, excluirConta);
rotas.post('/transacoes/depositar', verificarDoisCampos, verificarExisteContaBody, verificarValor, depositar);
rotas.post('/transacoes/sacar', verificarExisteContaBody, verificarValor, verificarSenhaContaBody, sacar);
rotas.post('/transacoes/transferir', transferir);
rotas.get('/contas/saldo', verificarDoisCamposQuery, verificarExisteContaQuery, verificarSenhaContaQuery, consultarSaldo);
rotas.get('/contas/extrato', verificarDoisCamposQuery, verificarExisteContaQuery, verificarSenhaContaQuery, extrato);

module.exports = rotas;