
    function countOddNumbers(array: number[]): number
    {
        if(array==null)
        {
            throw new Error("Error: Array cannot be null")
        }
       
        let count = 0;
        for(const num of array)
        {
            if(num%2 != 0)
            count++;
        }
        
        return count;



    }

    function run() {

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
        console.log(`number of odd numbers ${countOddNumbers(array)}`);

    }

    }