const { ObjectId } = require("mongodb");
const user_model = require("../models/user_model");

async function updateUser(req, res) {
    const { id } = req.params;
    const { age, email } = req.body;
    console.log("i am reaching uptil here");
    try {
        console.log(`the object id ${id}`);
        const myUser = await user_model.findByIdAndUpdate(id, { age: age, email: email });
        if (myUser == null) {
            return res.status(404).send("User not found");

        }
        const updatedUser = await user_model.findById(id);
        res.status(200).json(updatedUser);
    } catch (e) {
        res.status(500).json(e.message);
    }
}

module.exports = updateUser;