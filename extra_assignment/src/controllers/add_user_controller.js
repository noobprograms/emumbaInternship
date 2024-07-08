function addUser(req, res) {
    console.log(`the post request contains ${req.body.firstName} and ${req.body.lastName}`);
    res.send(`User added with the following name ${req.body.firstName} ${req.body.lastName}`);
}
module.exports = addUser;