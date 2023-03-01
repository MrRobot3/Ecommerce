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

//Don't actually know how to use it
//  app.get('/404', (req, res)=>{
//      res.sendFile(path.join(staticPath, "404.html"))
//  });

app.use((req, res)=>{
   res.redirect('404.html');
})

app.use(express.json());

app.post('/signup', (req, res)=>{
    let {name, email, password, number, tac, notification} = req.body;
    if(name.length < 3){
        return res.json({'alert': 'name must be 3 letters long'});
    } else if(email.length==""){
        return res.json({'alert': 'enter your email'});
    } else if(password.length < 8){
        return res.json({'alert': 'password should be 8 letters long'});
    } else if(number.length==""){
        return res.json({'alert': 'enter your phone number'});
    } else if(Number(number)=="" || number.length < 10){
        return res.json({'alert': 'invalid number, please enter valid one'});
    } else if(tac.checked =false){
        return res.json({'alert': 'you must agree to our terms and conditions'});
    }       
})