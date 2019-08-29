'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_booking: {
        type: Sequelize.INTEGER
      },
      id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:'users',
          key:'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      id_dorm: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:'dorms',
          key:'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      boarding_date: {
        type: Sequelize.DATE
      },
      boarding_out_date: {
        type: Sequelize.DATE
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
    return queryInterface.dropTable('bookings');
  }
};