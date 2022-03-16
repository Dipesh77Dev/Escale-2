const express = require('express');
const server = express();
const userRouter = require('./router/user.js');
const businessRouter = require('./router/business.js');
const productRouter = require('./router/product.js')

const db = require('./models/user.js');

db.mongoose.connect(
    db.url,
).then(()=>{
   console.log('MongoDb connection has been successfully done');
   server.listen(3000, () => {
    console.log("Server has been started at port 3000");
});
}).catch(
    err => {
        console.log('MongoDb connection failed', err);
    }
);

server.use(express.json());

server.get("/", (req,res) =>{
    res.send("Welcome to my mongodb application with express & nodeJs!!!");
});
server.use('/user',userRouter.router);
server.use('/business', businessRouter.router);
server.use('/product', productRouter.router);

// server.listen(3000, () => {
//     console.log("Server has been started at port 3000");
// });