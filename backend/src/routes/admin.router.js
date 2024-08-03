const express = require ('express');
// const { createProducts } = require ('../Controllers/adminController');
const  adminMiddleware  = require('../Middleware/adminMiddleware copy');
const authMiddleware  = require('../Middleware/authMiddleware');
const {createService,createCategory,createBrand } = require('../Controllers/adminController');



const router = express.Router();


router.route('/createProduct').post(  createService )
router.route('/createCategory').post( createCategory)
router.route('/createBrand').post(  createBrand )




module.exports = router;