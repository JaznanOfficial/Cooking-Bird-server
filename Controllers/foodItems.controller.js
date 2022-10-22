const express=require('express')
const app = require("../app");
const { getFoodItemsService, postFoodItemsService,deleteFoodItemsService,updateFoodItemsService } = require("../Services/foodItems.service");

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
        return res.status(200).json(foodItems)
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
        if (foodItems.acknowledged && !foodItems.deletedCount) {
            return res.status(404).json({
                status: "Failed",
                message: "We didn't find any user to delete.",
            });
        }
        else if (foodItems.acknowledged && foodItems.deletedCount) {
            
            return res.status(200).json({
                status: "Successful",
                message: "Data deleted successfully",
            });
        }
        return res.status(500).json({
            status: "Failed",
            message: "Something wrong! please try again or contact with us",
        });
    } catch (error) {
        res.json(error)
    }
};

const updateFoodItemsController = async (req, res) => {
    try {
        const query = req.query;
        const data = req.body;
        // console.log(query);
        const foodItems = await updateFoodItemsService(query, data);
        console.log(foodItems);
        if (foodItems.acknowledged && !foodItems.matchedCount) {
            return res.status(404).json({
                status: "Failed",
                message: "We didn't find any food items to update.",
            });
        }
        else if (foodItems.matchedCount && foodItems.modifiedCount) {
            
            return res.status(200).json(foodItems);
        }
        return res.status(500).json({
            status: "Failed",
            message: "Something wrong! please try again or contact with us",
        });
    } catch (error) {
        res.json(error);
    }
};

module.exports = {getFoodItemsController,postFoodItemsController,deleteFoodItemsController,updateFoodItemsController}
