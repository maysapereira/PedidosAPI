// import bodyParser from 'body-parser'

const bodyParser = require('body-parser')
const pedidos = require('./pedidosRoutes')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(pedidos)
}