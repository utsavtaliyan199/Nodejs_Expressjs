const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

// creating an express server
const app = express();

// NODE PACKAGE MANAGER has all the external libraries such as express which you can install in your node environment 
// and then use them easily

// middleware1

let numberOfRequests = 0;

function middleware1(req,res,next)
{
    numberOfRequests++;
    console.log('Number of requests to the server is '+numberOfRequests);
    console.log('Inside middleware');
    next();         // this will call the next middleware in sequence (if any) or the specified handler in 
                    // the http request
}

app.use(middleware1);
app.use(bodyParser.json());

function calculateSum(n)
{
    let sum = 0;

    for(let i = 1;i <= n;i++)
    {
        sum+= i;
    }
    return sum;
}

function calculateProduct(n)
{
    let answer = 1;
    for(let i = 1;i <= n;i++)
    {
        answer*= i;
    }
    return answer;
}

// HANDLERS FOR ALL THE HTTP REQUEST METHODS

function handleFirstRequest(req,res)
{
    // the browser needs to send the input to this counter function, there are 3 ways to do this -> query params,headers,body
    let number = req.query.counter;
    console.log(calculateSum(req.query.counter1));
    console.log(calculateSum(req.query.counter2));
    let calculatedSum = calculateSum(number);
    // res.send(calculatedSum); this will throw an error as Invalid status code:5050 because the res.send() takes
    // any number as a status code
    let num1 = calculatedSum.toString(10);
    res.send(num1);
} 


function createUser(req,res)
{
    let num1 = req.headers.counter;
    let num2 = req.headers.counter1;

    console.log(req.headers);

    console.log('Sum1 '+calculateSum(num1));
    console.log('Sum2 '+calculateSum(num2));
    console.log(req.query);
    console.log(req.query.name);
    console.log(req.route);
    console.log(req.route.path);
    res.send('User is created');
}

function handleUser(req,res)
{
    let name = req.query.name;
    console.log(req.params.user);
    res.send('username : '+name);   
}

function handleSecondRequest(req,res)
{
    console.log(req.body);
    let num1 = req.body.value1;
    let num2 = req.body.value2;


    if(num1 < 1000000)
    {
        let calculatedSum = calculateSum(num1);
        let calculatedProduct = calculateProduct(num2);

        let answerObj = {
            sum : calculatedSum,
            product : calculatedProduct
        }

        if(calculatedSum > 100000000)
        {
            answerObj['veryLargeSum'] = true;
        }
        else
        {
            answerObj['veryLargeSum'] = false;
        }

        if(calculatedSum > 10000 && !answerObj['veryLargeSum'])
        {
            answerObj['LargeSum'] = true;
        }
        else
        {
            answerObj['LargeSum'] = false;
        }
        res.status(200).json(answerObj);
    }
    else 
    {
        res.status(401).send('Very big number for calculateSum');
    }
}

function getApp(req,res)
{
//     res.send(`<html>
//     <head>
//         <title>todoApp</title> 
//         <h1>todoList</h1>
//     </head>
//     <body>
//         <b>
//             <li>Coding</li>
//             <li>Gym</li>
//             <li>Running</li>
//             <li>Reading</li>
//         </b>
//     </body>
// </html>`); 

    // another way to send html is by directly sending the html file to the browser(or frontend)
    res.sendFile(__dirname+"/index.html");
}

function fetchApi(req,res)
{
    let object1 = {
        "data": [{
          "type": "articles",
          "id": "1",
          "attributes": {
            "title": "JSON:API paints my bikeshed!",
            "body": "The shortest article. Ever.",
            "created": "2015-05-22T14:56:29.000Z",
            "updated": "2015-05-22T14:56:28.000Z"
          },
          "relationships": {
            "author": {
              "data": {"id": "42", "type": "people"}
            }
          }
        }],
        "included": [
          {
            "type": "people",
            "id": "42",
            "attributes": {
              "name": "John",
              "age": 80,
              "gender": "male"
            }
          }
        ]
      };

      let object2 = [
        {
            color: "red",
            value: "#f00"
        },
        {
            color: "green",
            value: "#0f0"
        },
        {
            color: "blue",
            value: "#00f"
        },
        {
            color: "cyan",
            value: "#0ff"
        },
        {
            color: "magenta",
            value: "#f0f"
        },
        {
            color: "yellow",
            value: "#ff0"
        },
        {
            color: "black",
            value: "#000"
        }
    ];

    res.send(object1);
    // res.json(object2);
}

// REQUEST METHODS

app.get('/handleSum',handleFirstRequest);
app.post('/createUser',createUser);
// app.get('/:user',handleUser); 
app.post('/handleSum1',handleSecondRequest);
app.get('/todoApp',getApp);
app.get('/getApi',fetchApi);

function started()
{
    console.log(`Example app started listening on port ${port}`);
}

app.listen(port,started);
