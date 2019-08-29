const jwt = require('jsonwebtoken')
const models = require('../models')
const Dorm = models.dorm
const User = models.user

exports.index = (req, res) => {
    Dorm.findAll({
        include:[{
            model: User,
            as: "created_by"
        }]
    }).then(dorm => res.send(dorm))
}

exports.show = (req, res) => {
    Dorm.findOne(
        {where: {id: req.params.id},
        include:[{
            model: User,
            as: "created_by"
    }]}).then(dorm=> res.send(dorm))
}

exports.store = (req, res) => {
    // const token = req.header['Authorization']
    // console.log(token)
    const {dormName, address, price, 
        roomAvailable, sizeDorm, description, 
        dormType, longitude, latitude, 
        images, city, province, userId} = req.body
    Dorm.create({
        dormName: dormName,
        address: address,
        price: price,
        roomAvailable: roomAvailable,
        sizeDorm: sizeDorm,
        description: description,
        dormType: dormType,
        longitude: longitude,
        latitude: latitude,
        images: req.file.filename,
        city: city,
        province: province,
        createdBy: userId
    }).then(dorm => {
        res.send({
            messages: "Success",
            dormName
        })
    })
    // jwt.verify(token, 'mamikos-clone', (err, decoded) => {
    //     if(err){
    //         res.send({
    //             token: 'false',
    //             messages: 'Sorry your token has invalid please check again your token'
    //         })
    //     }
    // })    
}