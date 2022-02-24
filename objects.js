/* Objects - these represent a collection of key-value pairs
-The curly braces {} represent th object literal syntax
-The key-value pairs represent the elements that we add inside the curly braces. E.g. radius: 1.
-We can also have nested objects - an object inside another object. E.g. location {x: 1, y: 1};
-Also, we can add a key-value pair type that resembles a function name as its key and the function as the value. E.g. draw: function() {...}.
NOTE: If a key-value pair is a function, we refer to it as a 'Method'. The other pairs are called 'Properties'.

*/
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function () {
        console.log('We can draw for fun!');
    }
};

// All key-value pairs can be accessed using the dot (.) notation
circle.draw();