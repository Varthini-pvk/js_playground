// Swap the values of a and b without using a third variable
let a = 5;
let b = 10;

// Your code here
a = a + b;
b = a - b;
a = a - b;

console.log(a); // 10
console.log(b); // 5