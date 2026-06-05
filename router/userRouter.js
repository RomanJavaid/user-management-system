const userSchema = require('../model/userSchema')

const express = require("express")
const rateLimit = require("express-rate-limit")

const user = express.Router()

const auth = require("../middleware/auth")
const apiKeyAuth = require("../middleware/apiKeyAuth")

const userLoginControl = require("../controller/userController/loginController")
const userHomeControl = require("../controller/userController/homeController")

// login limiter
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: "Too many login attempts, try again later."
})

// public routes
user.get("/", userLoginControl.user)
user.get("/login", userLoginControl.login)

user.post("/login", loginLimiter, userLoginControl.loginPost)

user.get("/register", userLoginControl.register)
user.post("/register", userLoginControl.registerPost)

user.get("/auth/google", userLoginControl.googleRender)
user.get("/auth/google/callback", userLoginControl.googleCallback)

// protected route
user.get("/home", auth, userHomeControl.home)

// logout
user.get("/logout", userLoginControl.logout)

module.exports=user