// const express = require("express");
const {
    getAddressService,
    postAddressService,
    deleteAddressService,
    updateAddressService,
} = require("../Services/addresses.service");

const getAddressController = async (req, res) => {
    try {
        const query = req.query;
        // console.log(query);
        const addresses = await getAddressService(query);
        console.log(addresses);
        if (addresses.length === 0) {
            return res.status(200).json({
                message: "You've no data or entered a wrong queries. please insert first then find data or check your queries",
            });
        }
        res.status(200).json({
            status: "Successful",
            message: "Data found successfully",
            data: addresses,
        });
    } catch (error) {
        res.json(error);
    }
};
const postAddressController = async (req, res) => {
    try {
        const data = req.body;
        const addresses = await postAddressService(data);
        console.log(addresses);
        res.status(200).json({
            status: "Successful",
            message: "Data added successfully",
        });
    } catch (error) {
        res.json(error);
    }
};

const deleteAddressController = async (req, res) => {
    try {
        const query = req.query;
        // console.log(query);
        const addresses = await deleteAddressService(query);
        console.log(addresses);
        if (addresses.acknowledged && !addresses.deletedCount) {
            return res.status(404).json({
                status: "Failed",
                message: "We didn't find any user to delete.",
            });
        }
        else if (addresses.acknowledged && addresses.deletedCount) {
            
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
        res.json(error);
    }
};
const updateAddressController = async (req, res) => {
    try {
        const query = req.query;
        const data = req.body;
        // console.log(query);
        const addresses = await updateAddressService(query, data);
        console.log(addresses);
        if (addresses.acknowledged && !addresses.matchedCount) {
            return res.status(404).json({
                status: "Failed",
                message: "We didn't find any user to update.",
            });
        }
        else if (addresses.matchedCount && addresses.modifiedCount) {
            
            return res.status(200).json({
                status: "Successful",
                message: "Data update successfully",
            });
        }
        return res.status(500).json({
            status: "Failed",
            message: "Something wrong! please try again or contact with us",
        });
    } catch (error) {
        res.json(error);
    }
};

module.exports = {
    getAddressController,
    postAddressController,
    deleteAddressController,
    updateAddressController,
};
