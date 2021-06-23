import jsSha from 'jssha';

const shaObj = new jsSha('SHA-512', 'TEXT', { encoding: 'UTF8' });
shaObj.update(unhashedCookieString);
const hashedCookieString = shaObj.getHash('HEX');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const usersList = [
      {
        email: 'kai@ra.com',
        password: '1234',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        email: 'sam@gmail.com',
        password: '1234',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    await queryInterface.bulkInsert('users', usersList);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
