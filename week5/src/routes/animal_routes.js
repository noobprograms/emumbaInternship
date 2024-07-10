const express = require('express');

const animal_router = express.Router();
const { getSpecificAnimal, getAllAnimals } = require('../controllers/animal_controller');

animal_router.get('/', getAllAnimals);
animal_router.get('/getMyAnimal', getSpecificAnimal);


module.exports = animal_router;