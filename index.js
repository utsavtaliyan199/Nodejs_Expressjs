const express = require('express');
const port = 3000;
const port1 = 3001;
const bodyparser = require('body-parser');

// writing an express server
const app = express();

let numberOfRequests = 0;

// function middleware1(req,res,next)
// {
//     numberOfRequests++;
//     console.log(numberOfRequests);
//     console.log('from inside the middleware '+req.headers.val);
//     next();
// }

app.use(bodyparser.json());

function calculateSum(n)
{
    let sum = 0;

    for(let i = 1;i <= n;i++)
    {
        sum+= i;
    }
    return sum;
}

// HANDLERS -->

function handleFirstRequest(req,res)
{
    // res.send(calculateSum(100));    // this will throw an error because if we send any integer through res.send(number), nodejs takes it as a "STATUS CODE RESPONSE"
    // res.send(calculateSum(100).toString(10));

    let input1 = req.query.value;       // if we want sum of user given value, we can pass it in the query parameter while "sending HTTP REQUEST"
    res.send('The sum is '+calculateSum(input1));

    // there're other ways to send data to the BACKEND SERVER (data on which complex tasks can be performed) from the REQUEST SIDE
    // using 'HEADERS' , 'BODY'
    // but we can only send query params from the browser, rest can be sent with tools such as thunder client or postman
}

function handleSecondRequest(req,res)
{
    let num1 = req.headers.val;
    let num2 = req.query.counter;
    // we can't send headers from the http requests send by browsers, only from tools like thunder-client or postman
    console.log('sum is '+calculateSum(num1));
    res.send('calculated sum is '+calculateSum(num2));
}

function handleThirdrequest(req,res)
{   
    console.log(req.body);
    console.log(req.query);
    console.log(req.headers);
    let num1 = req.headers.header1;
    res.send('the sum here is '+calculateSum(num1));
}

function createUser(req,res)
{
    res.send('User is created');
}

// REQEUST METHODS -->

// the browser (mostly) is capable of only sending get requests to the server
app.get('/',handleFirstRequest);    
app.get('/handleSum',handleSecondRequest);
app.post('/handleSum1',handleThirdrequest);
// app.get('/:username',createUser);           // this is a catch all route, it catches all requests of /name, /name2 type

// SERVER LISTEN METHODS

function started()
{
    console.log(`Example app started listening on port ${port}`);
}

app.listen(port,started);

// function started1()
// {
//     console.log(`Example app started listening on port ${port1}`);
// }

// app.listen(port1,started1);