const express = require('express');
const { getTableController, postTableController, deleteTableController, updateTableController } = require('../Controllers/bookTable.controller');

const router = express.Router();

router.route('/')
    .get(getTableController)
    .post(postTableController)
    .delete(deleteTableController)
    .patch(updateTableController)



module.exports = router;