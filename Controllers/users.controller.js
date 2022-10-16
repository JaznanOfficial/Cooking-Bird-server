const express = require('express');
const { getUsersService, postUsersService, deleteUsersService } = require('../Services/users.service');


const getUsersController = async (req, res) => {
    try {
        const query = req.query;
        // console.log(query);
        const users = await getUsersService(query);
        console.log(users.length);
        if (users.length === 0) {
            return res.status(200).json({
                message:"You've no data. please insert first then find data"
            })
        }
        res.status(200).json({
            status: "Successful",
            message: "Data found successfully",
            data: users
        })
    } catch (error) {
        res.json(error)
    }
};
const postUsersController = async (req, res) => {
    try {
        const data = req.body;
        // console.log(data);
        const users = await postUsersService(data);
        console.log(users)
        res.status(200).json({
            status: "Successful",
            message: "Data added successfully",
            
        })
    } catch (error) {
        res.json(error)
    }
};

const deleteUsersController = async (req, res) => {
    try {
        const query = req.query;
        // console.log(query);
        const users = await deleteUsersService(query);
        console.log(users)
        res.status(200).json({
            status: "Successful",
            message: "Data delete successfully",
        })
    } catch (error) {
        res.json(error)
    }
};


module.exports={getUsersController, postUsersController,deleteUsersController}