# 🌍 Catálogo de Países

Este é um projeto desenvolvido como parte de um desafio técnico. Ele permite visualizar os 10 países mais populosos, buscar por um país específico e registrar avaliações (likes/dislikes) sobre eles.

## 🚀 Funcionalidades

- Listar os 10 países com maior população
- Buscar detalhes de um país pelo nome
- Avaliar um país positivamente ou negativamente
- Persistência dos dados em banco PostgreSQL usando Prisma

## 🛠️ Tecnologias Utilizadas

- Node.js
- Express.js
- Prisma ORM
- PostgreSQL
- Axios (para consumo da API REST Countries)
- Joi (validações)
- dotenv (variáveis de ambiente)

## 📦 Como rodar o projeto localmente

1. **Clone o repositório:**

git clone https://github.com/seu-usuario/catalogo-paises.git
cd catalogo-paises

2. **Instale as dependências:**

npm install

3. **Configure o arquivo .env:**

DATABASE_URL=postgresql://usuario:senha@localhost:5432/catalogo-paises-db
PORT=3000

4. **Rode as migrations e gere o client do Prisma:**

npx prisma generate
npx prisma migrate dev --name init

5. **Inicie o servidor:**

npm start

O servidor estará rodando em http://localhost:3000

## Endpoints

| Método | Rota             | Descrição                            |
| ------ | ---------------- | ------------------------------------ |
| GET    | `/paises/top10`  | Lista os 10 países mais populosos    |
| GET    | `/paises/:name`  | Busca informações de um país         |
| POST   | `/paises/review` | Avalia um país (`liked: true/false`) |


