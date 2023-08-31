function logResponseBody(jsonBody)
{
    console.log(jsonBody);
}

function callbackFn(result)
{
    result.json().then(logResponseBody)
}

let sendObj = {
    method : "GET"
};

// just like we send http requests(as get requests) from the browser, and POST requests using thunder-client or postman,
// we're able to send requests to an (already) running nodejs prcoess(/handleSum here) from this another nodejs process (secondProcess.js)

// we have 1. URL/route     2. request method sent inside an object    3. handler (as the callbackFn here)
fetch("http://localhost:3000/handleSum",sendObj).then(callbackFn);