const express = require('express');
const { getFoodItemsController, postFoodItemsController, deleteFoodItemsController } = require('../Controllers/foodItems.controller');
const router = express.Router();

router.route('/')
    .get(getFoodItemsController)
    .post(postFoodItemsController)
    .delete(deleteFoodItemsController)



module.exports = router;