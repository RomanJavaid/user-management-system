const express=require('express')
const userSchema = require('../model/userSchema')
const user=express.Router()
const auth=require('../middleware/auth')

const userLoginControl=require('../controller/userController/loginController')
const userHomeControl=require('../controller/userController/homeController')

user.get('/',userLoginControl.user)
user.get('/login',userLoginControl.login)

user.post('/login',userLoginControl.loginPost)

user.get('/register',userLoginControl.register)

user.post('/register',userLoginControl.registerPost)

user.get('/auth/google',userLoginControl.googleRender)
user.get('/auth/google/callback',userLoginControl.googleCallback)

user.get('/home', auth, userHomeControl.home)

user.get('/logout',userLoginControl.logout)

module.exports=user