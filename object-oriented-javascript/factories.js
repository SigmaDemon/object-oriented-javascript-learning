/* Factories - these are functions that can mass-produce new objects. E.g. function createCircle() {}
 * Factory Functions are basically any function that is not a class or constructor that returns a new object
 * In JavaScript, any function can return an object.
 * When an object is returned without the new keyword, it is called a Factory Function.
 * 
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
const circleOne = createCircle(1);


// All key-value pairs can be accessed using the dot (.) notation
circle.draw();
