<br />
<p align="center">
  <h1 align="center">API REST - Hamburgueria</h1>
 <br />
  <p align="center">SUMÁRIO<p align="center">
  <a href="#sobre-a-aplicação"> Sobre </a> |
  <a href="#ferramentas-utilizadas">Ferramentas utilizadas</a> |
  <a href="#dependências"> Dependências </a> |
  <a href="#inicialização-da-aplicação"> Inicialização </a> |

  <a href="#rotas-da-aplicação"> Rotas</a>
       <br />
    <br />
  </p>
</p>

# Sobre a aplicação:

Projeto de fim do Módulo 4 do curso de *Desenvolvimento Web FullStack da Resilia Educação*. O objetivo desse projeto é a criação de uma API com todos os métodos do CRUD. Cada membro do grupo deveria criar uma API funcional para cada entidade de um sistema de uma Hamburgueria. 

# Ferramentas utilizadas:

Para o desenvolvimento foi utilizado **JavaScript** com **NodeJS** como linguagem da aplicação e o **Express** como framework. Como ORM foi utilizado o **Sequelize**. Como bando de dados foi utilizado o **MySQL**.

O editor de código utilizado foi o **VSCode Studio** e para testes durante o desenvolvimento foram utilizadas o framework nodemon e o API Design Tool **Insomnia**

# Dependências

```.json
 "dependencies": {
    "body-parser": "^1.19.2",
    "express": "^4.17.3",
    "mysql2": "^2.3.3",
    "path": "^0.12.7",
    "sequelize": "^6.17.0",
    "sequelize-cli": "^6.4.1"
  },
  ```
  
As dependências podem ser encontradas [neste arquivo](https://github.com/maysapereira/PedidosAPI/blob/main/package.json) e para instalar basta rodar o comando abaixo e colar no terminal. Isso criará um clone deste repositório e instalar as dependencias necessárias.

```
git clone https://github.com/maysapereira/PedidosAPI.git && cd PedidosAPI && npm install
```

# Dependências de desenvolvimento

As dependências de desenvolvimento podem ser encontradas [neste arquivo](https://github.com/maysapereira/PedidosAPI/blob/main/package.json). Caso deseje instala-las rode o comando abaixo e cole no terminal logo após o comando das dependencias obrigatórias.

```
npm install --save-dev nodemon
```

# Inicialização da aplicação:

Para iniciar a aplicação basta abrir o terminal na pasta do projeto ou executar o código abaixo.

```
npm start
```

# Rotas da aplicação:

A entidade que trabalhei foi a **Pedidos** da Hamburgueria. Segue as rotas utilizadas:

[GET] /Pedidos - A rota exibirá todos Pedidos cadastrados
[GET] /Pedidos/:id - Busca apenas um o pedido baseado em seu ID
[POST] /Pedidos/criar - A rota cria um novo pedido com base nas informações passadas no corpo da requisição.

**Observação:** o id é criado automaticamente com a ajuda do Sequelize

[PUT] /Pedidos/:id - A rota atualizará um Pedido com as informações passadas no corpo da requisição
[DELETE] /Pedidos/:id - A rota deletará um pedido baseado em seu ID.
