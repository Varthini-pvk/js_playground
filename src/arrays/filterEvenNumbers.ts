function filterEven(array: number[])
{
    return array.filter(num => (num%2 === 0));
}

function runfilterEven() {

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
        console.log(`Even elements : ${filterEven(array)}`);

    }

    }

   runfilterEven();