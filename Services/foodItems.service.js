const FoodItems = require("../Models/foodItems.model");

exports.getFoodItemsService = async (filter) => {
    const result = await FoodItems.find(filter);
    console.log(result);
    return result;
};
