const {
	Model,
	DataTypes
} = require('sequelize')

class Address extends Model {
	static init(sequelize) {
		super.init({
			zipcode: DataTypes.STRING,
			street: DataTypes.STRING,
			number: DataTypes.INTEGER,
			complement: DataTypes.STRING,
			district: DataTypes.STRING,
			city: DataTypes.STRING,
			state: DataTypes.STRING,
			country: DataTypes.STRING,
		}, {
			sequelize
		})
	}

	static associate(models) {
		this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
	}
}

module.exports = Address