const { Router } = require('express')
const PedidosController = require('../controllers/PedidosController')

const router = Router()

router.get('/pedidos', PedidosController.pegaPedidos)
router.get('/pedidos/:id', PedidosController.pegaUmPedido)

module.exports = router