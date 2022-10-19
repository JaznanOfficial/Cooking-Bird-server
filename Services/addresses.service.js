const Addresses = require("../Models/addresses.model")

const getAddressService = async (query) => {
    const result = await Addresses.find(query);
    console.log(result);
    return result;
};
const postAddressService = async (data) => {
    const result = await Addresses.create(data);
    console.log(result);
    return result;
};

const deleteAddressService = async(query) => {
    const result = await Addresses.deleteOne(query)
    console.log(result);
    return result;
}
const updateAddressService = async(query,data) => {
    const result = await Addresses.updateOne(query,data)
    console.log(result);
    return result;
}





module.exports={ getAddressService, postAddressService,  deleteAddressService, updateAddressService}