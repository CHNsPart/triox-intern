const express = require('express')
const router = express.Router()
const { create, findOne, findAll } = require('../controller/calculation')

router.route("/").post(create)
router.route('/data').get(findAll);
router.route('/data/:_id').get(findOne);

module.exports = router