# EUNERD-MARKETPLACE

Aplicação back-end com a finalidade de gerar e salvar em um banco de dados uma lista ordenada a partir de empréstimos e investimentos.



## **_Como Instalar?_**

- Para instalar, é necessário clonar o projeto e fazer instalação das dependências, entre em um terminal e siga o passo a passo abaixo:

### 1 - Clone o Projeto:

```
$ git clone https://github.com/HumbertoSilv/eunerd-marketplace.git
```

### 2 - Depois de clonado, entre na pasta do projeto:

```
$ cd eunerd-marketplace/
```

### 3 - Instale as Dependências:

```
$ yarn
```

### 4 - Crie um banco de dados e configure de acordo com o arquivo .env.example


### 5 - Rode as migrations

```
$ yarn typeorm migration:run
```

### 6 - Para Iniciar a aplicação rode o comando abaixo:

```
$ yarn dev
```

### 7 - Se tudo for feito corretamente, vai aparecer normalmente as mensagens:

```
Database connected...
Server running...
```

## ROTAS:

### `POST http://localhost:3000/api/loan` - Rota de criação de empréstimos.


```json
//  REQUEST
{
	"totalRequestedAmountCents": 1222.25,
	"category": "X",
	"expiresAt": "02-20-2022"	
}
```

```json
//  RESPONSE
{
	"totalRequestedAmountCents": 1222.25,
	"category": "X",
	"expiresAt": "02-20-2022",
	"id": "f26dc49a-a123-4fb0-b4ef-0bf81080f54a"
}
```

### `POST http://localhost:3000/api/marketplace` - Rota de criação de investimentos.
-   Esse endpoint recebe uma lista de empréstimos e uma de investimentos, cria/salva os investimentos e retorna um relatório com todos os empréstimos e quanto foi investido.


```json
//  REQUEST
{
	"loanList": [
		{
			"totalRequestedAmountCents": 1025.25,
			"category": "Z",
			"expiresAt": "01-01-2023",
			"id": "89a9ea60-80e7-4690-80e4-bddca0093d59"
		},
        {
			"totalRequestedAmountCents": 1222.25,
			"category": "Z",
			"expiresAt": "03-01-2023",
			"id": "6368ec0d-84e1-421f-9beb-6bf14ce90ca9"
		},
        {
			"totalRequestedAmountCents": 1222.25,
			"category": "Z",
			"expiresAt": "04-01-2023",
			"id": "5f4383f5-f1a1-4d62-81c6-a2625bec48fd"
		}
	],
	"investmentList": [
		{
			"totalInvestedAmountCents": 500,
			"loan_id": "89a9ea60-80e7-4690-80e4-bddca0093d59"
		},
		{
			"totalInvestedAmountCents": 500,
			"loan_id": "6368ec0d-84e1-421f-9beb-6bf14ce90ca9"
		},
        {
			"totalInvestedAmountCents": 500,
			"loan_id": "5f4383f5-f1a1-4d62-81c6-a2625bec48fd"
		}
	]
}
```

```json
//  RESPONSE
[
	{
		"totalRequestedAmount": 1025.25,
		"category": "Z",
		"totalInvestmentAmount": 500,
		"expiresAt": "01-01-2023",
		"id": "89a9ea60-80e7-4690-80e4-bddca0093d59"
	},
	{
		"totalRequestedAmount": 1222.25,
		"category": "Z",
		"totalInvestmentAmount": 500,
		"expiresAt": "03-01-2023",
		"id": "6368ec0d-84e1-421f-9beb-6bf14ce90ca9"
	},
	{
		"totalRequestedAmount": 1222.25,
		"category": "Z",
		"totalInvestmentAmount": 500,
		"expiresAt": "04-01-2023",
		"id": "5f4383f5-f1a1-4d62-81c6-a2625bec48fd"
	}
]
```

