const {
    getTableService,
    postTableService,
    deleteTableService,
    updateTableService,
} = require("../Services/bookTable.service");

const getTableController = async (req, res) => {
    try {
        const query = req.query;
        // console.log(query);
        const tables = await getTableService(query);
        console.log(tables);
        if (tables.length === 0) {
            return res.status(200).json({
                message: "You've no data or entered a wrong queries. please insert first then find data or check your queries",
            });
        }
        return res.status(200).json(tables);
    } catch (error) {
        res.json(error);
    }
};
const postTableController = async (req, res) => {
    try {
        const data = req.body;
        const tables = await postTableService(data);
        console.log(tables);
        res.status(200).json({
            status: "Successful",
            message: "Data added successfully",
        });
    } catch (error) {
        res.json(error);
    }
};

const deleteTableController = async (req, res) => {
    try {
        const query = req.query;
        // console.log(query);
        const tables = await deleteTableService(query);
        console.log(tables);
        if (tables.acknowledged && !tables.deletedCount) {
            return res.status(404).json({
                status: "Failed",
                message: "We didn't find any user to delete.",
            });
        }
        else if (tables.acknowledged && tables.deletedCount) {
            
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
const updateTableController = async (req, res) => {
    try {
        const query = req.query;
        const data = req.body;
        // console.log(query);
        const tables = await updateTableService(query, data);
        console.log(tables);
        if (tables.acknowledged && !tables.matchedCount) {
            return res.status(404).json({
                status: "Failed",
                message: "We didn't find any user to update.",
            });
        }
        else if (tables.matchedCount && tables.modifiedCount) {
            
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
    getTableController,
    postTableController,
    deleteTableController,
    updateTableController,
};
