const express = require('express')
const AddressController = require('./controllers/AddressController')
const ReportController = require('./controllers/ReportController')
const TechController = require('./controllers/TechController')
const UserController = require('./controllers/UserController')
 
const routes = express.Router()

routes.get('/', (req, res) => { return res.json({hello: 'world'}) })
routes.post('/users', UserController.store)
routes.get('/users', UserController.index)

routes.post('/users/:user_id/addresses', AddressController.store)
routes.get('/users/:user_id/addresses', AddressController.index)

routes.post('/users/:user_id/techs', TechController.store)
routes.get('/users/:user_id/techs', TechController.index)
routes.delete('/users/:user_id/techs', TechController.delete)

routes.get('/report', ReportController.show)

module.exports = routes
