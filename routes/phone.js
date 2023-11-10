var express = require('express');
const phone_controlers= require('../controllers/phone');
var router = express.Router();
/* GET request for one costume. */
router.get('/phone/:id', phone_controlers.phone_detail);
module.exports = router
