//1. Basic Function Declaration

// Task: Write a function greet(name) that prints "Hello, <name>!".

function greet(name)
{
    console.log(name)
}

greet("varthini")

// 2. Function Expression

// Task: Create a function expression square that returns the square of a number.

const square =  function(number)
{
    return number*number
}

console.log(square(6))


// 3. Arrow Functions

// Challenge: Convert the function in challenge 2 into an arrow function


const square_arrow = (num) => num*num

console.log(square_arrow(7))


// 4. Default Parameters

// Task: Write multiply(a, b = 2) — if b isn’t provided, default it to 2.

function multiply(a,b=2)
{
    return a*b
}

console.log("product1: "+multiply(2))
console.log("product1: "+multiply(2,3))


// 5. Rest Parameters

// Task: Write sumAll(...nums) to sum any number of arguments.

function sum(...nums)
{
    sum = 0;
    nums.forEach(num => sum+=num)
    return sum
}

console.log("sum: "+sum(1,2,4))


// 6. Closure / Function Returning Function

// Task: Write makeMultiplier(x) that returns a function multiplying by x.


function makeMultiplier(x) 
{
    return function insider(y)
    {
        return x*y;
    }
}

let double = makeMultiplier(2)
console.log("product:"+double(6))

const makeMultiplier2 = x => y => x*y

let triple = makeMultiplier(3)
console.log("product2:"+triple(6));

// 7. IIFE (Immediately Invoked Function Expression)

// Task: Write an IIFE that prints "IIFE executed!".


( function()
{
    console.log("IIFE executed!");
})();

(() => {console.log("IIFE executed!");}
)();


// 8. Higher-Order Function

// Task: Write filterArray(arr, conditionFn) that filters array elements using a callback.

function filterArray(arr, conditionFn)
{const result = [];
    for(const ele of arr)
    {
        if(conditionFn(ele))
        {
            result.push(ele);
        }
    }
    return result;
}

console.log("filtered array: "+filterArray([1,2,3,4,5], (num) => num%2 == 0));


// 9. Arrow Function + forEach

// Task: Print each element with index using an arrow function and forEach.


const print = (arr) => {arr.forEach((value, index) =>
    {
        console.log(index+": "+value);
    })}

print([1,2,3,4,89])    

