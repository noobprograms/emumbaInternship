const fs = require('fs');
const animal_model = require('../models/animal_model');


async function getAllAnimals(req, res) {
    console.log('this is being called when the route is triggered')
        // var animals = await animal_model.find({});
        // const mypath = __dirname;
        // console.log(__dirname)
    const animals = JSON.parse(fs.readFileSync("D:/Backenddev/week5/public/animals-2.json", { encoding: "utf-8" }));
    animals.forEach(async(element) => {
        await animal_model.create(element);
    });
    res.status(200).json(animals);
    // res.send("hello");
}
async function getSpecificAnimal(req, res) {
    var query = req.query; //to later stringify it and add dollar signs to the conditionals.

    query = JSON.stringify(req.query); //stringifying it so it can be processed as regular expressions
    query = query.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    query = JSON.parse(query)
    const queryobj = {...query };
    const toExclude = ['sort', 'limit', 'fields', 'page'];
    toExclude.forEach((elem) => delete queryobj[elem])
    try {

        // console.log('this is ', typeof)
        if (req.query.sort) {
            console.log('this is insid ethe if statement')
            var animals = await animal_model.find(queryobj).sort(req.query.sort).setOptions({ explain: 'executionStats' });
            res.status(200).json(animals);
        } else {
            var animals = await animal_model.find(queryobj).setOptions({ explain: 'executionStats' });
            res.status(200).json(animals);
        }


    } catch (error) {
        res.status(500).json(error);
    }

}
async function addAnimal(req, res) {
    var animalReq = req.body;
    try {
        var animal = await animal_model.create(animalReq);
        res.status(200).json({ "success": true, message: animal });
    } catch (error) {
        res.status(500).json({ 'success': true, message: error.message });
    }
}
async function getAnimalDiscription(req, res) {
    try {

        const myAnimal = await animal_model.findOne({ name: req.query.name });

        res.status(200).json({ status: "success", discription: myAnimal.clearDescription });
    } catch (e) {
        res.status(500).json(e.message);
    }
}
async function getName(req, res) {
    try {

        const myAnimal = await animal_model.findOne({ name: req.query.name });

        res.status(200).json({ status: "success", answer: myAnimal.displayName() });
    } catch (e) {
        res.status(500).json(e.message);
    }
}
module.exports = { getAllAnimals, getSpecificAnimal, addAnimal, getAnimalDiscription, getName };

//path module
//static file in express(how to serve it )