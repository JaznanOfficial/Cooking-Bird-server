const mongoose = require("mongoose");
var validator = require("validator");

const cartsSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        unique:false,
        type: String,
        required: [true, "Email is required"],
        validate: [validator.isEmail, "Please provide a valid email"],
    },
    img: {
        required: true,
        type: String,
        validate: [validator.isURL, "Please provide an URL"],
    },
    quantity: {
        required: true,
        type: Number,
    },
    price: {
        required: true,
      type:Number,  
    },
    // status: {
    //     // required: true,
    //     type: String,
    //     enum: {
    //         values: ["pending", "processing", "on the way","delivered"],
    //         message: "{VALUE} isn't valid. please select 'pending', 'processing','on the way' or 'delivered' ",
    //     },
    // },
    
}, {
    timestamps: true
});

const Carts = mongoose.model("carts", cartsSchema);

module.exports = Carts;
