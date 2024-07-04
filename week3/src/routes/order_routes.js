const express = require('express')
const myMiddleware = require('../middleware/logger_middleware')
const orderFunction = require('../controllers/order_controller')

const orderRouter = express.Router()

orderRouter.get("/orderdetails", myMiddleware, orderFunction);


module.exports = orderRouter;