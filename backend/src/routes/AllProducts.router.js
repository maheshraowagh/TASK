const express = require ('express');
const {AllProducts }  = require('../Controllers/AllProductsController');


const router = express.Router();


router.get("/AllProducts",AllProducts )




module.exports = router;