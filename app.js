const express = require("express");
const productsRoute = require('./routes/productsRoute');
const categoriesRoute = require('./routes/categoriesRoute');
const navbarRoute = require('./routes/navbarRoute');
let app = express();
 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const appRoutes = [
    {
       path: productsRoute,
       url: '/api/products'
    },
    {
       path: categoriesRoute,
       url: '/api/categories'
    },
    {
        path: navbarRoute,
        url: '/api/navbar'
    }
]

for (var i = 0; i < appRoutes.length; i++){
    app.use(appRoutes[i].url, appRoutes[i].path);
}

app.listen(5000, ()=>{
    console.log('Server is Running');
})










