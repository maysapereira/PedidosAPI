const express = require('express')
const routes = require('./routes')
// import express from 'express'
// import routes from './routes'

/*
Eu estava usando o import ao invés do require mas não estava funcionando. Estava dando o seguinte erro:

node:internal/modules/cjs/loader:936
  throw err;
  ^

Error: Cannot find module '/home/maysa/Documentos/resilia/PedidosAPI/api/index.js'
    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:933:15)
    at Function.Module._load (node:internal/modules/cjs/loader:778:27)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Então importei o body-parser e express com require e exclui o "type":"module" do package.json e 
a API voltou a rodar

*/

const app = express()
const port = 5000

routes(app)

app.listen(port, () => {
    console.log(`API rodando na porta ${port} na tranquilidade`)
})

module.exports = app