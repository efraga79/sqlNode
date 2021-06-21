'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_techs', { 
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
		tech_id: {
			type: Sequelize.BIGINT,
			allowNull: false,
			references: { 
				model: 'techs', 
				key: 'id' 
			},
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE'
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
    await queryInterface.dropTable('user_techs');
  }
};
