const express = require('express')
// const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()

// export controller 
const authController = require('../controllers/authController')

app.group("/user/", (router) => {
    // Register User
    router.post('/register', authController.signup)
    // Login User
    router.post('/login', authController.login)
})

module.exports = app