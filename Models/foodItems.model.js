const mongoose = require("mongoose");

const foodItemsSchema = mongoose.Schema({
    name: {
        required:true,
        unique: true,
        type: String,
        max: 20,
        min:3
    },
    category: {
        required:true,
        type: String,
    },
    area: {
        required:true,
        type: String,

    },
    items: {
        required:true,
        type: String
    },
    img: {
        required:true,
        type: String
    },
    rating: {
        required:true,
        type: Number
    },
    price: {
        required:true,
        type: Number
    }
})

const FoodItems = mongoose.model("FoodItems", foodItemsSchema)

module.exports = FoodItems;