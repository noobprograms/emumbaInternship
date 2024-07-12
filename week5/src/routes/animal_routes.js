const express = require('express');

const animal_router = express.Router();
const { getSpecificAnimal, getAllAnimals, addAnimal, getAnimalDiscription, getName ,deleteAnimals,storeDataToDB} = require('../controllers/animal_controller');

animal_router.get('/', getAllAnimals);
animal_router.get('/storeDataToDB',storeDataToDB);
animal_router.get('/deleteAnimal', deleteAnimals);
animal_router.get('/getMyAnimal', getSpecificAnimal);
animal_router.get('/getFullName', getName);



animal_router.post('/addAnimal', addAnimal);
animal_router.get('/getAnimalDescription', getAnimalDiscription)


module.exports = animal_router;