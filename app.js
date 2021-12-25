const express =require('express');
const conection = require('./model/configrtion/config');
const { userrouter,ratingrouter,adminrouter,plecerouter,userPlacerouter,transaportationrouter } = require('./router/router');
const app = expres();
const port = 3000;

app.use(express.json())
app.use(userrouter,ratingrouter,adminrouter,plecerouter,userPlacerouter,transaportationrouter)
conection();
app.listen(port, ()=> console.log("Running server..."))