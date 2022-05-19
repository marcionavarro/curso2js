const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [{
      nome: 'Marcio',
      email: 'marcio@gmail.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      nome: 'Dinho',
      email: 'dinho@gmail.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      nome: 'Lita',
      email: 'lita@gmail.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  async down() {},
};
