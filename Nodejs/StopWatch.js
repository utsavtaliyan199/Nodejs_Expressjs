let counter = 1;

function printCounter()
{
    console.clear();
    console.log(counter);
    counter++;
}

let timer1 = setInterval(printCounter,1*1000);

// to clear interval, i.e to stop the execution of setInterval(which means to stop calling the callback in setInterval)
// we can call clearInterval as a function inside a callback of setTimeout to stop the Watch after a specified time Interval

function stopWatch()
{
    console.log("Stop Watch stopped");
    clearInterval(timer1);
}

// let timer = setTimeout(timer1,4*1000);

setTimeout(stopWatch,6*1000);