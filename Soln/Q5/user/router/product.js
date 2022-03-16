const controller = require('../controller/product.js');

const router=require('express').Router();

router.get('/getProduct',controller.find);
router.post('/addProduct',controller.create);
router.put('/:id',controller.update);
router.delete('/:id',controller.deleteById);
router.delete('/',controller.deleteAll);

exports.router = router;