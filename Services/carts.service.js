const Carts = require("../Models/carts.model")

const getCartsService = async (query) => {
    const result = await Carts.find(query);
    console.log(result);
    return result;
};
const postCartsService = async (data) => {
    const result = await Carts.create(data);
    return result;
};

const deleteCartsService = async(query) => {
    const result = await Carts.deleteMany(query)
    console.log(result);
    return result;
}
const updateCartsService = async(query,data) => {
    const result = await Carts.updateOne(query,data)
    console.log(result);
    return result;
}





module.exports={ getCartsService, postCartsService,  deleteCartsService, updateCartsService}