
const express = require('express')
const userController = require('../controllers/user_Controller.js')
const userAuth = require('../middlewares/Auth.js')
const router = express.Router()

router.get('/getData',userAuth,userController.home)
router.post('/register',userController.register)
router.post('/login',userController.login)
router.get('/logout',userController.logout)

module.exports = router