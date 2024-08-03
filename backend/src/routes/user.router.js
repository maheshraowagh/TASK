const express = require ('express');
const {registerUser,home, loginUser}  = require('../Controllers/userController');
const router = express.Router()


router.get("/", home)

router.route('/register').post(registerUser)

router.route('/login').post(loginUser)




module.exports = router;