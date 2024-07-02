const http = require('http');

const myRequest = http.request("http://www.google.com", (res) => {
    res.on("data", (dataChunk) => console.log(dataChunk)); //this data event listener is used to get the data chunk from the request
    res.on("end", () => console.log("end")); //this end event listener is used to check if the data chunk has ended
});

myRequest.end(); //you can get data only when you close the request

//istead of using request we can use get which is way easier because we don't need to close it

http.get("http://www.google.com", (res) => {
        res.on("data", (dataChunk) => console.log(dataChunk));
        res.on("end", () => console.log("end"));
    }

);


//if you need to access the sites with https, you can use https module
const https = require('https');
https.get()