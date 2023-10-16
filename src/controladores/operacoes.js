const dados = require('../dados/bancodedados');

const listarContas = (req, res) => {
    const {senha_banco} = req.query

    if (!senha_banco) {
        return res.status(400).json({mensagem: 'Deve ser informada a senha do Banco'});
    }
    if ((senha_banco !== dados.banco.senha)) {
        return res.status(400).json({mensagem: 'A senha informada é incorreta'});
    }
    
    return res.status(200).json(dados.contas);
};

const criarConta = async (req, res) => {
    const {nome, cpf, data_nascimento, telefone, email, senha} = req.body;

    dados.contas.push({
        numero: String(dados.numeroDisponivel),
        saldo: 0,
        usuario: {
            nome,
            cpf,
            data_nascimento,
            telefone,
            email,
            senha
        }
    })

    dados.numeroDisponivel++;
    
    return res.status(201).json()
   
};

const atualizarUsuario = (req, res) => {
    const {nome, cpf, data_nascimento, telefone, email, senha} = req.body;
    const {numeroConta} = req.params;

    const usuarioConta = dados.contas.find((conta) => {
        return conta.numero === numeroConta;
    })

    usuarioConta.usuario = {
        nome,
        cpf,
        data_nascimento,
        telefone,
        email,
        senha
    };

    return res.status(204).json()
};

const excluirConta = (req, res) => {
    const {numeroConta} = req.params;

    const usuarioConta = dados.contas.find((conta) => {
        return conta.numero === numeroConta;
    })

    if (!usuarioConta.saldo === 0) {
        return res.status(400).json({mensagem: 'A conta só pode ser removida se o saldo for zero!'});
    }
    const indiceConta = dados.contas.findIndex(conta => conta.numero === numeroConta);

    dados.contas.splice(indiceConta, 1);

    return res.status(204).json();

};

const depositar = (req, res) => {
    const {numero_conta, valor} = req.body;

    const contaBancaria = dados.contas.find((conta) => {
        return conta.numero === numero_conta;
    })

    contaBancaria.saldo += valor;

    dados.depositos.push({
        data: new Date().toLocaleString(),
        numero_conta,
        valor
    })

    return res.status(204).json();
};

const sacar = (req, res) => {
    const {numero_conta, valor, senha} = req.body;

    if (!numero_conta || !valor || !senha) {
        return res.status(400).json({mensagem: 'Número de conta, valor e senha são obrigatórios!'});
    }

    const contaBancaria = dados.contas.find((conta) => {
        return conta.numero === numero_conta;
    })

    if (contaBancaria.saldo < valor) {
        return res.status(400).json({mensagem: 'Saldo insuficiente'});
    }

    contaBancaria.saldo -= valor;

    dados.saques.push({
        data: new Date().toLocaleString(),
        numero_conta,
        valor
    })

    return res.status(204).json();
};

const transferir = (req, res) => {
    const {numero_conta_origem, numero_conta_destino, valor, senha} = req.body;

    if (!numero_conta_origem || !numero_conta_destino || !valor || !senha) {
        return res.status(400).json({mensagem: 'Todos os campos são obrigatorios para realizar uma transferência'});
    }
    if (numero_conta_origem === numero_conta_destino) {
        return res.status(400).json({mensagem: 'Os numeros de conta não podem ser iguais!'});
    }
   
    const contaBancariaOrigem = dados.contas.find((conta) => {
        return conta.numero === numero_conta_origem;
    })

    if (!contaBancariaOrigem) {
        return res.status(404).json({mensagem: 'O numero de conta de origem informado não existe.'});
    }

    const contaBancariaDestino = dados.contas.find((conta) => {
        return conta.numero === numero_conta_destino;
    })

    if (!contaBancariaDestino) {
        return res.status(404).json({mensagem: 'O numero de conta de destino informado não existe.'});
    }

    if ((senha !== contaBancariaOrigem.usuario.senha)) {
        return res.status(400).json({mensagem: 'A senha informada é incorreta'});
    }

    if (contaBancariaOrigem.saldo < valor) {
        return res.status(400).json({mensagem: 'Saldo insuficiente para realizar a transferência'});
    }

    contaBancariaOrigem.saldo -= valor;
    contaBancariaDestino.saldo += valor;

    dados.transferencias.push({
        data: new Date().toLocaleString(),
        numero_conta_origem,
        numero_conta_destino,
        valor
    });

    return res.status(204).json();
}

const consultarSaldo = (req, res) => {
    const {numero_conta} = req.query;

    const contaBancaria = dados.contas.find((conta) => {
        return conta.numero === numero_conta;
    })

    return res.status(200).json({"saldo": contaBancaria.saldo});
};

const extrato = (req, res) => {
    const {numero_conta} = req.query;

    const transferenciasEnviadas = dados.transferencias.find((transferencia) => {
        return transferencia.numero_conta_origem === numero_conta
    })
    
    const transferenciasRecebidas = dados.transferencias.find((transferencia) => {
        return transferencia.numero_conta_destino === numero_conta
    })
    
    const saques = dados.saques.find((saque) => {
        return saque.numero_conta === numero_conta
    })
    
    const depositos = dados.depositos.find((deposito) => {
        return deposito.numero_conta === numero_conta
    })

    const extratoDaConta = {
        depositos,
        saques,
        transferenciasRecebidas,
        transferenciasEnviadas
    }

    return res.status(200).json(extratoDaConta);
};

module.exports = {
    listarContas,
    criarConta,
    atualizarUsuario,
    excluirConta,
    depositar,
    sacar,
    transferir,
    consultarSaldo,
    extrato
}