function flatArray(array: number[][]):number[]
{
    return array.reduce((acc,curr) =>{
         acc.push(...curr)
         return acc;
    },[])
}

function runFlatArray() {

    const dataSet: number[][][] = [
        [[1,2],[3,6],[7]],
        [[2,3,4],[45,66,98]],
        [[]],
        [[0]],
        [[3,4],[2,3],[3,4]],
        [[1,1,1,1,1,1]]
    ]

    for (const array of dataSet )
    {
        console.log(`Sum of elements : ${flatArray(array)}`);

    }

    }

   runFlatArray();