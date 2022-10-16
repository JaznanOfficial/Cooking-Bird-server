const FoodItems = require("../Models/foodItems.model");

exports.getFoodItemsService = async (filter) => {
    const result = await FoodItems.find(filter);
    console.log(result);
    return result;
};
exports.postFoodItemsService = async (data) => {
    const result = await FoodItems.create(data);
    console.log(result);
    return result;
};
exports.deleteFoodItemsService = async(query) => {
    const result = await FoodItems.remove(query)
    console.log(result);
    return result;
}