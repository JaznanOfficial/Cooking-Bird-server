const express = require('express');
const { getFoodItemsController } = require('../Controllers/foodItems.controller');
const router = express.Router();

router.route('/')
    .get(getFoodItemsController);



module.exports = router;