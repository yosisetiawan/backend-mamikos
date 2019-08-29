const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const path = require('path')
require('express-group-routes')

const app = express()

// Setting Multer Storage
const storage = multer.diskStorage({
    destination: './public/images/uploads/',
    filename: function (req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage: storage})

// Middleware
const { authenticated } = require('../middleware')
// export controller 
const dormController = require('../controllers/dormController')

app.group("/api/v1/", (router) => {
   router.get('/dorms', dormController.index)
   router.get('/dorms/:id', dormController.show)
   router.post('/dorm', authenticated, upload.single('images'), dormController.store)
})

module.exports = app