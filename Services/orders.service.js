const Orders = require("../Models/orders.model")

const getOrdersService = async (query) => {
    const result = await Orders.find(query);
    console.log(result);
    return result;
};
const postOrdersService = async (data) => {
    const result = await Orders.create(data);
    return result;
};

const deleteOrdersService = async(query) => {
    const result = await Orders.deleteMany(query)
    console.log(result);
    return result;
}
const updateOrdersService = async(query,data) => {
    const result = await Orders.updateOne(query,data)
    console.log(result);
    return result;
}





module.exports={ getOrdersService, postOrdersService,  deleteOrdersService, updateOrdersService}