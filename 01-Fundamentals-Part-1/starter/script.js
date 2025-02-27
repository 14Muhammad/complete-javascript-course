
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

/*
var a = 10;
{
    var a = -10;
}
let b = a;
{
    let b = -20;
}

console.log(b)
*/


/***************************************************************
 *
 * 4. Explain Implicit Type Coercion in javascript.
 ***************************************************************** */
/*

var x = 3;
var y = "3";
var z = x + y;
console.log(z);
*/


//All values except false, 0, 0n, -0, “”, null, undefined, and NaN are truthy values.

/*
var x = 0;
var y = NaN;

if(x) { console.log(x) }   // The code inside this block will not run since the value of x is 0(Falsy)

if(y) { console.log(y) }    // The code inside this block will run since the value of y is 23 (Truthy)
*/

/*
* Logical operators:
Logical operators in javascript, unlike operators in other programming languages, do not return true or false.
* They always return one of the operands.

OR ( | | ) operator - If the first value is truthy, then the first value is returned. Otherwise, always the second value gets returned.

AND ( && ) operator - If both the values are truthy, always the second value is returned. If the first value is falsy then the first value is returned or if the second value is falsy then the second value is returned.
*
* */

/*var x = 220;
var y = "Hello";
var z = undefined;

console.log(x || y); // Returns 220 since the first value is truthy
console.log(x || z);  // Returns 220 since the first value is truthy

console.log(x && y);    // Returns "Hello" since both the values are truthy

console.log(z && z);   // Returns undefined since the second value is falsy

console.log(z && y);

if( x && y ){
    console.log("Code runs" ); // This block runs because x && y returns "Hello" (Truthy)
}

if( x || z ){
    console.log("Code runs");  // This block runs because x || y returns 220(Truthy)
}*/


/***************************************************************
 *
 * 5. What is NaN property in JavaScript?
 * NaN property represents the “Not-a-Number” value. It indicates a value that is not a legal number.
 *
 * typeof of NaN will return a Number.
 *
 * To check if a value is NaN, we use the isNaN() function,
 *
 * Note- isNaN() function converts the given value to a Number type, and then equates to NaN.
 ***************************************************************** */
/*
console.log(isNaN("Hello"))
console.log(isNaN(345))
console.log(isNaN('1'))
console.log(isNaN(true))
console.log(isNaN(false))
console.log(isNaN(undefined))
*/

/***************************************************************
 *
 * 6. Explain passed by value and passed by reference.
 * In JavaScript, primitive data types are passed by value and non-primitive data types are passed by reference.
 ***************************************************************** */
/*

var x = 2;
//In the above example, we created a variable x and assigned it a value of “2”.
// In the background, the “=” (assign operator) allocates some space in the memory, stores the value “2” and returns the location of the allocated memory space.
// Therefore, the variable x in the above code points to the location of the memory space instead of pointing to the value 2 directly.

var y = 234;
var z = y;
//In the above example, the assign operator knows that the value assigned to y is a primitive type (number type in this case), so when the second line code executes, where the value of y is assigned to z, the assign operator takes the value of y (234) and allocates a new space in the memory and returns the address. Therefore, variable z is not pointing to the location of variable y, instead, it is pointing to a new location in the memory.

//var y = #8454; // y pointing to address of the value 234

var z = y;

//var z = #5411; // z pointing to a completely new address of the value 234

// Changing the value of y
y = 23;
console.log(z);  // Returns 234, since z points to a new address in the memory so changes in y will not effect z
*/

/*
var obj = { name: "Vivek", surname: "Bisht" };
var obj2 = obj;
//In the above example, the assign operator directly passes the location of the variable obj to the variable obj2.
// In other words, the reference of the variable obj is passed to the variable obj2.

//var obj = #8711;  // obj pointing to address of { name: "Vivek", surname: "Bisht" }
var obj2 = obj;

//var obj2 = #8711; // obj2 pointing to the same address

// changing the value of obj1

obj.name = "Akki";
console.log(obj2);

// Returns {name:"Akki", surname:"Bisht"} since both the variables are pointing to the same address.
//From the above example, we can see that while passing non-primitive data types, the assign operator directly passes the address (reference).
//  Therefore, non-primitive data types are always passed by reference.
*/
/***************************************************************
 *
 * 7. What is an Immediately Invoked Function in JavaScript?
 * An Immediately Invoked Function ( known as IIFE and pronounced as IIFY) is a function that runs as soon as it is defined.
 ***************************************************************** */

/*
(function (){
    console.log("IIFE means Immediately Invoked Function Expression")
})();
*/
/***************************************************************
 *
 * 8. strict mode in javascript and characteristics of javascript strict-mode
 ***************************************************************** */

/*

"use strict";
(function NaN()
{
/!*    var y = 3.14;
    console.log(y);
    let eval = 3.14;
    console.log(eval);
    *!/

/!*    let x = 222;
    console.log(x);
    delete x;
    console.log(x);
    *!/
})();

*/
/***************************************************************
 *
 * 9. Explain Higher Order Functions in javascript.
 * Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.
 *
 * Higher-order functions are a result of functions being first-class citizens in javascript.
 ***************************************************************** */

/*
function higherOrder(fn) {
    fn();
}

higherOrder(function() { console.log("Hello world") });


function higherOrder2() {
    return function() {
        return "Do something";
    }
}
var x = higherOrder2();
console.log(x());   // Returns "Do something"
*/

/***************************************************************
 *
 * 10. The “this” keyword refers to the object that the function is a property of.
 *
 * The value of the “this” keyword will always depend on the object that is invoking the function.
 ***************************************************************** */

/*

function doSomething() {
    console.log(this);
}

doSomething();

*/

/*
var obj = {
    name:  "vivek",
    getName: function(){
        return this.name;
    }
}

console.log(obj.getName());
*/


/*
var obj = {
    name:  "vivek",
    getName: function(){
        console.log(this.name);
    }
}

var getName = obj.getName;
var obj2 = {name:"akshay", getName };
obj2.getName();
*/
/*
var obj1 = {
    address : "Mumbai,India",
    getAddress: function(){
        console.log(this.address);
    }
}

var getAddress = obj1.getAddress;
var obj2 = {name:"akshay"};
obj2.getAddress();
*/

/***************************************************************
 *
 * 11.  Self Invoking Functions?
 ***************************************************************** */
/*(function () {
    document.getElementsByTagName("h1")[0].innerHTML = "Hi! I am calling myself";
})();*/
/***************************************************************
 *
 * 12.  call(), apply() and, bind() methods
 ***************************************************************** */
//call():
//It’s a predefined method in javascript.
// This method invokes a method (function) by specifying the owner object.

/*
function sayHello(){
    return "Hello " + this.name;
}
var obj = {name: "Sandy"};
console.log(sayHello.call(obj));
*/

//call() method allows an object to use the method (function) of another object.
/*
var person = {
    age: 23,
    getAge: function (){
        return this.age;
    }
}
var person2 = {
    age: 54
}
console.log(person.getAge.call(person2));
*/

//call() accepts arguments:
/*
function saySomething(msg){
    return this.name + " is " + msg;
}
person4 = {
    name: "ali"
}
console.log(saySomething.call(person4,"Good"));
*/
//apply()
//The apply method is similar to the call() method. The only difference is that,
// call() method takes arguments separately whereas, apply() method takes arguments as an array.

/*
function saySomething(message){
    return this.name + " is " + message;
}
var person4 = {name:  "John"};
console.log(saySomething.apply(person4, ["awesome"]));
*/
//bind():
//This method returns a new function, where the value of “this” keyword will be bound to the owner object, which is provided as a parameter.
//  Example with arguments:

/*
var bikeDetails = {
    displayDetails: function(registrationNumber,brandName){
        return this.name+ " , "+ "bike details: "+ registrationNumber + " , " + brandName;
    }
}

var person1 = {name:  "Vivek"};

var detailsOfPerson1 = bikeDetails.displayDetails.bind(person1, "TS0122", "Bullet");

// Binds the displayDetails function to the person1 object


console.log(detailsOfPerson1());
//Returns Vivek, bike details: TS0122, Bullet

*/
/***************************************************************
 *
 * 13.  difference between exec () and test () methods in javascript
 *
 * test () and exec () are RegExp expression methods used in javascript.
 * We'll use exec () to search a string for a specific pattern, and if it finds it, it'll return the pattern directly; else, it'll return an 'empty' result.
 * We will use a test () to find a string for a specific pattern. It will return the Boolean value 'true' on finding the given text otherwise, it will return 'false'.
 ***************************************************************** */

/*
(function findMatch() {
    let text = "The best things in life are free";
    let result = /ee/.exec(text);
    let result2 = /ee/.test(text);
    console.log(result);
    console.log(result2);
})();
*/

/***************************************************************
 *
 * 14.  What is currying in JavaScript?
 * Currying is an advanced technique to transform a function of arguments n, to n functions of one or fewer arguments.
 ***************************************************************** */
/*
function add (a) {
    return function(b){
	return function (c){
        	return a + b + c;
	}
    }
}

console.log(add(3)(4)(3));


function multiply(a,b){
	return a*b;
}

function currying(fn){
	return function(a){
		return function(b){
			return fn(a,b);
		}
	}
}

var curriedMultiply = currying(multiply);
console.log(multiply(4,3));
console.log(curriedMultiply(4)(3));
*/
/*


//another example

function product(a,b){
	return a*b;
}
function add(a,b){
	return a+b;
}
function divide(a,b){
	return a/b;
}
function sub(a,b){
	return a-b;
}
function op(operation){
	return function(a){
		return function(b){
			return operation(a,b);
		}
	}
}

console.log("->" + op(product)(100)(2));
console.log("->" + op(add)(100)(2));
console.log("->" + op(divide)(100)(2));
console.log("->" + op(sub)(100)(2));
*/


/***************************************************************
 *
 * 15.  Scope and Scope Chain in javascript.
Scope in JS determines the accessibility of variables and functions at various parts of one’s code.

In general terms, the scope will let us know at a given part of code, what are variables and functions we can or cannot access.

There are three types of scopes in JS:

Global Scope
Local or Function Scope
Block Scope
Global Scope: Variables or functions declared in the global namespace have global scope, which means all the variables and functions having global scope can be accessed from anywhere inside the code.
 ***************************************************************** */
/*
var globalVariable = "Hello world";

function sendMessage(){
  return globalVariable; // can access globalVariable since it's written in global space
}
function sendMessage2(){
  return sendMessage(); // Can access sendMessage function since it's written in global space
}
console.log(sendMessage2());  // Returns “Hello world”
*/
//Function Scope: Any variables or functions declared inside a function have local/function scope, which means that all the variables and functions declared inside a function, //can be accessed from within the function and not outside of it.
/*
function awesomeFunction(){
  var a = 2;

  var multiplyBy2 = function(){
    console.log(a*2); // Can access variable "a" since a and multiplyBy2 both are written inside the same function
  }
}
console.log(a); // Throws reference error since a is written in local scope and cannot be accessed outside

multiplyBy2(); // Throws reference error since multiplyBy2 is written in local scope

*/

//Block Scope: Block scope is related to the variables declared using let and const. Variables declared with var do not have block scope. Block scope tells us that any //variable declared inside a block { }, can be accessed only inside that block and cannot be accessed outside of it.
/*
{
  let x = 45;
}

console.log(x); // Gives reference error since x cannot be accessed outside of the block

for(let i=0; i<2; i++){
  // do something
}

console.log(i); // Gives reference error since i cannot be accessed outside of the for loop block
*/


//Scope Chain: JavaScript engine also uses Scope to find variables. Let’s understand that using an example:
/*
var y = 24;

function favFunction(){
  var x = 667;
  var anotherFavFunction = function(){
    console.log(x); // Does not find x inside anotherFavFunction, so looks for variable inside favFunction, outputs 667
  }

  var yetAnotherFavFunction = function(){
    console.log(y); // Does not find y inside yetAnotherFavFunction, so looks for variable inside favFunction and does not find it, so looks for variable in global scope, finds it and outputs 24
  }

  anotherFavFunction();
  yetAnotherFavFunction();
}
favFunction();
*/

//As you can see in the code above, if the javascript engine does not find the variable in local scope, it tries to check for the variable in the outer scope. If the variable //does not exist in the outer scope, it tries to find the variable in the global scope.
//If the variable is not found in the global space as well, a reference error is thrown.

/***************************************************************
 *
 * 15.  Recursion in JS
 ***************************************************************** */
 /*
 function sum(n){
	return n<=0?0:n+sum(n-1);
 }
 console.log(sum(6));
 console.log(arrSum([1,3,6,8]));

 function arrSum(arr){
	return arr.length === 1 ? arr[0] : arr.pop() + arrSum(arr);
 }
 */
 /***************************************************************
 *
 * 15.  Memoization in JS
 ***************************************************************** */

/*
 function memoFunc(){
	 var cache = {};
	 return function(n){
		if(n in cache){
			console.log("cached Value");
			return cache[n];
		}
		else {
			cache[n] = n + 256;
			return cache[n];
			}
	 }
 }

 var memo1 = memoFunc();

 console.log(memo1(20));
 console.log(memo1(34));
 console.log(memo1(35));
 console.log(memo1(20));
 console.log(memo1(35));
*/



/***************************************************************
 *
 * 16.Closures in JavaScript.
 * Closures are an ability of a function to remember the variables and functions that are declared in its outer scope.
 *
 *
 * ***************************************************************** */
/*

var person = function (x){
    var name = x;
    this.getName = function (){
        return name;
    }
}

var p1 = new person("ALII");
console.log(p1.getName());

function randomFunc(){
    var obj1 = {name:"Vivian", age:45};

    return function(){
        console.log(obj1.name + " is "+ "awesome"); // Has access to obj1 even when the randomFunc function is executed

    }
}
var initialiseClosure = randomFunc(); // Returns a function

initialiseClosure();
*/
//Therefore randomFunc(), instead of destroying the value of obj1 after execution, saves the value in the memory for further reference.
// This is the reason why the returning function is able to use the variable declared in the outer scope even after the function is already executed.
// This ability of a function to store a variable for further reference even after it is executed is called Closure.

/***************************************************************
 *
 * 17. constructor function in javascript
 * Constructor functions are used to create objects in javascript.
 * When do we use constructor functions?
 * If we want to create multiple objects having similar properties and methods, constructor functions are used.
 * Note- The name of a constructor function should always be written in Pascal Notation: every word should start with a capital letter.
 * ***************************************************************** */
/*
function Person(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}

var p1 = new Person("Ali", 32, "Male");
var p2 = new Person("Sadia", 33, "Female");

console.log(p1);
console.log(p2);
console.log(p2.name.charAt(3));
console.log(p2.name);

console.log(window.location)
console.log(window.document)
console.log(window.history)
console.log(window)*/

/***************************************************************
/***************************************************************
/***************************************************************
 *
 * 18. Arrow functions in JS
 * Arrow functions were introduced in the ES6 version of javascript.
 * They provide us with a new and shorter syntax for declaring functions. Arrow functions can only be used as a function expression.
 *
 * Arrow functions are declared without the function keyword. If there is only one returning expression
 * then we don’t need to use the return keyword as well in an arrow function as shown in the example above.
 * Also, for functions having just one line of code, curly braces { } can be omitted.
 * ***************************************************************
 * ***************************************************************
 * ***************************************************************/
/*
// Traditional Function Expression
var add = function(a,b){
    return a + b;
}

var addArrow = (a,b) => a+b;
console.log(addArrow(2,3));
// Traditional function expression
var multiplyBy2 = function(num){
    return num * 2;
}
// Arrow function expression
var arrowMultiplyBy2 = num => num * 2;
//If the function takes in only one argument, then the parenthesis () around the parameter can be omitted as shown in the code above.
*/
/*
var obj1 = {
    name: "Ali",
    valueOfThis: function(){
        return this;
    }
}
var obj2 = {
    valueOfThis: ()=>{
        return this;
    }
}

console.log(obj1.valueOfThis()); // Will return the object obj1
console.log(obj2.valueOfThis()); // Will return window/global object
*/

//The biggest difference between the traditional function expression and the arrow function is the handling of this keyword.
// By general definition, this keyword always refers to the object that is calling the function.
// As you can see in the code above, obj1.valueOfThis() returns obj1 since this keyword refers to the object calling the function.
//
// In the arrow functions, there is no binding of this keyword.
// This keyword inside an arrow function does not refer to the object calling it.
// It rather inherits its value from the parent scope which is the window object in this case.
// Therefore, in the code above, obj2.valueOfThis() returns the window object.

/***************************************************************
 *
 * 19. declaring variables using var, let and const.
 * ***************************************************************** */


/*
var variable1 = 23;

let variable2 = 89;

function catchValues(){
    console.log(variable1);
    console.log(variable2);

// Both the variables can be accessed anywhere since they are declared in the global scope
}

window.variable1; // Returns the value 23

window.variable2; // Returns undefined

{
    var variable3 = [1, 2, 3, 4];
}

console.log(variable3); // Outputs [1,2,3,4]

{
    let variable4 = [6, 55, -1, 2];
}

console.log(variable4); // Throws error

for(let i = 0; i < 2; i++){
    //Do something
}

console.log(i); // Throws error

for(var j = 0; j < 2; i++){
    // Do something
}

console.log(j) // Outputs 2
*/

/*
const x = {name:"Vivek"};

x = {address: "India"}; // Throws an error

x.name = "Nikhil"; // No error is thrown

const y = 23;

y = 44; // Throws an error
*/

/***************************************************************
 *
 * 19. rest parameter and spread operator
 * Both rest parameter and spread operator were introduced in the ES6 version of javascript.
 *
 * Rest parameter ( … ):
 *
 * It provides an improved way of handling the parameters of a function.
 * Using the rest parameter syntax, we can create functions that can take a variable number of arguments.
 * Any number of arguments will be converted into an array using the rest parameter.
 * It also helps in extracting all or some parts of the arguments.
 * Rest parameters can be used by applying three dots (...) before the parameters.
 * **Note- Rest parameter should always be used at the last parameter of a function:
 * ***************************************************************** */
/*
function addAllArgs(...args){
    let sum = 0;
    let i = 0;
    while(i<args.length){
        sum += args[i];
        i++;
    }
    return sum;
}

console.log(addAllArgs(1,2,3,1,1,1));

// Incorrect way to use rest parameter
function randomFunc(a,...args,c){
//Do something
}

// Correct way to use rest parameter
function randomFunc2(a,b,...args){
//Do something
}
*/
//Spread operator (…): Although the syntax of the spread operator is exactly the same as the rest parameter,
// the spread operator is used to spreading an array, and object literals.
// We also use spread operators where one or more arguments are expected in a function call.
/*
function addFourNumbers(num1,num2,num3,num4){
    return num1 + num2 + num3 + num4;
}

let fourNumbers = [5, 6, 7, 8];


console.log(addFourNumbers(...fourNumbers));
// Spreads [5,6,7,8] as 5,6,7,8

let array1 = [3, 4, 5, 6];
let clonedArray1 = [...array1];
//let clonedArray1 = array1;
// Spreads the array into 3,4,5,6
console.log(clonedArray1); // Outputs [3,4,5,6]
let obj1 = {x:'Hello', y:'Bye'};
let clonedObj1 = {...obj1}; // Spreads and clones obj1
console.log(obj1);

let obj2 = {z:'Yes', a:'No'};
let mergedObj = {...obj1, ...obj2}; // Spreads both the objects and merges it
console.log(mergedObj);
// Outputs {x:'Hello', y:'Bye',z:'Yes',a:'No'};
*/
// Note- Key differences between rest parameter and spread operator:
// Rest parameter is used to take a variable number of arguments and turns them into an array while the spread operator takes an array or an object and spreads it
// Rest parameter is used in function declaration whereas the spread operator is used in function calls.
/***************************************************************
 *
 * 20. use of promises in javascript
 Promises are used to handle asynchronous operations in javascript.

Before promises, callbacks were used to handle asynchronous operations. But due to the limited functionality of callbacks, 
using multiple callbacks to handle asynchronous code can lead to unmanageable code.

Promise object has four states -

Pending - Initial state of promise. This state represents that the promise has neither been fulfilled nor been rejected, 
it is in the pending state.
Fulfilled - This state represents that the promise has been fulfilled, meaning the async operation is completed.
Rejected - This state represents that the promise has been rejected for some reason, meaning the async operation has failed.
Settled - This state represents that the promise has been either rejected or fulfilled.
A promise is created using the Promise constructor which takes in a callback function with two parameters, 
resolve and reject respectively.

resolve is a function that will be called when the async operation has been successfully completed.

reject is a function that will be called, when the async operation fails or if some error occurs.

Example of a promise:

Promises are used to handle asynchronous operations like server requests, 
for ease of understanding, we are using an operation to calculate the sum of three elements.

In the function below, we are returning a promise inside a function:


 * ***************************************************************** */
 /*
 function sumOfThreeElements(...args){
	 return new Promise((resolve,reject)=>{
		 if(args.length>3){
			reject("Only Three Elements or Less are Allowed");
		 }
		 else{
			 let sum =0;
			 var i=0;
			 while(i<args.length){
				 sum += args[i];
				 i++;
			 }
			 resolve("Sum: " + sum);
		 }
	 });
	 
 }
 //In the code above, we are calculating the sum of three elements, if the length of the elements array is more than 3, 
 //a promise is rejected, or else the promise is resolved and the sum is returned.
//We can consume any promise by attaching then() and catch() methods to the consumer.
//then() method is used to access the result when the promise is fulfilled.
//catch() method is used to access the result/error when the promise is rejected. 
//In the code below, we are consuming the promise:

 sumOfThreeElements(4,1,300)
 .then(result=>console.info(result))
 .catch(e=>console.error(e));
 */
 
 
 /***************************************************************
 *
 * 21. classes in javascript
Introduced in the ES6 version, classes are nothing but syntactic sugars for constructor functions. They provide a new way of declaring constructor functions in javascript.  Below are the examples of how classes are declared and used:

 * ***************************************************************** */

/*
// Before ES6 version, using constructor functions
function Student(name,rollNumber,grade,section){
  this.name = name;
  this.rollNumber = rollNumber;
  this.grade = grade;
  this.section = section;
}

// Way to add methods to a constructor function
Student.prototype.getDetails = function(){
  return `Name: ${this.name}, Roll no: ${this.rollNumber}, Grade: ${this.grade}, Section:${this.section}`;
}


let student1 = new Student("Vivek", 354, "6th", "A");
console.log(student1.getDetails());
// Returns Name: Vivek, Roll no:354, Grade: 6th, Section:A

*/

// ES6 version classes
/*
class Student{
	constructor(name, rollNumber, grade, section){
		this.name = name;
		this.rollNumber = rollNumber;
		this.grade = grade;
		this.section = section;
	}
	
	// Methods can be directly added inside the class
	getDetails(){
		return `Name: ${this.name}, Roll Number: ${this.rollNumber}, Grade:${this.grade}, Section:${this.section}`;
	}
}

let student2 = new Student("Ali", 333, "12th", "C");
console.log(student2.getDetails());
*/
//Key points to remember about classes:

//Unlike functions, classes are not hoisted. A class cannot be used before it is declared.
//A class can inherit properties and methods from other classes by using the extend keyword.
//All the syntaxes inside the class must follow the strict mode(‘use strict’) of javascript. An error will be thrown if the strict mode rules are not followed.

 /***************************************************************
 *
 * 21. generator functions
Introduced in the ES6 version, generator functions are a special class of functions.

They can be stopped midway and then continue from where they had stopped.

Generator functions are declared with the function* keyword instead of the normal function keyword:

function* genFunc(){
  // Perform operation
}
In the case of generator functions, when called, they do not execute the code, instead, they return a generator object. 
This generator object handles the execution.
 * ***************************************************************** */
 /*
 function* genFunc(){
  yield 3;
  yield 4;
}
let fun = genFunc();
console.log(fun); // Returns Object [Generator] {}
console.log(fun.next()); // Returns {value: 3, done: false}
console.log(fun.next()); // Returns {value: 4, done: false}
console.log(fun.next()); // Returns {value: undefined, done: true}
*/

/*
The generator object consists of a method called next(), this method when called, executes the code until the nearest yield statement, and returns the yield value.

For example, if we run the next() method on the above code:

genFunc().next(); // Returns {value: 3, done:false}
As one can see the next method returns an object consisting of a value and done properties.  Value property represents the yielded value. Done property tells us whether the function code is finished or not. (Returns true if finished).

Generator functions are used to return iterators. Let’s see an example where an iterator is returned:

*/
/*
function* iteratorFunc(){
	let count=0;
	for(let i=0;i<2;i++){
		count++;
		yield i;
	}
	return count;
}
let iterator = iteratorFunc();
console.log(iterator.next());// {value:0,done:false}
console.log(iterator.next());// {value:1,done:false}
console.log(iterator.next());// {value:2,done:true}

*/
//As you can see in the code above, the last line returns done:true, 
//since the code reaches the return statement.
