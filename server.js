const express = require("express");
const bcrypt = require("bcrypt");

const saltRounds = 10;
const port = 8000;

const server = express();

server.post("/register",(request,response)=>{
    bcrypt.hash(request.query.password, saltRounds, (error,hashPassword)=>{
        if(error){
            console.log("error");
        }
        else{
            console.log("hash PSWD : ", hashPassword);
        }
    })
})

server.listen(process.env.PORT || port ,()=>{
    console.log(`> HOST URL : http://localhost:${port}/register`);
});

