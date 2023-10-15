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

![Rotas](https://github.com/ErickAlvDev/API-Banco-Digital-EA/assets/142065333/d90483a0-21be-446c-a008-d6438c6100b2)


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
#### Estrutura do objeto de uma conta Bancaria

```javascript
[
    {
        "numero": "1",
        "saldo": 0,
        "usuario": {
            "nome": "Foo Bar",
            "cpf": "00011122233",
            "data_nascimento": "2021-03-15",
            "telefone": "71999998888",
            "email": "foo@bar.com",
            "senha": "1234"
        }
    }
]
```
![Listar](https://github.com/ErickAlvDev/API-Banco-Digital-EA/assets/142065333/82ddfefb-052f-4bdc-a010-c553e9a1e718)
  
- POST /contas - Criar conta bancária
  #### Exemplo de Requisição
  
```javascript
// POST /contas
{
    "nome": "carlos",
    "cpf": "7070007566",
    "data_nascimento": "2021-08-15",
    "telefone": "71999998888",
    "email": "kq@bar3.com",
    "senha": "123"
}
```
![Criar](https://github.com/ErickAlvDev/API-Banco-Digital-EA/assets/142065333/e9b45d5d-ddfb-4f72-8b56-b0cf5d6d187e)

- PUT /contas/:numeroConta/usuario - Atualizar usuário da conta bancária
#### Exemplo de Requisição
```javascript
// PUT /contas/:numeroConta/usuario
{
    "nome": "luis",
    "cpf": "757576575",
    "data_nascimento": "2021-03-15",
    "telefone": "71999998888",
    "email": "luuoo@bar2.com",
    "senha": "12345"
}
```
![Atualizar](https://github.com/ErickAlvDev/API-Banco-Digital-EA/assets/142065333/bf324ef2-802f-4547-b286-01af45ee2f85)

- DELETE /contas/:numeroConta - Excluir uma Conta Bancaria
![Excluir](https://github.com/ErickAlvDev/API-Banco-Digital-EA/assets/142065333/aa387135-2b9d-4a15-b846-cc136c456f76)

- POST /transacoes/depositar - Depositar em uma Conta Bancaria
#### Exemplo de Requisição
```javascript
// POST /transacoes/depositar
{
	"numero_conta": "2",
	"valor": 5000
}
```
![Depositar](https://github.com/ErickAlvDev/API-Banco-Digital-EA/assets/142065333/302f35d2-d26a-4394-93d0-2ac17d4e24ab)

-  POST /transacoes/sacar - Sacar de uma conta bancária
#### Exemplo de Requisição
```javascript
// POST /transacoes/sacar
{
	"numero_conta": "2",
	"valor": 500,
	"senha": "12345"
}
```
![Sacar](https://github.com/ErickAlvDev/API-Banco-Digital-EA/assets/142065333/6b50e875-69b3-4f86-80dd-2a24108dbfc6)

-  POST /transacoes/transferir - Transferir valores entre contas bancárias
#### Exemplo de Requisição
```javascript
// POST /transacoes/transferir
{
	"numero_conta_origem": "2",
	"numero_conta_destino": "1",
	"valor": 1000,
	"senha": "12345"
}
```
![Transferir](https://github.com/ErickAlvDev/API-Banco-Digital-EA/assets/142065333/53dd0148-d0e3-4ee4-ac42-ef7a090921a1)

- GET /contas/saldo?numero_conta=##&senha=### - Consultar saldo da conta bancária

![Saldo](https://github.com/ErickAlvDev/API-Banco-Digital-EA/assets/142065333/6849212c-5f8d-4630-806f-8ef8fdffbf20)

- GET /contas/extrato?numero_conta=##&senha=### - Emitir extrato bancário

![Extrato](https://github.com/ErickAlvDev/API-Banco-Digital-EA/assets/142065333/f52f0ad3-b604-49c7-9559-92512d633dde)

## :technologist: Contribuidores

<table>
  <tr>
    <td align="center"><a href="https://github.com/ErickAlvDev"><img src="https://github.com/ErickAlvDev/API-Banco-Digital-EA/assets/142065333/aabfa87a-e80d-4293-ad4e-e1bf9be38b80" width="50px;" alt=""/><br /><sub><b>Erick Alvarado</b></sub></a><br /></td>
  </tr>
</table>

### Autor

<a href="https://github.com/ErickAlvDev">
<img src="https://github.com/ErickAlvDev/API-Banco-Digital-EA/assets/142065333/aabfa87a-e80d-4293-ad4e-e1bf9be38b80" width="70px" />
</a>
