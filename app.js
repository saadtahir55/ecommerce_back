const bodyParser = require("body-parser");
const express = require("express");
const productsRoute = require('./routes/productsRoute');
let app = express();
 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/products', productsRoute);


app.listen(5000, ()=>{
    console.log('Server is Running');
})










