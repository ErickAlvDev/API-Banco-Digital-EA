# API-Banco-Digital-EA

Projeto que foi o desafio do modulo 02 do curso DDS Back-End na Cubos Academy. Onde desenvolvi uma RESTful API utilizando a biblioteca Express que realiza algumas funcionalidades do banco digital como consultar, criar e atualizar contas alem de realizar operaçoes bancarias e consultar status.
È um projeto Bacn-End utilizando JavaScript com o Node.js seguindo o protocolo http. 
  </p>

[Acesse o projeto em produção](https://github.com/ErickAlvDev/API-Banco-Digital-EA)

## :man_mechanic: Linguagens e Ferramentas

![Skills](https://skillicons.dev/icons?i=nodejs,js,express)

## :ladder: Fucionalidades do Projeto

- [x] Listar contas bancárias
- [x] Criar conta bancária
- [x] Atualizar os dados do usuário da conta bancária
- [X] Excluir uma conta bancária
- [X] Depósitar em uma conta bancária
- [X] Sacar de uma conta bancária
- [x] Transferir valores entre contas bancárias
- [x] Consultar saldo da conta bancária
- [X] Emitir extrato bancário

### Estrutura do objeto no arquivo `bancodedados.js`

```javascript
{
    banco: {
        nome: "Cubos Bank",
        numero: "123",
        agencia: "0001",
        senha: "Cubos123Bank",
    },
    contas: [
        // array de contas bancárias
    ],
    saques: [
        // array de saques
    ],
    depositos: [
        // array de depósitos
    ],
    transferencias: [
        // array de transferências
    ],
}
```

## :triangular_flag_on_post: Contribua com o projeto

- Realize o Fork
- Faça as modificações necessárias
- Realize a Pull Request (PR)

## :computer: Rodando o Projeto

```shell
# 1. Clone o projeto

git clone <urlProjeto>

# 2. Entre na pasta do projeto

cd API-Banco-Digital-EA

# 3. Instale as dependências

npm install

# 4. Execute o Servidor

npm run dev
```

## :sassy_man: Endpoints

- GET /contas?senha_banco=Cubos123Bank - Listar contas bancárias

  
- POST /contas - Criar conta bancária
  #### Exemplo de Requisição
  
```javascript
// POST /contas
{
    "nome": "Foo Bar 2",
    "cpf": "00011122234",
    "data_nascimento": "2021-03-15",
    "telefone": "71999998888",
    "email": "foo@bar2.com",
    "senha": "12345"
}
```
- PUT /contas/:numeroConta/usuario - Atualizar usuário da conta bancária
#### Exemplo de Requisição
```javascript
// PUT /contas/:numeroConta/usuario
{
    "nome": "Foo Bar 3",
    "cpf": "99911122234",
    "data_nascimento": "2021-03-15",
    "telefone": "71999998888",
    "email": "foo@bar3.com",
    "senha": "12345"
{
```

- DELETE /contas/:numeroConta - Excluir uma Conta Bancaria

- POST /transacoes/depositar - Depositar em uma Conta Bancaria
#### Exemplo de Requisição
```javascript
// POST /transacoes/depositar
{
	"numero_conta": "1",
	"valor": 1900
}
```

-  POST /transacoes/sacar - Sacar de uma conta bancária
#### Exemplo de Requisição
```javascript
// POST /transacoes/sacar
{
	"numero_conta": "1",
	"valor": 1900,
    "senha": "123456"
}
```

-  POST /transacoes/transferir - Transferir valores entre contas bancárias
#### Exemplo de Requisição
```javascript
// POST /transacoes/transferir
{
	"numero_conta_origem": "1",
	"numero_conta_destino": "2",
	"valor": 200,
	"senha": "123456"
}
```

- GET /contas/saldo?numero_conta=##&senha=### - Consultar saldo da conta bancária
#### Exemplo de Requisição
```javascript
// GET /contas/saldo
{
	"numero_conta": "1",
    "senha": "123456"
}
```

- GET /contas/extrato?numero_conta=##&senha=### - Emitir extrato bancário
#### Exemplo de Requisição
```javascript
// GET /contas/extrato
{
	"numero_conta": "1",
    "senha": "123456"
}
```

## :technologist: Contribuidores

<table>
  <tr>
    <td align="center"><a href="https://github.com/ErickAlvDev"><img src="https://avatars.githubusercontent.com/u/20779100?v=4" width="50px;" alt=""/><br /><sub><b>Jess</b></sub></a><br /></td>
  </tr>
</table>

### Autor

<a href="https://github.com/ErickAlvDev">
<img src="https://avatars.githubusercontent.com/u/20779100?v=4" width="70px" />
</a>
