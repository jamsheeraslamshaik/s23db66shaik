var express = require('express');
const phone_controlers= require('../controllers/phone');
var router = express.Router();
/* GET request for one phone. */
router.get('/phone/:id', phone_controlers.phone_detail);

/* GET detail phone page */
router.get('/detail', phone_controlers.phone_view_one_Page);

/* GET create phone page */
router.get('/create', phone_controlers.phone_create_Page);

/* GET create update page */
router.get('/update', phone_controlers.phone_update_Page);

/* GET delete phone page */
router.get('/delete', phone_controlers.phone_delete_Page);
module.exports = router
