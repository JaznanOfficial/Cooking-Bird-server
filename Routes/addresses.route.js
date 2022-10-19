const express = require('express');
const { getAddressController, postAddressController, deleteAddressController, updateAddressController } = require('../Controllers/addresses.controller');

const router = express.Router();

router.route('/')
    .get(getAddressController)
    .post(postAddressController)
    .delete(deleteAddressController)
    .patch(updateAddressController)



module.exports = router;