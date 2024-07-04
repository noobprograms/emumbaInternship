const express = require('express')
const myMiddleware = require('../middleware/logger_middleware')
const aboutFunction = require('../controllers/about_controller')

const aboutRouter = express.Router()

aboutRouter.get("/aboutdetails", myMiddleware, aboutFunction);


module.exports = aboutRouter;