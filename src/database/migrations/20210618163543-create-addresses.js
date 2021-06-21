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
		user_id: {
			type: Sequelize.BIGINT,
			allowNull: false,
			references: { 
				model: 'users', 
				key: 'id' 
			},
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE'
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
			type: Sequelize.STRING,
			allowNull: false
		},
		state: {
			type: Sequelize.STRING,
			allowNull: false
		},
		country: {
			type: Sequelize.STRING,
			allowNull: false
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
