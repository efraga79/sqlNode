'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('addresses', { 
		id: {
			type: Sequelize.BIGINT,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		zipcode: {
			type: Sequelize.STRING,
			allowNull: false
		},
		street: {
			type: Sequelize.STRING,
			allowNull: false
		},
		number: {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		complement: {
			type: Sequelize.STRING,
			allowNull: true
		},
		district: {
			type: Sequelize.STRING,
			allowNull: false
		},
		city: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		state: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		country: {
			type: Sequelize.INTEGER,
			allowNull: false,
			defaultValue: ''
		},
		created_at: {
			type: Sequelize.DATE,
			allowNull: false
		},
		updated_at: {
			type: Sequelize.DATE,
			allowNull: false
		},
	 });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('addresses');
  }
};
