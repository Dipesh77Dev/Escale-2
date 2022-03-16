const controller = require('../controller/business.js');

const router=require('express').Router();

router.get('/getBusinessDetails',controller.find);
router.post('/addBusinessDetails',controller.create);

exports.router = router;