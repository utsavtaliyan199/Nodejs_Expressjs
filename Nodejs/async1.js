// 2 functions to demonstrate that async code doesn't block the execution of sync code, and javascript
// runs code line by line(synchronously) except when an async function , like setTimeout makes that function
// run asynchronously

let counter1 = 1;
let counter2 = 1;

// this function acts as a stopWatch
function printCounter()
{
    console.clear();
    console.log(counter1);
    counter1++;
}

// to run the function printCounter like a stopWatch, we need to use setInterval function, which takes a callback and 
// runs it after fixed intervals
setInterval(printCounter,1*1000);

// Now some sync code, which will run first, as this will be brought to the Call stack and execution context first
// from the "Callback Queue"

for(let i = 1;i <= 2000;i++)
{
    counter2++;
}

console.log(counter2);





