// Constructor Property - this property type references the function that was used to construct or create that object
// We can use the constructor property, by typing in the console "anotherCircle.constructor" - the object name, with the dot notation and then the constructor property
// EVERY object has a constructor property and that constructor references the function that was used to create an object 


// When we create an object using the Object literal syntax, internally, the JavaScript engine uses this constructor function 
let x = {};

// JavaScript will translate this x new object into something like this:
// let x = new Object{};

// These are all called 'built-in constructors, such as String and Boolean Literals
// Using these literals is simpler and cleaner than using the constructor
new String(); // '', "" 
new Boolean(); // true, false
new Number(); // 1, 2, 3
