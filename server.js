const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");

// this package is required for recieving password from frontend axios.
// This package allows you to use a series of middleware, which can decode data in defferent formats.
const bodyParser = require('body-parser');

const saltRounds = 10;
const port = 8000;

const server = express();
server.use(cors());

// after 
server.use(bodyParser.json());


server.post("/register",(request,response)=>{
                // request.body.password will get the data.
    bcrypt.hash(request.body.password, saltRounds, (error,hashPassword)=>{
        if(error){
            response.status(404)
            console.log("error");
        }
        else{
            response.status(200)
            console.log("hash PSWD : ", hashPassword);
        }
    })
})

server.listen(process.env.PORT || port, ()=>{
    console.log(`> HOST URL : http://localhost:${port}/register`);
});

