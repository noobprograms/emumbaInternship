const mongoose = require('mongoose');


const Animal = mongoose.Schema({
    name: String,
    species: String,
    foods: {
        likes: [String],
        dislikes: [String]
    },
    age: Number,
    price: Number
});


module.exports = mongoose.model("Animal", Animal);