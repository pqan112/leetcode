type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {

    let num = init;

    return {
        increment: () => {
            num++
            return num
        },
        decrement: () => {
            num--
            return num
        },
        reset: () => { return num = init }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */