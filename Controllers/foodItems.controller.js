const app = require("../app");
const { getFoodItemsService } = require("../Services/foodItems.service");

exports.getFoodItemsController = async (req, res) => {
    try {
        const query = req.query;
        const foodItems = getFoodItemsService(query);
        console.log(foodItems);
    } catch (error) {
        console.log(error)
    }
};
