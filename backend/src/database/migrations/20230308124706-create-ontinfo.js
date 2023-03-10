module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ontInfo', {
      sn: {
        allowNull: false,
        type: Sequelize.STRING,
        primaryKey: true,
      },
      slot: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      port: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      ontId: {
        type: Sequelize.STRING,
        field: 'ont_id',
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      manufacturer: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    })
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('ontInfo')
  },
}
