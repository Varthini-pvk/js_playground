function findFirstNegative(array: number[]):number|undefined
{
    return array.find(num => num<0);
}

function runfindFirstNegative() {

    const dataSet: number[][] = [
        [1,2,3,6,7],
        [2,3,4,-45,66,98],
        [],
        [0],
        [3,-4],
        [-1,1,1,1,1,1]
    ]

    for (const array of dataSet )
    {
        console.log(`First negative element: ${findFirstNegative(array)}`);

    }

    }

   runfindFirstNegative();