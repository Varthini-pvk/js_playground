//Block Scope
let message = "Hello";

if (true) {
  let message = "Hi";
  console.log(message); // Hi
}

console.log(message); // Hello

//Variable Hoisting
console.log(num); // undefined
// console.log(num1); //ReferenceError: Cannot access 'num1' before initialization
var num = 42;
let num1 = 100; 


//Variable Shadowing
let color = "red";

function paint() {
  let color = "blue";
  console.log(color); // blue
}

paint();
console.log(color); // red


// Function Scope
function test() {
  var hidden = "I am secret";
}

console.log(hidden); // ReferenceError: hidden is not defined


//Block Scope in loop

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 1000);
}