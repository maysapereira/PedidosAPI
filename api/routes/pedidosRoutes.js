const { Router } = require('express')
const PedidosController = require('../controllers/PedidosController')

const router = Router()

router.post('/pedidos', PedidosController.criaPedido)
router.get('/pedidos', PedidosController.pegaPedidos)
router.get('/pedidos/:id', PedidosController.pegaUmPedido)
router.put('/pedidos/:id', PedidosController.atualizaPedido)

module.exports = router