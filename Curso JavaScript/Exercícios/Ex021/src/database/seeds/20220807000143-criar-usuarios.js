'use strict';

const bcryptjs = require('bcryptjs')

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert('users', [{
        nome: 'Leonardo',
        email: 'leonardo1@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date()
    },

    {
        nome: 'Leonardo 2',
        email: 'leonardo2@gmail.com',
        password_hash: await bcryptjs.hash('654321', 8),
        created_at: new Date(),
        updated_at: new Date()
    },

    {
        nome: 'Leonardo 3',
        email: 'leonardo3@gmail.com',
        password_hash: await bcryptjs.hash('124569873', 8),
        created_at: new Date(),
        updated_at: new Date()
    }],

    {});
  },

  down: () => {}
};
