const bycrypt = require('bcrypt')
const sha1 = require('sha1')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')
const salt = bycrypt.genSaltSync(10)

const Users = require('../models').user

exports.signup = (req, res) => {
    const {name, email, username, password} = req.body

    const hash = sha1(password)

    Users.create({
        name: name,
        email: email,
        username: username,
        password: hash
    }).then(user => {
        res.send({
            messages: "success register user",
            name,
            email,
        })
    })
}

exports.login = (req, res) => {
    const {username, password} = req.body

    const matchPassword = sha1(password)

    Users.findOne({where: {username : username, password: matchPassword}, attributes : ['id','email','name']})
    .then(user => {
        if(user){
            const token = jwt.sign({ id : user.id}, 'mamikos-clone')
            res.send({
                user,
                token
            })
        }else{
            res.send({
                error: true,
                messages: "username or password is not found"
            })
        }
    })
}
