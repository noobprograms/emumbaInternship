const errorHandler = (error, req, res, next) => {
    console.error(error.message)
    res.status(500).send(error.message)

}

module.exports = errorHandler;