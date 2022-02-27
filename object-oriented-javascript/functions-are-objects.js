// Functions are Objects - an example is the 'new Circle' we made. That is a Function, because we can access its properties and objects using the dot notation. E.g. Circle.name OR Circle.length.
// When we declare a function using the 'function' built-in constructor syntax, the JavaScript engine will use the constructor to create this object.

function Circle(radius) {


    this.radius = radius;
    this.draw = function () {
        console.log('Draw some more!');
    }
}

// // When we declare a function internally as an argument, we use back ticks  
// // Then, we can call Circle1 just like calling the function
// const Circle1 = new Function('radius', `
// this.radius = radius; 
// this.draw = function () {
//     console.log('Draw some more!');
// }`);


// // This is how we can create a new object using the function Circle1 and pass the number 1 as the radius
// const circle = new Circle(1);


// These are a couple of methods that are available within a function

// this method calls a function, which will pass an empty object hat uses the 'this' keyword to reference the object that we pass in the empty curly braces 
// Afterwards, we add our arguments explicitly next to the empty curly braces. We pass them using numbers for each argument. E.g. 1 for 1 argument, 2 for the second and so on...
Circle.call({}, 1);

// This 'apply' method calls a function just like the 'call' method, but instead of passing arguments explicitly, they will be passed into an array 
// This method is useful when we have an array somewhere in our application and we want to pass an array as the second argument to the 'apply' method
Circle.apply({}, [1, 2, 3]);

// When we use the 'new' operator, it will internally create a new object on line 30 and pass them as the first argument to the call method and then this object will determine the context for the 'this' keyword on lines 7 and 8 
const anotherCircle = new Circle(1);