const express=require('express')
const userSchema = require('../model/userSchema')
const user=express.Router()
const auth=require('../middleware/auth')

const rateLimit = require('express-rate-limit')

const userLoginControl=require('../controller/userController/loginController')
const userHomeControl=require('../controller/userController/homeController')

user.get('/',userLoginControl.user)
user.get('/login',userLoginControl.login)

// login limiter

const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: "Too many login attempts, try again later."
})

//user.post('/login',userLoginControl.loginPost)
user.post('/login', loginLimiter, userLoginControl.loginPost)

user.get('/register',userLoginControl.register)

user.post('/register',userLoginControl.registerPost)

user.get('/auth/google',userLoginControl.googleRender)
user.get('/auth/google/callback',userLoginControl.googleCallback)

user.get('/home', auth, userHomeControl.home)

user.get('/logout',userLoginControl.logout)

module.exports=user