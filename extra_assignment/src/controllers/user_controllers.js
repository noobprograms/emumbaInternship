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
async function getUser(req, res) {
    try {
        const users = await user_model.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

async function deleteUser(req, res) {
    const { id } = req.params;

    console.log("i am reaching uptil here");
    try {
        console.log(`the object id ${id}`);
        const myUser = await user_model.findByIdAndDelete(id);
        if (myUser == null) {
            return res.status(404).send("User not found");

        }
        res.status(200).json({ "message": "the user was deleted" });
    } catch (e) {
        res.status(500).json(e.message);
    }
}
module.exports = { addUser, updateUser, getUser, deleteUser };