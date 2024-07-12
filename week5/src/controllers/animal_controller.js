const fs = require('fs');
const path = require('path')
const animal_model = require('../models/animal_model');


async function getAllAnimals(req, res) {
    const searchParam = req.query.search;
    console.log(searchParam)
    try {
        const result = await animal_model.find({});
        if(searchParam){
            result.select(`${searchParam} -_id`);
            res.status(200).json({message:result});

        }
        else
        res.status(200).json({message:result});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}
async function storeDataToDB(req, res)   {
    console.log("the file i was mentioning is in",__dirname);
    const filePath = path.join(__dirname, '../..', 'public', 'animals-2.json');
    console.log(filePath);

    try {
        const animals = JSON.parse(fs.readFileSync(filePath, { encoding: "utf-8" }));
        animals.forEach(async(element) => {
            await animal_model.create(element);
        });
        res.status(200).json(animals);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}
async function deleteAnimals(req, res) {
    console.log("This is the route to delete animals.");
    var query = req.query; //to later stringify it and add dollar signs to the conditionals.

    query = JSON.stringify(req.query); //stringifying it so it can be processed as regular expressions
    query = query.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    query = JSON.parse(query)
    const queryobj = {...query };
    try {
        if(queryobj){
            await animal_model.deleteMany(queryobj)
            res.status(200).json({
                message: "Deleted successfully"
            })
        }else{
            res.status(400).json({message:"without passing a query all animals will be deleted."});
        }
    } catch (error) {
        res.status(500).json({
            message: "Error deleting animals.",
        })
    }

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
        ///define animals here
        let animals =  animal_model.find(queryobj);
        
        // console.log('this is ', typeof)
        if (req.query.sort) {
            console.log('this is insid ethe if statement',req.query.sort)
             
            animals = await animals.sort(req.query.sort);
            res.status(200).json(animals)
        } else {
            
            res.status(200).json(await animals);
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
module.exports = { getAllAnimals, getSpecificAnimal, addAnimal, getAnimalDiscription, getName ,deleteAnimals,storeDataToDB};

//path module
//static file in express(how to serve it )