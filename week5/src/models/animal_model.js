const mongoose = require('mongoose');


const Animal = mongoose.Schema({
    name: { type: String, unique: [true, "Already an animal with this name, try a different name."] }, //adding unique to the animal schema
    species: {
        type: String,
        validate: {
            validator: function(value) {
                return value.toLowerCase() !== "dinosaur";
            },
            message: "Please enter a valid pet species",
        }
    },
    foods: {
        likes: [String],
        dislikes: [String]
    },
    age: Number,
    price: { type: Number }
}, {  toObject: { virtuals: true } });
Animal.index({ age: 1 });
Animal.methods.displayName = function() {
    return `${this.name} the ${this.species}`;
}
Animal.virtual("clearDescription").get(function() {

    return `The name of this ${this.species} is ${this.name}`;
});

module.exports = mongoose.model("Animal", Animal);