const mongoose = require("mongoose");
var validator = require("validator");

const addressesSchema = mongoose.Schema({
    
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email must be unique"],
        validate: [validator.isEmail, "Please provide a valid email"],
    },
    address: {
        required: true,
        type: String,    
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
    category: {
        required: true,
        type: String,
        enum: {
            values: ["home", "office", "others"],
            message: "{VALUE} is wrong. must be admin/moderator/user"
        }
    },
    
}, {
    timestamps: true
});

const Addresses = mongoose.model("addresses", addressesSchema);

module.exports = Addresses;
