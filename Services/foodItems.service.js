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
    const result = await FoodItems.deleteMany(query)
    console.log(result);
    return result;
}

exports.updateFoodItemsService = async(query,data) => {
    const result = await FoodItems.updateOne(query,data)
    console.log(result);
    return result;
}