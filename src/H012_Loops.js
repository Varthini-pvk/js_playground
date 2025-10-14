let selectors = ["#username", "#password", "#email"];
// Expected output:
// Filling field: #username
// Filling field: #password
// Filling field: #email


selectors.forEach((selector) => {
    console.log("Filling field:"+ selector);
})

for (const selector of selectors)
{
    console.log("Filling field:"+ selector);
}






let userData = { username: "testUser", password: "12345", role: "admin" };
// Expected output:
// username: testUser
// password: 12345
// role: admin


for(const key in userData)
{
    console.log(key+": "+userData[key])
}
const output = Object.entries(userData)
for(const [key,value] of output)
{
    console.log(key+": "+value)
}


// Use .forEach() to print each element of ["apple", "banana", "orange"] with its index.

// 0: apple
// 1: banana
// 2: orange


const fruits = ["apple", "banana", "orange"]
fruits.forEach((fruit, ind) => {console.log(ind+": "+fruit);});


// map vs forEach

// Given [1, 2, 3, 4],

// Use map to create a new array with each number squared.

// Use forEach to log each squared number but don’t return a new array.

const array = [1,2,3,4]
const squared_array = array.map(number => number*number)

squared_array.forEach(number => {console.log(number)})


// Write a program using do...while that keeps generating random numbers between 1–10 until you get a 7. Print how many tries it took.
// let no;
// while(no != 7)
// {
//     no = Math.floor(Math.random()*10);
//     console.log("generated number:"+no)
// }


let no;
do
{
    no = Math.floor(Math.random()*10);
    console.log("generated number:"+no)
}while(no != 7)



// From [1, 2, 3, 4, 5, 6],

// Print numbers until you hit 4, then stop (break).

// Then write another loop that skips even numbers (continue).


let a = [1, 2, 3, 4, 5, 6];
for(const x of a )
{console.log("array_num:"+x);
    if(x==4)
    {
        break;
    }
}

for(const x of a )
{  if((x%2) == 0)
    {
       continue;
    }
    console.log("array_num:"+x);
    
}

// 
// Challenge: Loop through and print all combinations:

// pgsql
// Copy code
// chrome - admin
// chrome - guest
// firefox - admin
// firefox - guest


let browsers = ["chrome", "firefox"];
let roles = ["admin", "guest"];

browsers.forEach(browser =>
{
    roles.forEach(role =>
    {
        console.log(browser+"-"+role)
    }
    )
}
) 

// You have test case IDs as numbers. Convert them into strings with "TC-" prefix using .map().

// let ids = [101, 102, 103];
// Output: ["TC-101", "TC-102", "TC-103"]

let ids = [101, 102, 103];
let tc_id = ids.map(id =>`TC-${id}` );
tc_id.forEach(tc =>
{
    console.log(tc);
}
)

//Count vowels in "automation"
let word = "automation"
let vowel_count = 0
for(const char of word)
{
    if("aeiou".includes(char))
    vowel_count++;
}
console.log("vowel_count: "+vowel_count)


let steps = ["Open page", "Login", "Logout"];
// // Output:
// // 0: Open page
// // 1: Login
// // 2: Logout


for(const [index,step] of steps.entries())
{
    console.log(index+": "+step)
}