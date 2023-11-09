var express = require('express');
const phone_controlers= require('../controllers/phone');
var router = express.Router();
/* GET costumes */
router.get('/', phone_controlers.phone_view_all_Page );
module.exports = router
