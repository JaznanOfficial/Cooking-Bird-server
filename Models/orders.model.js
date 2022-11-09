const mongoose = require("mongoose");
var validator = require("validator");

const ordersSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: [false],
            validate: [validator.isEmail, "Please provide a valid email"],
        },
        img: {
            required: true,
            type: String,
            validate: [validator.isURL, "Please provide an URL"],
        },
        details: {
            required: true,
            type: String,
        },
        quantity: {
            required: true,
            type: Number,
        },
        price: {
            required: true,
            type: Number,
        },
        status: {
            // required: true,
            type: String,
            enum: {
                values: ["pending", "processing", "on the way", "delivered"],
                message:
                    "{VALUE} isn't valid. please select 'pending', 'processing','on the way' or 'delivered' ",
            },
        },
    },
    {
        timestamps: true,
    }
);

const Orders = mongoose.model("orders", ordersSchema);

module.exports = Orders;
