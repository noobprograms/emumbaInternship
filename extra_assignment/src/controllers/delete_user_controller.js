function deleteUser(req, res) {


    res.send(`User with id ${req.params.id} was deleted`);
}
module.exports = deleteUser;