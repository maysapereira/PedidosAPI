const database = require('../models')

class PedidosController {
    //Create
    static async criaPedido(req, res) {
        const novoPedido = req.body
        try {
            const pedidoCriado = await database.Pedidos.create(novoPedido)
            return res.status(200).json(pedidoCriado)
        } catch {
            return res.status(500).json(error.message)
        }
    }

    //Read
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
            })
            return res.status(200).json(umPedido)
        } catch(error){
            return res.status(500).json(error.mensage)
        }
    }

    //Update
    static async atualizaPedido(req, res){
        const { id } = req.params
        const mudaPedido = req.body
        try{
            await database.Pedidos.update(mudaPedido,  
                {
                    where: {
                        id: Number(id)
                }
            })
            const pedidoAtualizado = await database.Pedidos.findOne(
                {
                    where: {
                        id: Number(id)
                }
            })
            return res.status(200).json(pedidoAtualizado)
        } catch (error){
            return res.status(500).json(error.mensage)
        }
    }
}

module.exports = PedidosController