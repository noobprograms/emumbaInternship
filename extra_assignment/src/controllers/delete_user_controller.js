const user_model = require('../models/user_model')
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
module.exports = deleteUser;