"use strict";
/***************************************************************
 * https://www.interviewbit.com/javascript-interview-questions/
 *
* 1. What are the different data types present in javascript?
***************************************************************** */
/*
//1. Primitive types

console.log(typeof "John Doe") // Returns "string"
console.log(typeof 3.14) // Returns "number"
console.log(typeof true) // Returns "boolean"
console.log(typeof 234567890123456789012345678901234567890n) // Returns bigint
console.log(typeof undefined) // Returns "undefined"
console.log(typeof null) // Returns "object" (kind of a bug in JavaScript)
console.log(typeof Symbol('symbol')) // Returns Symbol

//2. Non-primitive types
//Note- It is important to remember that any data type that is not a primitive data type, is of Object type in javascript.

var obj1 = {
    x:  43,
    y:  "Hello world!",
    z: function(){
        return this.x;
    }
}
var array1 = [5, "Hello", true, 4.1];

console.log(obj1)
console.log(array1)
*/
/***************************************************************
 *
 * 2. Explain Hoisting in javascript.
 * Hoisting is the default behaviour of javascript
 * where all the variable and function declarations are moved on top.
 ***************************************************************** */
/*
hoistedVariable = 3;
console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized
var hoistedVariable;


hoistedFunction();  // Outputs " Hello world! " even when the function is declared after calling
function hoistedFunction(){
    console.log(" hoistedFunction()");
}

// Hoisting takes place in the local scope as well
function doSomething(){
    x = 33;
    console.log(x  + " doSomething() ");
    var x;
}
doSomething();

//Note - Variable initializations are not hoisted, only variable declarations are hoisted:
var xh;
console.log("xh = "+xh); // Outputs "undefined" since the initialization of "x" is not hoisted
xh = 23;


xh1 = 23; // Gives an error since 'x' is not declared
console.log("xh1-> "+xh1);
var xh1;

/*
/***************************************************************
 *
 * 3. Difference between var and let keyword in javascript.
var declarations are function scoped.
let declarations are block scoped.
const declarations are block scoped.
 ***************************************************************** */


//Function Scope: Visibility is limited to the function.
/*
var v1;
 function myFn() {

     var v1 = 10; 

     console.log(v1); //prints 10

 } 
myFn();
 console.log(v1); // ReferenceError: v1 is not defined

*/

//Block Scope: Visibility is limited to the block of code
/*
 if (true) { 

     let l1 = 10; 

     console.log(l1); //prints 10

 } 

 console.log(l1); // ReferenceError: l1 is not defined
*/


//  Redefining and Redeclaring feature
//A variable declared using ‘var’ can be redefined and even redeclared anywhere throughout its scope.
/*
var x = 30;
console.log(x); //prints 30
x = "Hi"; //redefining or re-assigning (works without any error)
console.log(x); //prints "Hi"
 
var y = 10;
console.log(y); //prints 10
var y = "Hello"; //Redeclaring (works without any error)
console.log(y) //Prints "Hello"
*/


//A variable declared using ‘let’ can be redefined within its scope but cannot be re-declared within its scope.

/*
let x = 11;
console.log(x); //prints 11
x = "IB"; //works without any error
console.log(x); //prints "IB"

let y = 12;
console.log(y); //prints 12
let y = "Scaler"; // error: Identifier y has already been declared

let z = 13;
if(true){
   let z = "Fun"; //works without any error as scope is different.
   console.log(z) //prints "Fun"
}
console.log(z) //prints 13
*/

//A variable declared using ‘const’ cannot be redefined or re-declared within its scope.
/*
const x = 10;
console.log(x); //prints 10
x = 11; // error: Assignment to constant variable.

const y;
//y = 2; //error

const z = 12;
console.log(z) //prints 12
const z = 13; // error: Identifier 'z' has already been declared
//Every const declaration must be initialized at the time of declaration.
*/

//Hoisting is a mechanism where variables and function declarations are moved to the top of their scope before code execution.

/*
console.log(x); // prints undefined
var x = 100;
console.log(x); //prints 100
*/
 
//Variables declared using var are hoisted to the top of their scope and initialized with a value of undefined(special type).
//Variables declared using let are hoisted to the top of their scope but are not initialized with any value.
//Variables declared using const are hoisted to the top of their scope but are not initialized with any value.
 
/*
console.log(y); //Reference error
let y = 200;
console.log(y); //prints 200
*/

/*
console.log(z); //Reference error
const z = 300;
console.log(z); //prints 300
*/


//Predict the output of the following code:

var a = 10;
{
    var a = -10;
}
let b = a;
{
    let b = -20;
}

console.log(b)