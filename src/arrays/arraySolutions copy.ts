function doubleValue(array: number[])
{
    return array.map(num => num*2);
}

function runDoubleValue() {

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
        console.log(`Sum of elements : ${doubleValue(array)}`);

    }

    }

   runDoubleValue();