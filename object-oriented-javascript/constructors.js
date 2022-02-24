/* Constructors - this is another type of function that can create an object
-An important factor is that a constructor function must start with an uppercase letter
NOTE: In JavaScript, we do not have the concept of Classes.


*/
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('More drawing is underway!');
        }
    };
}

// Due to the mass-production factory function, we can now make more circles like the one below and allocate a new radius as its argument
const circleTwo = createCircle(1);


// Constructor Function 
// This function will imitate the constructor function above
function Circle(radius) {
    // We declare this statement after defining everything, and the object will be displayed into the console with its two key-value pairs (properties)
    console.log('this', this);

    // The 'this' keyword is a reference to the object that is executing this piece of code
    // We then use the dot notation to set various properties on that object
    this.radius = radius; // we set the radius property to have the value of the radius argument
    this.draw = function () {
        console.log('Draw some more!');
    }
}
// We use the 'New' operator to call the circle function and pass one as the argument
// The 'new' operator creates an empty object and it will set 'this' to point to that object because by default, 'this' points to the global object 
// If the function above will be running inside the broser, the global object will be the window object

const anotherCircle = new Circle(1);



// Factory Function vs Constructor Functions:
/* 
-It depends on the company and developers we work with and their preferences.
-Developers who use C# and Java prefer using the Constructor Function syntax, because for them it looks like creating an instance of a class.
-Other developers prefer the Factory Function approach, because of certain developers forgetting the 'new' operator.
-It is best to know BOTH approaches, because we never know what team we will be working with in the future!  

*/
