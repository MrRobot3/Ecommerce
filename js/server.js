//importanto pacotes que instalei

const express   = require('express');
const admin     = require('firebase-admin');
const bcrypt    = require('bcrypt');
const path      = require('path');

//declarando diretórios estáticos

let staticPath = path.join(__dirname, "ecommerce");

//inicializando o express.js

const app = express();


//middleware
app.use(express.static(staticPath));

app.listen(3000, ()=>{
    console.log('Listening on port 3000...')
})

//Routes
//home route
app.get("/", (req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
})