function updateUser(req, res) {
    const { id } = req.params;
    const { firstName, lastName } = req.body;
    res.send(`user with id ${id} was updated with first name=${firstName} and last name=${lastName}`);
}

module.exports = updateUser;