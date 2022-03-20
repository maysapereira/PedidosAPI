const database = require('../models')


//Read
class PedidosController {
    static async pegaPedidos(req, res){
        try{
            const todosOsPedidos = await database.Pedidos.findAll()
            return res.status(200).json(todosOsPedidos)
        } catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmPedido(req, res){
        const { id } = req.params
        try{
            const umPedido = await database.Pedidos.findOne(
                {
                    where: {
                        id: Number(id)
                    }
                }
            )
            return res.status(200).json(umPedido)
        } catch(error){
            return res.status(500).json(error.mensage)
        }
    }
}

module.exports = PedidosController