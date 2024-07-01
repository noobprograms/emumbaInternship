var myObj = { name: "Waleed", age: 22 };
console.log("age" in myObj, "name" in myObj);

delete myObj.age;
console.log(myObj.age)


var myArr = [1, 2, 3, 4, 5]
var removedElem = myArr.shift(); //removes the first element from the array and returns it
console.log(myArr, " The removed element is ", removedElem);
var removedElem = myArr.pop(); //removes the last element from the array and returns it
console.log(myArr, " The removed element is ", removedElem);
myArr.unshift(0); //adds an element to the beginning of the array
console.log(myArr, " The added element is ", 0);
myArr.push(6); //adds an element to the end of the array
console.log(myArr, " The added element is ", 6);
var newArr = myArr.map((elem) => elem * 10) //using map to multiply each element of array with 10 and return the array in a new variable
console.log(newArr);

var indexOfThree = myArr.indexOf(3);
console.log("The index of 3 is ", indexOfThree);

var stringWithSpaces = "       theeta   "
console.log(stringWithSpaces.trim()); //trim is used to remove the leading and the trailing spaces


console.log(Math.PI); //match library has many Math related function




//in order to send data to the internet we have a JSON format whcih is Javascript Object Notation.
//in this format all the property names are converted to