const express = require("express");
const converter = require("number-to-words");
const server = express();
const port = 8001;
server.listen(port, () => {
    console.log(`server is running on localhost: ${port}`);
})


server.get("/", (request, response) => {
    
    response.send("Hello World am starting nodejs first homework");
});


// question1 printing a specified variable in the route by user let say :about.

server.get("/about", (request, response) => {
    
    response.send("Hello World we are learning nodejs - about");
});


// making the route taking any variable .

server.get("/:value", (request, response) => {
    
  response.send(request.params.value);
});


// question 2. printing a desired result in the route.

server.get("/:num1/plus/:num2/is", (request, response) =>{
    const{num1,num2} = request.params;
    const result = Number(num1) + Number(num2);
    if (result){
        response.send("the result is going to be:" + `${result}` );
        response.end();
    } else{

    }
   
  
});


// question 3 convertion to cardinal number

server.get("/value/:cardinalnumber/is", (request, response) =>{
    const {cardinal} = request.params;
    
   
  response.send("the cardinal number is :" + `${converter.numbertoWords(cardinal)}` );
});

// question 4 printing error

server.get("/:value1/plus/:value2/is", (request, response) =>{
    const{value1,value2} = request.params;
    const result = Number(value1) + Number(value2);
    if (result){
        response.send("the result is going to be:" + `${result}` );
        response.end();
    } else{
        response.send('error');
    }
   
  
});

