const express=require('express')
const app = require("../app");
const { getFoodItemsService, postFoodItemsService,deleteFoodItemsService } = require("../Services/foodItems.service");

const getFoodItemsController = async (req, res) => {
    try {
        const query = req.query;
        // console.log(query);
        const foodItems = await getFoodItemsService(query);
        if (foodItems.length === 0) {
            return res.status(200).json({
                message:"You've no data. please insert first then find data"
            })
        }
        res.status(200).json({
            status: "Successful",
            message: "Data found successfully",
            data: foodItems
        })
    } catch (error) {
        res.json(error)
    }
};
const postFoodItemsController = async (req, res) => {
    try {
        const data = req.body;
        // console.log(data);
        const foodItems = await postFoodItemsService(data);
        console.log(foodItems)
        res.status(200).json({
            status: "Successful",
            message: "Data added successfully",
            
        })
    } catch (error) {
        res.json(error)
    }
};

const deleteFoodItemsController = async (req, res) => {
    try {
        const query = req.query;
        // console.log(query);
        const foodItems = await deleteFoodItemsService(query);
        console.log(foodItems)
        res.status(200).json({
            status: "Successful",
            message: "Data delete successfully",
        })
    } catch (error) {
        res.json(error)
    }
};

module.exports = {getFoodItemsController,postFoodItemsController,deleteFoodItemsController}
