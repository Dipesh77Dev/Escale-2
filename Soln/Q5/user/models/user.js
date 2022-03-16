const dbConfig = require('../config/db.mongo.js');
const mongoose = require('mongoose');
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.userSchema=require('./userSchema.js')(mongoose);
db.businessSchema = require('./businessSchema.js')(mongoose);
db.productSchema = require('./productSchema.js')(mongoose);
// module.export/export
module.exports = db;