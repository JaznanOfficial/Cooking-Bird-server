const express = require('express');
const { getFoodItemsController, postFoodItemsController } = require('../Controllers/foodItems.controller');
const router = express.Router();

router.route('/')
    .get(getFoodItemsController)
    .post(postFoodItemsController)



module.exports = router;