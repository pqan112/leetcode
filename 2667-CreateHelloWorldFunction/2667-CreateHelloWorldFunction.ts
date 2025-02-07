// Closure js
// function createHelloWorld() {
//     return function(...args): string {
//         return "Hello World"
//     };
// };


function createHelloWorld() {
    function print(...args): string {
        return "Hello World"
    };
    return print
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */