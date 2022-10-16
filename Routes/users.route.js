const express = require('express');
const { getUsersController, postUsersController, deleteUsersController } = require('../Controllers/users.controller');

const router = express.Router();

router.route('/')
    .get(getUsersController)
    .post(postUsersController)
    .delete(deleteUsersController)



module.exports = router;