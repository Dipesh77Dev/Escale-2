const db = require('../models/user.js')
const Product = db.productSchema

exports.create =(req, res) => {
    // res.json("create")
    const product = new Product({
        name: req.body.name,
        mrp : req.body.mrp,
        description: req.body.description,
        image: req.body.image
    })
    product.save(product).then(
        data => {
            res.send(data);
        }
    ).catch(
        err =>{
            res.status(500).send(err)
        })
}

exports.find =(req, res) => {
    Product.find().then(
        data => {
            res.send(data)
        }
    ).catch(
        err =>{ 
            res.status(500).send(err)
        })
}

exports.update =(req, res) => {
    // res.json("update")
    Product.findByIdAndUpdate(req.params.id).then(
        data =>{
            res.send(data);
        }
    ).catch(
        err => {
            res.status(500).send(err)
        })
}

exports.deleteById =(req, res) => {
    // res.json("deleteById")
    Product.findByIdAndRemove(req.params.id, req.body).then(
        data => {
            if(!data){
                res.send("No data has been found");
            }else{
            res.send(data + "documents deleted")
        }}
    ).catch(
        err =>{
            res.status(500).send(err)
        })
}

exports.deleteAll =(req, res) => {
    // res.json("deleteAll")
    Product.deleteMany({}).then(
        data => {
            res.send(data+ "documents deleted")
        }
    ).catch(
        err =>{
            res.status(500).send(err)
        })
}
