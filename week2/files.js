const { readFileSync, readFile, access, constants } = require('node:fs')

console.log("first statement"); //writing this log statements to show that what is the difference between asynchronous and synchronous calls
const fileContents = readFileSync("myfile.txt", 'utf-8'); //this reads the file synchronously
console.log(fileContents);

console.log("second statement");
//the following command reads the file asynchronously without halting the whole program. In the output the third statement will get executed before the file read has completed using this statement
readFile("myfile.txt", 'utf-8', (err, data) => { //having error as the first argument of a callback is called error first callback
    if (err) {
        console.log("following error occured", err);
    } else {
        console.log(data);
    }
});
console.log("third statement");