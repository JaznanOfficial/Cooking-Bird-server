const mongoose = require("mongoose");
var validator = require('validator');

const foodItemsSchema = mongoose.Schema({
    name: {
        required:true,
        unique: true,
        type: String,
        maxLength: 20,
        minLength:3
    },
    category: {
        required:true,
        type: String,
        enum: {
            values: ["dessert", "fast-food", "special", "breakfast", "lunch", "dinner"],
            message:"{VALUE} isn't supported"
        }
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
        type: String,
        validate:[validator.isURL,"Please provide an url"]
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