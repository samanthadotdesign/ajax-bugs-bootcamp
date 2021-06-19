module.exports = {
  up: async (queryInterface, Sequelize) => {
    const featuresList = [
      {
        name: 'Login',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Dashboard',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Contributions',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    await queryInterface.bulkInsert('features', featuresList);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('features', null, {});
  },
};
