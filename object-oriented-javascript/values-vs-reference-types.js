/* Value vs Reference Types:

-In JavaScript, we have Value Types (that are also called Primitive Types) and Reference Types
-Value Types: Number, String, Boolean, Symbol, undefined and null.
-Reference Types: Object, Functions and Arrays.
-Arrays can also be Objects, not just Functions.

*/

// There are differences between how Primitive Types behave and how Objects behave
// These two primitive data types are independent variables
// When we work with Primitive Data Types, the value is stored inside the variable and whenever a new variable has the first variable as a value, the new variable receives the value of the first variable 
// let x = 10; let y = x;

// This is how we write a reference type
// NOTE: When we use an object, it is not stored in the variable x - that object in stored somehere else in the memory and the address of that memory is stored inside that variable 
// CONCLUSION: Primitives are copied by their values, but Objects are copied by their reference! 
let x = { value: 10 };
let y = x;

// For a reference type, instead of x = 20, we have to specify the key name with the dot notation to reassign a new value
x.value = 20;


// Another example:
// When we call the increase (++) and pass this number variable, its value is copied into the parameter that is local in this function 
// This means that the number++ increment is INDEPENDENT of the variable declaration outside the function
let numVariable = 10;
function increase(numVariable) {
    // Inside, the inrement will give 11
    numVariable++;
}
// Outside, this will remain as 10
increase(numVariable);
console.log(numVariable);


// Same Example, but as object:
// When we log this version of the same program to the console, it will give 11
// We get 11 this time because when we call the increment, the object is passed by its reference
// We are not dealing with 2 independent copies anymore, but with 2 variables that point at the same object we defined below
// NOTE: Any changes we make to this object will be visible to the other variables  
let objVariable = { value: 10 };
function increase(objVariable) {
    objVariable.value++;
}
increase(objVariable);
console.log(objVariable);

