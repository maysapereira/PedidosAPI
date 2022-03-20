const { Router } = require('express')
const PedidosController = require('../controllers/PedidosController')

const router = Router()

router.get('/pedidos', PedidosController.pegaPedidos)

module.exports = router