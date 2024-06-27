//here i demonstrate the use of if statement
//the following program is for multiple alarms of alarm clock to wake me up for office
//to take input from the user lets install a readline module in node
//npm install readline-sync
const time = require("readline-sync").question("Enter the current time:"); //this time is taken in string just for an example. In real world program this should be incremented every minute
if (time == "4:30") {
    console.log("the clock starts ringing and says wake up for Fajr");
} else if (time == "6:30") {
    console.log("the clock starts ringing and says WAKE UP!");
} else if (time == "8:30") {
    console.log("the clock starts ringing and says wake up for office or you are going to be late");
} else if (time == "9:00") {
    console.log("the clock starts ringing and says you are late");
} else {
    console.log("don't ring the clock");
}

//for the above conditions or cases we can use switch conditional as well as following
switch (time) {
    case "4:30":
        console.log("the clock starts ringing and says wake up for Fajr");
        break; //the break structure is used to break out of a control block(loops or conditionals)
    case "6:30":
        console.log("the clock starts ringing and says WAKE UP!");
        break;
    case "8:30":
        console.log("the clock starts ringing and says wake up for office or you are going to be late");
        break;
    case "9:00":
        console.log("the clock starts ringing and says you are late");
        break;
    default:
        console.log("don't ring the clock");
        break;
}



//now the following example is for a while loop
//consider a situation in which you have to fill your fuel tank with petrol
//you have to fill the tank till the fuel level is 100%
//so lets write a program for it
//lets take the fuel level as 0% initially
let fuelLevel = 0;
while (fuelLevel < 100) {
    console.log("the fuel level is " + fuelLevel + "%" + " Filling...");
    fuelLevel = fuelLevel + 10;
}
//if we hardcoded it, it would take a lot of time but while loop makes this easier

/*a do while loop is used to execute the statement at least once as the condition is check afterwards
if we want to make an application that keeps asking the user for a name until he enters the name then we can do this
*/
let name = "";
do {
    name = require("readline-sync").question("Enter your name:"); //name is asked here. if an empty name is entered then this will repeat

} while (!name); //here it is checked if the name entered in the loop is empty
console.log("your name is " + name); //if the name is not empty then the loop will end and the name will be logged on console.


/*
    the structure of while loop is as follows:
    -write an initializer variable
    -check in the while condition whether that initializer variable satisfies the condition
    -if the condition is satisfied then execute the statement
    -increment the initializer variable
    -repeat the loop

    All this can be done easily using a for loop
    Consider the above example of filling petrol
    we can do this using a for loop as follows:
*/
for (let newFuelLevel = 0; newFuelLevel < 100; newFuelLevel += 10) {
    console.log("the new fuel level is " + newFuelLevel + "%" + " Filling...");
}


//if we want to iterate over an object properties we can use for...in loop as 
let arr = [1, 2, 3, 4, 5];
arr.newProperty = "waleed";
for (let i in arr) {
    console.log(arr[i]);
}
//here the newProperty is also iterated over

//if we want to iterate over the iterables only we can use for...of loop as
for (let j of arr) {
    console.log(j);
}