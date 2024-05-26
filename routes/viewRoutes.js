const express = require('express');
const viewController = require('./../controllers/viewsController');
const authController = require('./../controllers/authController');
const router = express.Router();

router.use(authController.checkLoggedIn);
router.get('/about', viewController.getAbout);
router.get('/login', viewController.getLogin);
router.get('/register', viewController.getRegister);

module.exports = router;
