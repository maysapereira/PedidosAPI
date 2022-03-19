const database = require('../models')

class PedidosController {
    static async pegaPedidos(req, res){
        try{
            const todosOsPedidos = await database.Pedidos.findAll()
            return res.status(200).json(todosOsPedidos)
        } catch (error){
            return res.status(500).json(error.message)
        }

    }

}

module.exports = PedidosController