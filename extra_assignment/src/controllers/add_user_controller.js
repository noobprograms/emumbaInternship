const user_model = require("../models/user_model");

async function addUser(req, res) {

    try {
        const user = await user_model.create(req.body);
        console.log(`the post request contains ${req.body.firstName} and ${req.body.lastName}`);
        res.status(200).json(user);
    } catch (e) {
        console.log(e);
        res.status(500).json(e.message);
    }
}
module.exports = addUser;