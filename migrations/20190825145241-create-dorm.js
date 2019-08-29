'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('dorms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dormName: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      roomAvailable: {
        type: Sequelize.INTEGER
      },
      sizeDorm: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      dormType: {
        type: Sequelize.STRING
      },
      longitude: {
        type: Sequelize.STRING
      },
      latitude: {
        type: Sequelize.STRING
      },
      images: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      province: {
        type: Sequelize.STRING
      },
      createdBy: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:'users',
          key:'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('dorms');
  }
};