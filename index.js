const express = require("express");
const server = express();
const converter = require("number-to-words");
const nodemailer = require('nodemailer');

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


//  question 2,3 and 4. printing a desired result in the route and cardinal conversion
//  and printing error in case.

server.get("/:num1/plus/:num2/is", (request, response) =>{
    const{num1,num2} = request.params;
    const result = Number(num1) + Number(num2);
    if (result){
   
    response.write(`<h1>the result is going to be: ${result}</h1>`);
    response.write(`<h1>the cardinal number is : ${converter.toWords(result)}</>`);
    response.end();
    }  else {
        response.status(404).sendFile(__dirname + "/404.png");
    }
});




// question 5

server.get('/send/:email',(request, response) => {
    const {email} = request.params;
    // create reusable transporter 
    const transporter = nodemailer.createTransport({
        host: ' yahoo.com',
        port: 465,
        secure: true, // false for other ports
        auth: {
            user: `rahamanemayaou@yahoo.com`, // generated ethereal user
            pass: `account.pass` // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    const mailOptions = {
        from: '"Abdou " <rahamanemayaou@yahoo.com>', // sender address
        to: email, // list of receivers
        subject: 'Hello ', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        
        
    });
});
