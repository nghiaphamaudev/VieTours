const express = require('express');
const viewController = require('./../controllers/viewsController');
const authController = require('./../controllers/authController');
const router = express.Router();

router.use(authController.checkLoggedIn);
router.get('/about', viewController.getAbout);
router.get('/login', viewController.getLogin);
router.get('/register', viewController.getRegister);
router.get('/home', viewController.homePage);
router.get('/destination', viewController.destionation);
router.get('/hotel', viewController.hotel);

module.exports = router;
