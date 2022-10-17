const express = require('express');
const { getFoodItemsController, postFoodItemsController, deleteFoodItemsController, updateFoodItemsController } = require('../Controllers/foodItems.controller');
const router = express.Router();

router.route('/')
    .get(getFoodItemsController)
    .post(postFoodItemsController)
    .delete(deleteFoodItemsController)
    .patch(updateFoodItemsController)



module.exports = router;