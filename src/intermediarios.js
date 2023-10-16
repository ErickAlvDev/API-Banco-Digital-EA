const dados = require('./dados/bancodedados');

const verificarTodosOsCampos = (req, res, next) => {
    const {nome, cpf, data_nascimento, telefone, email, senha} = req.body;

    if (!nome || !cpf || !data_nascimento || ! telefone || !email || !senha) {
        return res.status(400).json({mensagem: 'Todos os campos são obrigatorios'});
    }
    return next();
}

const verificarEmaileCpf = (req, res, next) => {
    const {email, cpf} = req.body;
    
    const existeCpfOuEmail = dados.contas.find((conta) => {
        return conta.usuario.email === email || conta.usuario.cpf === cpf;
    })
   
    if (existeCpfOuEmail) {
        return res.status(400).json({mensagem: 'Já existe uma conta com o cpf ou e-mail informado!'})
    }
    return next();
}

const verificarNumeroConta = (req, res, next) => {
    const {numeroConta} = req.params;

    if (!Number(numeroConta)) {
        return res.status(400).json({mensagem: 'Deve ser informado um numero de conta válido.'});
    }

    return next();
}

const verificarExisteContaParams = (req, res, next) => {
    const {numeroConta} = req.params;

    const usuarioConta = dados.contas.find((conta) => {
        return conta.numero === numeroConta;
    })

    if (!usuarioConta) {
        return res.status(404).json({mensagem: 'O numero de conta informado não existe.'})
    }
    return next();
}

const verificarExisteContaBody = (req, res, next) => {
    const {numero_conta} = req.body;

    const contaBancaria = dados.contas.find((conta) => {
        return conta.numero === numero_conta;
    })

    if (!contaBancaria) {
        return res.status(404).json({mensagem: 'O numero de conta informado não existe.'})
    }
    return next();
}

const verificarExisteContaQuery = (req, res, next) => {
    const {numero_conta} = req.query;

    const contaBacaria = dados.contas.find((conta) => {
        return conta.numero === numero_conta;
    })

    if (!contaBacaria) {
        return res.status(404).json({mensagem: 'O numero de conta informado não existe.'})
    }
    return next();
}

const verificarDoisCampos = (req, res, next) => {
    const {numero_conta, valor} = req.body;

    if (!numero_conta || !valor) {
        return res.status(400).json({mensagem: 'O número de conta e o valor são obrigatórios!'});
    }
    return next();
}

const verificarValor = (req, res, next) => {
    const {valor} = req.body;

    if (typeof valor !== 'number' || valor <= 0) {
        return res.status(400).json({mensagem: 'O valor deve ser um numero maior que zero!'});
    }
    return next();
}

const verificarSenhaContaBody = (req, res, next) => {
    const {numero_conta, senha} = req.body;

    const contaBancaria = dados.contas.find((conta) => {
        return conta.numero === numero_conta;
    })

    if ((senha !== contaBancaria.usuario.senha)) {
        return res.status(400).json({mensagem: 'A senha informada é incorreta'});
    }
    return next();
}

const verificarDoisCamposQuery = (req, res, next) => {
    const {numero_conta, senha} = req.query;

    if (!numero_conta || !senha) {
        return res.status(400).json({mensagem: 'O número de conta e o valor são obrigatórios!'});
    }
    return next();
}

const verificarSenhaContaQuery = (req, res, next) => {
    const {numero_conta, senha} = req.query;

    const contaBancaria = dados.contas.find((conta) => {
        return conta.numero === numero_conta;
    })

    if ((senha !== contaBancaria.usuario.senha)) {
        return res.status(400).json({mensagem: 'A senha informada é incorreta'});
    }
    return next();
}

module.exports = {
    verificarTodosOsCampos,
    verificarEmaileCpf,
    verificarNumeroConta,
    verificarExisteContaParams,
    verificarExisteContaBody,
    verificarExisteContaQuery,
    verificarDoisCampos,
    verificarValor,
    verificarSenhaContaBody,
    verificarDoisCamposQuery,
    verificarSenhaContaQuery
}