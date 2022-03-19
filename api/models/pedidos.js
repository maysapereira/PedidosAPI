'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedidos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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