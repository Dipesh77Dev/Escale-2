const db = require('../models/user.js')
const Business = db.businessSchema

exports.create =(req, res) => {
    const business = new Business({
        name: req.body.name,
        email: req.body.email,
        registrationNo: req.body.registrationNo
    })
    business.save(business).then(
        data => {
            res.send(data);
        }
    ).catch(
        err =>{
            res.status(500).send(err)
        })
}

exports.find =(req, res) => {
    Business.find().then(
        data => {
            res.send(data)
        }
    ).catch(
        err =>{ 
            res.status(500).send(err)
        })
}