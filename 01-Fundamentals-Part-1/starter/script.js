"use strict";
/***************************************************************
 * https://www.interviewbit.com/javascript-interview-questions/
 *
* 1. What are the different data types present in javascript?
***************************************************************** */

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

/***************************************************************
 *
 *
 *
 ***************************************************************** */