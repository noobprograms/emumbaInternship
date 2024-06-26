/*this example illustrates that js assigns variable types dynamically according 
to the value assigned to it.

(this syntax is used to write multiline comments in js)
*/

var a = 10; //javascript Number
var b = 10e10 // this is also a Number
var newNummber = 2
    //lets perform some operations on numbers
console.log("the answer of arithmatic operations is ", a + newNummber / 20); //should give 
//also we can compare the values to check if they are greater or smaller or equal to other numbers
console.log("is 10 greater 2? ", 10 > 2);

var c = "waleed"; //javascript string
var d = "waleed" + " khan"; //+ operator can be used for concatenation as well
//Strings can also be compared using the comparison operators as follows
console.log('the comparison Z<a gives', "Z" < "a"); //because uppercase letters are smaller than lowercase letters


//you can use backticks to do cool stuff inside strings
var myString = `my name is ${c} and i have stored a value of "${a}" in variable \\a\\.
        i can leave space and add \n here between backticks and it will be shown as it is in the terminal`
console.log(myString)
var d = true //javascript boolean
    //booleans can be compared using logical operators(AND, OR and NOT)
console.log("is 10 greater 2 AND is 10 less than 20? ", 10 > 2 && 10 < 20); //should give true because && is AND operator
var e = null //javascript null used to show and unintentional empty delaration
var f = undefined //used to show that the variable is delared but not given the value yet
var g = 1 / 0 // returns NaN used to show illegal mathematical operation

console.log("adding an number and string in js does this 16+myname =", 16 + "myname")


console.log("Null coalescing operator check gives ", null || "default value");
//in the above examples i have included semicolon and excluded it as well 
//semicolon is optional in js but it is a good practice to write it so that you don't forget that in other languages

//to print this on the terminal we can use 
console.log(a, b, c, d); //outputs 10 100000000000 waleed true


//other data types and different operators

var myArray = [1, 2, 3, 'ahmed']; //this is an array. it is an iterable and can be iterated upon using loops
console.log("The value of the third element of array is ", myArray[2]); //outputs 3. Single elements in the array can be accessed by using indices
//there are many methods that you can apply to an array
//for example
console.log("The length of the array is ", myArray.length); //outputs 4
console.log("The index of the element 'ahmed' is ", myArray.indexOf('ahmed')); //outputs 3
//there is another operator called spread operator which can be used to spread an array
var myArray2 = [...myArray, 90, 100]; //this is the spread operator
console.log("the usage of ...operator does this", myArray2)
console.log("the pop function returns ", myArray2.pop()); //function to remove element of array
var myArray3 = [1, 2, 3, 4, 5]
    //to get only the array containing 2 and 3 without modifying original array we can
console.log("using slice gives us ", myArray3.slice(1, 3));
console.log("the original array after slice is ", myArray3);

//to remove 2 through 4 from the array we can use splice but it will modify the original array
console.log("using splice gives us ", myArray3.splice(1, 3));
console.log("the original array after splice is ", myArray3);


//there is another data structure to store unique collection of data which is called set
//a set uses hash tables to access the elements which means it is faster than array
var mySet = new Set();
mySet.add("a");
mySet.add(2)
console.log("the number of elments in the set is ", mySet.size);
console.log("the set looks like this ", mySet);





//in javascript everything is an object except primitive data types
var person = { firstName: "Waleed", lastName: "Atif", age: 22, married: false };
//this is an object. it is a non iterable data type. it is used to store key value pairs
console.log("getting the first name of the person obj", person.firstName); //outputs Waleed
console.log("Getting all the entries of the object", Object.entries(person)); //returns a list of all the key-value pairs which can be iterated upon
console.log("Getting all the keys of object", Object.keys(person)); //returns all the keys of this object



//we also have Maps in js which are similar to objects but their keys can be of any type and they can be iterated in the order in which the entries were added
var myMap = new Map();
myMap.set("name", "Waleed");
myMap.set(1, "one");
myMap.set(true, "true");
//following code shows difference between var and let and const

//when we use var the variable is hoisted and initialized but with undefined value
{
    console.log("using var for hoisting", var0);
    var var0 = 2;
    var0 = 3;
    console.log("The value of variable created using var after the updation is ", var0);
    var var0 = 60; //redeclaration when using var is possible

}

//when we use let the variable is hoisted but not initialized which means that
//it cannot be used before it is delared
//var is function scoped
{
    console.log("using let for hoisting", var1);
    let var1 = 10;
    var1 = 20;
    console.log("The value of variable created using let after the updation is ", var1);
    // let var1 = 60; //redeclaration when using let is not possible

}
//let is block scoped
const myConstant = 10;
// myConstant = 20; //changing the const is not possible