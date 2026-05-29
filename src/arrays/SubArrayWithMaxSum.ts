function subArrayWithMaxSum(array: number[])
{

    if (array.length === 0) return [];
    let currentSum= array[0];
    let maxSum = array[0];
    let resultStartIndex = 0;
    let resultEndIndex = 0;
    let startIndex = 0;
    let endIndex = 0;

    for(let i = 1 ; i<array.length; i++)
    {
        if (array[i]>(array[i]+currentSum))
        {
            currentSum = array[i];
            startIndex = i;
            endIndex = i;


        }
        else
        {
            currentSum = array[i]+currentSum;
            endIndex = i ;

        }
        if (maxSum<currentSum)
        {
            maxSum = currentSum;
            resultStartIndex = startIndex;
            resultEndIndex = endIndex


        }    
        
    }
    return array.slice(resultStartIndex,resultEndIndex)
}

function runSubArrayWithMaxSum() {

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
        console.log(`Sub Array with max Sum : ${subArrayWithMaxSum(array)}`);

    }

    }

   runSubArrayWithMaxSum();