const mongoose = require("mongoose");

const foodItemsSchema = mongoose.Schema({
    name: {
        unique: true,
        type: String,
        max: 20,
        min:3
    },
    category: {
        type: String,
        unique: true,
        enum:["dessert","fast food","breakfast", "lunch","dinner","special"]
    },
    area: {
        type: String,

    },
    items: {
        type: String
    },
    img: {
        type: String
    },
    rating: {
        type: Number
    },
    price: {
        type: Number
    }
})

const FoodItems = mongoose.model("FoodItems", foodItemsSchema)

module.exports = FoodItems;