// function checkEvenOrOdd(num)
// {
//     if (num %2 == 0)
//     {
//         return "Even"

//     }
//     else
//     {
//         return "Odd"
//     }



// }

let result = checkEvenOrOdd(8);
console.log(result);


//Using bitwise operators
function checkEvenOrOdd(num)
{
if ((num & 1) == 0)
{
        return "Even"

    }
    else
    {
        return "Odd"
    }
}
