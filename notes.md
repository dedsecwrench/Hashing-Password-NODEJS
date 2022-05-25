# What is Frontend and Backend ?

    Frontend development =>
    Basically whatever the user looking at on website, that is the frontend side of web application.
    developing UI
    UI = User Interface is anything a user interacts with on a website, application, or any digital device.
    Frontend consist of 1 thing only i.e React project directory. 

    Backend Development =>
    whatever data user interacts with on frontend side will store in backend.
    Backend application consist of 2 things i.e :-
    first thing is database and another thing is backend proper application or the folder structure that you're having.

    frontend application will be created separately and backend application will also be created separately
    both in separate folder.
    because frontend application itself is a very big thing.

Note => ***you can create frontend and backend in same folder if you are creating a website of your own***
        ***else create frontend and backend in different folder***

# What is the responsbility of backend Application ?

    Backend responsbility or only job is that whenever or
    whatsoever data your frontend application is asking for,
    go to the database,
    fetch that specific data
    and then send it back to the frontend application.
    
    first application is your React application
    another application is your database
    Backend application connects these 2 applications.

    whenever 2 different application running on different ports or different locations.
    so their is 1 thing if you want to access data from one application to another their is something which is known as API

 ***Always Remember this thing***
    So Whenever you're developing the Backend application that means you're developing the API.
    API = Application Programming Interface

# How many API's can have in one Backend application ?

    Uncountable
    It can have as many as API's we can create over their.

    So when you're having a lots and lots of API's and 
    then you collect all those API's and
    then you keep it at 1 single folder,
    So that complete folder will be known as your Backend Project.

    All the API's when get combined together at a single place,
    that complete folder structure will be known as the Backend project.

# create directory manually

    mkdir DIR-NAME

# Command for creating package.json file

    npm init --y

# inside package.json => script section add property =>

       "start":"node index.js"
***(index.js) File in which you created your server***     

# http module

    "http" Mpdule is the in-build module in the JavaScript. 
     so if you want to create API or If you want to create Applications
     you can use the "http" module.

    so whenever any single API gets created,
    that time or most of the time we will be using the "http" module only. 

    so for the single API we don't have to install the libraries, or other frameworks etc,
    so if you want to create the single API, so better go with the "http" module only.

        const http = require("http");
        note => this syntax is from es5

# createServer using http module

whatever server you created should listen to a port number given by you

http.createServer((request,response)=>{

         *** Request here ***    
                 OR 
         *** Response here ***
    response.write("hello world");

   Note => ***if you make changes inside your server you have to restart your server by npm start***

}).listen(8000)  ***you can change port number if you want, whatever you wanna give***
       In this 8000 is the port-number

# command to start the server you created

    npm start

# Request and Response in Node

Request and Response object both are the callback function parameters and are used for Express. js and Node. js.
The res object represents the HTTP response that an Express app sends when it gets an HTTP request.

# Install nodemon

    command to install nodemon => npm install nodemon
    Note=> in package.json => script section => add command -> "start": "nodemon yourServerFileName"

    what nodemon do is -> 
    earlier when we were using node istead of nodemon we have to restart the server to apply the changes we made.
    but in the case of nodemon we dont have to start the server again and again to apply the changes, 
    whenever you make changes and save the file, after saving it'll automatically updates data on page,
    no need to restart the server.

# Express

    when your having lots and lots of API's and you need to maintain those API's inside a folder structure,
    then you need something which is known as Framework.

 => What is that Backend framework you used to create in the backend development ?
 ***That is EXPRESS***

    Express provides methods to specify what function is called for a particular HTTP verb ( GET , POST , SET , etc.) and URL pattern ("Route"), and methods to specify what template ("view") engine is used, where template files are located, and what template to use to render a response.

***Importing and creating modules***

    A module is a JavaScript library/file that you can import into other code using Node's require() function.
    Express itself is a module, as are the middleware and database libraries that we use in our Express applications.

    The code below shows how we import a module by name, using the Express framework as an example. 

    const express = require('express');
    const server = express();


# Middleware in express rounting

    Middleware functions are functions that have access to the request object (req),
    the response object (res), and the next function in the application’s request-response cycle.
    The next function is a function in the Express router which, when invoked,
    executes the middleware succeeding the current middleware.

Middleware functions can perform the following tasks :
1. Execute any code.
2. Make changes to the request and the response objects.
3. End the request-response cycle.
4. Call the next middleware in the stack.


ex =>
***Middleware created***

middleware takes three parameters that is => request, response, next

    const middleware = (request,response,next) =>{
        console.log("MIDDLEWARE 1");
        next();
    }

If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging. 

***using midlleware which we created***

    server.use(middleware);
    .use method is used to use the middleware which we created.

***using middleware in API***

    server.get("/user",middleware2,(request,response)=>{
        response.send({username: "abc",id:1});
    }) 

    middleware functions that return a Promise will call next(value) when they reject or throw an error.
    next will be called with either the rejected value or the thrown Error.

Note => ***The call above to next(). Calling this function invokes the next middleware function in the app. The next() function is not a part of the Node.js or Express API, but is the third argument that is passed to the middleware function. The next() function could be named anything, but by convention it is always named “next”. To avoid confusion, always use this convention.***


# Express Routing

***Http Methods***
=> GET,PUT,POST,DELETE


# Sending the data (POST method)

***Query params***

    it is used to access multiple values from url
    ex =>  /addUser
            request.query

***Url params***

    it is used to access single values from url
    ex =>  /editUser/:id
            request.params

# CORS (Cross-Origin Resource Sharing)

    one of the application.. backend or frontend should enable cors, so that data can be passsed.
    .use method can be used for both middleware and cors.

    cors is mostly get enabled in backend.

    import cors by => const cors = require("cors");
    then to ENABLE it =>  server.use(cors());

    install axios in frontend to pass or fetch the data.
    useEffect hook is used for API CALLS.

    without cors nothing works
    no API CALLS etc..
    if you are in the deployment stage then nothing will work without cors.

# proxy

    use proxy in your package.json file in backend (only for development).
    if this is your API => http://localhost:8000/
    add this part in the package.json file =>
    "proxy": "http://localhost:8000/",
    and then make request using API calls.

# API call in useEffect HOOK in Frontend

useEffect(()=>{

    axios.get("http://localhost:8000").then((response)=>{
        console.log(response)
    }))

    axios.post("http://localhost:8000", {name:"abc",age:20} ).then((response)=>{
        console.log(response)
    }))

})

in useEffect Hook => 

    axios.anyHttpMethod("Host URL(port) given to backend server API that you created")
    .then((response)=>{
            response here;
    })


# Main Route

    What basically happens is that when we creating the routes.
    like =>
    server.get("/user");
    server.get("/employee");

    So this way not actually the correct way of creating backend application.
    reason behind is that once you will deploy the application.
    your application will be like https://localhost:3000 or some domain name or something.
    and then someone has to type /user or /employee.
    so in this format you will not be able to deploy the application.

    So what do we need ->
    what we need is that one single route which is merged with multiple routes.

    /api/v1

    this v1 is a concept of versioning of APIs.

***Always remember***

    when you creating the backend application for the first time.
    that means you are creating the first version of the backend application.
    or the apis that you're having in the backend application.

    Basically versioning concept is that =>
    imagine that currently you are having some data.
    then you want to make some changes in the APIs.
    but you can't directly modify your API.
    because your API is dependent on the backend.
    and your frontend is dependent on the APIs.
    so you have to create different APIs and you have to test them.
    and then those API's are working fine.. then only it'll go back to the frontend.

    so there's a very big concept of versioning of APIs.

***Always remember this thing***

    when you are creating the master route for the backend application.
    you will be creating like /api/v1

    so instead of using server.get("/")

we're gonna write =>
  
    server.use("/api/v1", and over here whatever the child routes you are having.. );
    first parameter is your master route.
    second parameter is your Combine file of the child routes(Main Route).

Folder structure =>

    2 folder will be created
    one is controller another is routes
    check files in these folder for further notes

# Application Route

    => http://localhost:3000/api/v1 
    this is going to be your complete application route.

    server.use("/api/v1", main router);

# REST API

    REST API means restfull API which follows the CRUD Application or which helps to create the CRUD app.


# Register / Login Procedure :

## Register :
1. FE will display the input fields that you want to capture from the user.
    Name, age, salary, dept, email, password etc.     

2. User will be providing the details in the fields, 
    then he will click on submit button or register/ signup button.  

3. FE will verify if all the fields are properly filled and correct. - Validating input fields : 
    Regex regex101.com (Form Validation).

4. FE will be having an API call which will pass this complete data in API to the backend.     

5. Validate email if it is already present or not. Now its time to store the details in DB. ENCRYPTION :Information like passwords should not be stored in the db directly. So we will encrypt the password and then only store it . So this encryption code will be written in controllers.   

6. There is a library known as bcrypt npm : any text will be converted into a hash value .     

7. Once the bcrypt has returned you hashed value, then we will store that in DB along with other user details.  

har   : NORMAL TEXT h2345678912#$%^&9aTYGHBSJN@#$%^&(0R)      : HASHED VALUE

# Login :

 1. FE will take data from user , email/username and password.

 2. Click on login button, then FE will call an API from backend and will pass email and password to it.
 
 3. APIs comes up with different types of error messages,         
 like if email and password is not provided then msg would be "Please provided required details",         
 if email is not already present in database , then msg would be : "Given email is not registered, Please register".         
 Password's hashed value will be created once again and then it will compare it with the one saved in DB.
 if it returns then home page if not then error msg will be : "Your password is incorrect, please try with correct password."     

 4. BE /login api will provide the token to the frontend. this token will be generated using library named - jsonwebtoken .     

 5. After receiving this token from BE , FE will store this token in the local storage. and the whatever next api calls has to be made , this token will be passed in the Headers. inside authorization field concatenated with Bearer and then token.     

 6. IRCTC Applications : Token Expiration

    /login - it will give you token , it will say that it should expire in 5 mins. 

    /contact - after 4 mins - this api user is trying to access by passing token , at this time he will get the response as well from BE. 

    /user - after 5 mins - since the token will be expired by now. so the error will be sent to FE,
    now FE responsiblity would be to send the user back to login page is such error occurs. 
    error msg would be : Session has expired, please re-login.

***Authentication : Authorization : Role Based access***

    Authentication is used to authenticate someone's identity, 
    whereas authorization is a way to provide permission to someone to access a particular resource.

    Authentication is the log in and authorization is the permissions.

    authentication validates that users are who they claim to be. Usually with a username and password, 
    (401 status code for unAuthentication) 
    Authorization checks, 
    whether that user has permission to access aspecific resource
    once they've been authenticated sometimes called access control 
    because it controls which resources in the server the current user has access to. 
    (403 status code forbidden)

# Hashing Passwords

1. Whenever any user register in your website then they provide their email Id and password, or any other type of information which can not be disclosed. Then these type of information when getting saved in database it should be hashed.
2. Mostly will be hashing the passwords when user logs in.
3. To do this complete procedure you can use this library named “bcrypt”.
4. To install this library you can use the command : 

    npm install bcrypt

***How to do Hashing***

first step :

    => first generate the salt, this can be achieved by using "bcrypt.genSalt()" function. 
    Generate salt, generated salt will be used to hash the password.

    => This function takes two parameters one is salt rounds another is the callback function,
    this callback function returns the salt.

    => This salt values again gets used to hash the password

second step :

    Generate hashed password.

    => In this step to hash the password we will be using the function "bcrypt.hash()"

    => This function takes three parameter, first is the password that is required to be hashed,
    next is the salt that we generated in last step, and
    third is the callback function which returns the hashed password.

NOTE => ***Now instead of doing it in two different steps, we can also combine these two steps to create hashed password.***



