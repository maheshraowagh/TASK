const express = require ('express');
// const { createProducts } = require ('../Controllers/adminController');
const  adminMiddleware  = require('../Middleware/adminMiddleware copy');
const authMiddleware  = require('../Middleware/authMiddleware');
const createService = require('../Controllers/adminController');



const router = express.Router();

// router.route('/service').get(getAllService)
router.route('/createProduct').post(authMiddleware, adminMiddleware, createService )




module.exports = router;