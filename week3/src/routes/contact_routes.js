const express = require('express')
const myMiddleware = require('../middleware/logger_middleware')
const contactFunction = require('../controllers/contact_controller')

const contactRouter = express.Router()

contactRouter.get("/contactdetails", myMiddleware, contactFunction);


module.exports = contactRouter;