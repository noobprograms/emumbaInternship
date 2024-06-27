//for the bindings or the variables that are defined outside any function, the scope is whole program 
//they are called global variables. 
let myVar = 3; //this is a global variable
//for the variables that are defined inside a function, the scope is the function itself.
//they are called local variables.


//consider following example for var and let
//var is function scoped and let is block scoped
let x = 10; //global scope
if (x == 10) {
    let y = 30; //local to block
    var z = 40; //global
}

const squareFunction = function(x) {
        let result = x * x; //this is a local variable
        return result; //the return statment describes the output of a function.
        //a function with no return statment returns undefined
    }
    //testing our square function 
console.log(squareFunction(5));

//functions can be nested inside other functions creating multiple degrees of locality
//all local scopes know about the local scopes that contain them and all these scopes know about the global scope as well
//but the global scope does not know about the local scopes
//this is called the lexical scoping


//we can use declaration notation instead of the above notation to declare a function
console.log(easySquareFunction(6)); //called before the function is declared

function easySquareFunction(x) {
    return x * x;

}
/*
    the advantage of using the declaration notation is that 
    you can call that function even before this is declared
*/
//we can also use the arrow notation to declare a function
const easySquareFunctionArrow = (x) => {
    if (x == undefined) {
        return "enter a number to get the square";
    }
    return x * x;
}


console.log(easySquareFunctionArrow(4, 5, 6, 7)); //we can pass any number of arguments to the function those extra arguments will be ignored 
//we can also pass less number of arguments. If the argument is necessary then that will be assigned a value of undefined in the function body
console.log(easySquareFunctionArrow());
//we can also create default parameter
const easySquareFunctionArrowDefault = (x = 10) => {
    return x * x;
}
console.log("the square function with a default parameter gives, ", easySquareFunctionArrowDefault());
//we can also pass indefinite number of arguments in a function using ... (rest) parameter
function newFunction(...myargs) {
    console.log(myargs);
}
newFunction(1, 2, 3, 4, 4); //this will be treated as a list inside the function

//we can also pass named parameters in a function
function newFunction2({ firstName, lastName }) {
    console.log(firstName, lastName);
}
newFunction2({ firstName: "Waleed", lastName: "Atif" });


//closures
function func1() {
    var x = 10;

    function func2() {
        console.log(x);
    }
    return func2;
}
var func3 = func1(); //this should store the func2 inside the func3 variable
func3(); //this should not print 10 because now func2 is running independently but here the concept of closure comes in.

//place where a function is called, its context needs to be stored somewhere
// so that the normal execution of program must be resumed from there 
// this context is stored inside a call stack, the context is put at the top of the stack 
// and when the function is done executing, the context is removed from the stack
// if two functions keep calling each other than this call stack gives an error 
//this function gives maximum call stack size exceeded error
function chicken() {
    egg();
}

function egg() {
    chicken();
}
console.log(chicken(), "came first")