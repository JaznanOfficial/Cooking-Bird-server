const BookTable = require("../Models/bookTable.model")

const getTableService = async (query) => {
    const result = await BookTable.find(query);
    console.log(result);
    return result;
};
const postTableService = async (data) => {
    const result = await BookTable.create(data);
    return result;
};

const deleteTableService = async(query) => {
    const result = await BookTable.deleteMany(query)
    console.log(result);
    return result;
}
const updateTableService = async(query,data) => {
    const result = await BookTable.updateOne(query,data)
    console.log(result);
    return result;
}





module.exports={ getTableService, postTableService,  deleteTableService, updateTableService}