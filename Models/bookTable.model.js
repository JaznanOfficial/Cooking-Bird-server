const mongoose = require("mongoose");
var validator = require("validator");

const bookTableSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            validate: [validator.isEmail, "Please provide a valid email"],
        },
        phone: {
            required: true,
            type: String,
            validate: {
                validator: (value) => {
                    return validator.isMobilePhone(value, ["bn-BD"]);
                },
            },
            maxLength: 14,
            minLength: 14,
        },
        guest: {
            required: true,
            type: Number,
            max: 8,
            min: 2,
        },
        date: {
            required: true,
            type: String,
        },
        time: {
            required: true,
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const BookTable = mongoose.model("Tables", bookTableSchema);

module.exports = BookTable;
