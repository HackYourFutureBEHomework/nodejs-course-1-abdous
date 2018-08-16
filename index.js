const express = require("express");
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