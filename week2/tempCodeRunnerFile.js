console.log("first statement"); //writing this log statements to show that what is the difference between asynchronous and synchronous calls
const fileContents = readFileSync("./myfile.txt", 'utf-8'); //this reads the file synchronously
console.log(fileContents);

console.log("second statement");
//the following command reads the file asynchronously
readFile("./myfile.txt", 'utf-8', (err, data) => { //having error as the first argument of a callback is called error first callback
    if (err) {
        console.log("following error occured", err);
    } else {
        console.log(data);
    }
});
console.log("third statement");