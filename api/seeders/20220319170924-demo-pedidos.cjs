'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pedidos', [
      {
        nome_do_cliente: 'Roberto Márcio Freitas',
        item_pedido: '2 coca-colas, 2 hamburguers',
        pagamento_efetuado: true,
        endereço: 'Rua Bráulio Cordeiro, 431, Rio de Janeiro, RJ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome_do_cliente: 'Laís Bárbara da Cruz',
        item_pedido: '1 coca-cola, 2 X-Bacon',
        pagamento_efetuado: true,
        endereço: 'Avenida Cesário de Melo, 709, Campo Grande, RJ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome_do_cliente: 'Márcio Severino Nascimento',
        item_pedido: '1 guaraná antartica, 2 hamburguers e 1 X-Bacon',
        pagamento_efetuado: false,
        endereço: 'Beco Cabana, 980, Rio de Janeiro, RJ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome_do_cliente: 'Sebastião Oliver da Mata',
        item_pedido: '1 sprite, 1 hamburguer',
        pagamento_efetuado: true,
        endereço: 'Rua Itupiranga, 179, Rio de Janeiro, RJ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome_do_cliente: 'Edson Davi Nunes',
        item_pedido: '1 fanta laranja, 2 hamburguers',
        pagamento_efetuado: true,
        endereço: 'Rua Vigilante Setúbal dos Santos, 739, Rio de Janeiro, RJ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome_do_cliente: 'Marcela Cristiane Duarte',
        item_pedido: '2 guavaritas, 2 hamburguers',
        pagamento_efetuado: false,
        endereço: 'Rua Coronel Alberto Martins, 150, RJ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome_do_cliente: 'Clarice Aurora da Rocha',
        item_pedido: '2 coca-colas, 2 hamburguers',
        pagamento_efetuado: true,
        endereço: 'Travessa Santo Antonio, 825, Rio de Janeiro, RJ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome_do_cliente: 'Alice Stefany Drumond',
        item_pedido: '1 X-Salada',
        pagamento_efetuado: true,
        endereço: 'Alto da Boa Vista, Rio de Janeiro, RJ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome_do_cliente: 'Lucas Victor Lucca Ramos',
        item_pedido: '1 guaravita, 1 X-Bacon',
        pagamento_efetuado: false,
        endereço: 'Vila Servio Túlio, 378, Rio de Janeiro, RJ',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Pedios', null, {});
  }
};
