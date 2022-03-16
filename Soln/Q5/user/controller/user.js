const db = require('../models/user.js')
const User = db.userSchema

exports.create =(req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        bio: req.body.bio,
        profilePic: req.body.profilePic
    })
    user.save(user).then(
        data => {
            res.send(data);
        }
    ).catch(
        err =>{
            res.status(500).send(err)
        })
}

exports.find =(req, res) => {
    // const name = req.query.name
    User.find().then(
        data => {
            res.send(data)
        }
    ).catch(
        err =>{ 
            res.status(500).send(err)
        })
}