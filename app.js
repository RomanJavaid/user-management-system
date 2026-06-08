console.log("APP FILE LOADED");
require('dotenv').config()
const express=require('express')
const app=express()

const session=require('express-session')
const expressLayouts=require('express-ejs-layouts')
const path=require('path')
const userRouter=require('./router/userRouter')
const adminRouter=require('./router/adminRouter')
const flash=require('connect-flash')
const mongodbConnection=require('./config/mongodb')
const nocache=require('nocache')
const cookieParser=require('cookie-parser')
const helmet=require('helmet')
const xss=require('xss-clean')
const logger = require('./service/logger')
const apiKeyAuth = require("./middleware/apiKeyAuth")
// rate limiter
const rateLimit = require('express-rate-limit')


// security baseline
app.disable("x-powered-by");
app.set("etag", false);

// cors
const cors = require('cors')

// cors
app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))


// port number
const port=process.env.PORT || 3000

mongodbConnection();


// flash
app.use(flash())

// nocache
app.use(nocache())



// helmet csp
 app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'", "https:"],
        styleSrc: ["'self'", "'unsafe-inline'", "https:"],
        imgSrc: ["'self'", "data:", "https:"],
        connectSrc: ["'self'", "https:"],
        fontSrc: ["'self'", "https:", "data:"],
        objectSrc: ["'none'"],
        baseUri: ["'self'"],
        frameAncestors: ["'self'"]
      }
    }
  })
)

// HSTS
app.use(
  helmet.hsts({
    maxAge: 15552000, // 180 days
    includeSubDomains: false,
    preload: false
  })
)

// xss-clean
app.use(xss())

// logger
logger.info('Application started')



// path setting
app.use('/images',express.static(path.join(__dirname,'public','images')))
app.use('/style',express.static(path.join(__dirname,'public','style')))
app.use(express.static(path.join(__dirname,'public')))



// rate limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,
    message: "Too many requests, please try again later."
})
// rate limiter
app.use(limiter)

app.use(cookieParser())

// body parser
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// session
app.use(session({
    secret:"your secret key",
    resave:false,
    saveUninitialized:true,
    cookie: {
        httpOnly: true,
        secure: false,
        sameSite: "strict"
    }
}))

//csrf
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: false });

app.use('/user', csrfProtection);

app.use((req, res, next) => {
    if (req.csrfToken) {
        res.locals.csrfToken = req.csrfToken();
    } else {
        res.locals.csrfToken = "";
    }
    next();
});



// layouts
app.use(expressLayouts);
app.set('layout','./layouts/layout')

// view engine to ejs
app.set('view engine','ejs')


// routes
app.use('/user',userRouter)
app.use('/admin',adminRouter)


// first route
app.get('/',(req,res)=>{
   res.redirect("/user/login")
})

app.get("/api/user-data", apiKeyAuth, (req, res) => {
  res.json({ secure: true })
})

app.use("*",(req,res)=>{
    res.render('pageNotFound',{title:"Page not found"})
})


// app.listen(port,(err)=>{
//     if(err){
//         console.log(`Error during port listening ${err}`);
//     }else{
//         console.log(`Server running on http://localhost:${port}`);
//     }
// })

console.log("About to start server...");

app.listen(port, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${port}`);
});