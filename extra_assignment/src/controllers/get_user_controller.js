const user_model = require("../models/user_model");

async function getUser(req, res) {
    // res.send(`this is the user with id ${req.params.id}`);
    try {
        const products = await user_model.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json(error.message);
    }
}
module.exports = getUser;