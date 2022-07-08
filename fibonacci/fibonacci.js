// Fibonacci sequence
// 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987

let first = 1;
let second = 1;

const fibonacci = () => {
    const next = first + second;
    first = second;
    second = next;
    return next;
}

// Print the first 10 numbers of the Fibonacci sequence
for(let i = 0; i < 10; i++) {
    console.log(fibonacci());
}
