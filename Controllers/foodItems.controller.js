const express=require('express')
const app = require("../app");
const { getFoodItemsService } = require("../Services/foodItems.service");

const getFoodItemsController = async (req, res) => {
    try {
        const query = req.query;
        console.log(query);
        const foodItems = await getFoodItemsService(query);
        res.status(200).json({
            status: "Successful",
            message: "Data found successfully",
            data: foodItems
        })
    } catch (error) {
        console.log(error)
    }
};

module.exports = {getFoodItemsController}
