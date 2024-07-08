function getUser(req, res) {
    res.send(`this is the user with id ${req.params.id}`);
}
module.exports = getUser;