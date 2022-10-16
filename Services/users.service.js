const Users = require('../Models/users.model')

const getUsersService = async (filter) => {
    const result = await Users.find(filter);
    console.log(result);
    return result;
};
const postUsersService = async (data) => {
    const result = await Users.create(data);
    console.log(result);
    return result;
};



module.exports={getUsersService, postUsersService}