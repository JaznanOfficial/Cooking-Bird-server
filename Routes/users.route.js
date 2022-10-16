const express = require('express');
const { getUsersController, postUsersController } = require('../Controllers/users.controller');

const router = express.Router();

router.route('/')
    .get(getUsersController)
    .post(postUsersController)



module.exports = router;