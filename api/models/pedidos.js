'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedidos extends Model {
    static associate(models) {
    }
  }
  Pedidos.init({
    nome_do_cliente: DataTypes.STRING,
    item_pedido: DataTypes.STRING,
    pagamento_efetuado: DataTypes.BOOLEAN,
    endereço: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pedidos',
  });
  return Pedidos;
};
