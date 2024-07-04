const express = require('express')
const myMiddleware = require('../middleware/logger_middleware')
const pricingFunction = require('../controllers/pricing_controller')

const pricingRouter = express.Router()

pricingRouter.get("/pricingdetails", myMiddleware, pricingFunction);


module.exports = pricingRouter;