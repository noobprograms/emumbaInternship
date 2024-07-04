const getUser = (req, res) => {
    res.send("this is the user");
    console.log("this route got triggered");
}
const getUserImage = (req, res) => {
    res.send("this is the image of the user");
}
const getUserbyID = (req, res) => {
    res.send("this is the image of the user");
}
module.exports = {
    getUser,
    getUserImage,
    getUserbyID
}