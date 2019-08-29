const express = require('express')
const bodyParser = require('body-parser')
const fileType = require('file-type')
const fs = require('fs')
require('express-group-routes')

const app = express()
const port = process.env.PORT || 8080

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use('/static',express.static('public'))

// import controller and routes
const authRoutes = require('./routes/auth')
const dormRoutes = require('./routes/dorm')

// Midlleware

// Routes
app.get("/" ,(req, res) => {
    res.send('Success Your Server Has Been Running !!')
})
app.use(authRoutes)
app.use(dormRoutes)
app.get('/images/:imagename', (req, res) => {

    let imagename = req.params.imagename
    let imagepath = __dirname + "/public/images/uploads/" + imagename
    let image = fs.readFileSync(imagepath)
    let mime = fileType(image).mime

	res.writeHead(200, {'Content-Type': mime })
	res.end(image, 'binary')
})

// Server Running
app.listen(port, () => console.log(`server running on port ${port}!!`))