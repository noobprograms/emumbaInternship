const { getUser, addUser, deleteUser, updateUser } = require('./user_controllers');


module.exports = {
    addUser,
    getUser,
    updateUser,
    deleteUser
}