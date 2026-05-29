function sumOfArray(array: number[])
{
    return array.reduce((acc,cur)=> {return acc+cur},0);
}

function runArraySum() {

    const dataSet: number[][] = [
        [1,2,3,6,7],
        [2,3,4,45,66,98],
        [],
        [0],
        [3,4],
        [1,1,1,1,1,1]
    ]

    for (const array of dataSet )
    {
        console.log(`Sum of elements : ${sumOfArray(array)}`);

    }

    }

   runArraySum();