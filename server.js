//importanto pacotes que instalei

const express   = require('express');
const admin     = require('firebase-admin');
const bcrypt    = require('bcrypt');
const path      = require('path');

//declarando diretórios estáticos

let staticPath = path.join(__dirname, "public");

//inicializando o express.js

const app = express();


//middleware
app.use(express.static(staticPath));

//Routes
//home route

app.listen(3000, ()=>{
    console.log('listening on 3000 port')
})

app.get("/", (req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
})

app.get('/404', (req, res)=>{
    res.sendFile(path.join(staticPath, "404.html"));
})

app.get('/signup', (req, res)=>{
    res.sendFile(path.join(staticPath, 'signup.html'))
})

//Dont actually know how to use it
//  app.get('/404', (req, res)=>{
//      res.sendFile(path.join(staticPath, "404.html"))
//  });

app.use((req, res)=>{
   res.redirect('404.html');
})