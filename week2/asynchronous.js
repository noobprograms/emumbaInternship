//js is single threaded so is nodejs
//but libuv in nodejs enables it to pass on asynchronous tasks to event loop which further passes them on to the operating system. 
//event loop checks if these operations are completed and runs the callback functions in queues

//following example shows asychronous operation in javascript

var fastCar = "audi";
var slowCar = "toyota";

setTimeout(() => console.log(`${fastCar} reached`), 1000); //halts the operation for 1000 milliseconds
console.log(`${slowCar} reached`); //this will be printed first