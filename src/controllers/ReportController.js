const {
	Op
} = require('sequelize')
const User = require("../models/User")

module.exports = {
	async show(req, res) {
		const user = await User.findAll({
			attributes: ['name', 'email'],
			where: {
				email: {
					[Op.iLike]: '%@efraga.com.br'
				}
			},
			include: [{
					association: 'addresses',
					where: {
						street: {
							[Op.iLike]: 'rua 9'
						}
					}
				},
				{
					association: 'techs',
					required: false,
					where: {
						name: {
							[Op.iLike]: 'react%'
						}
					}
				},
			]
		})

		return res.json(user)
	}
}