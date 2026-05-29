
    function findMinimum(array: number[]): number
    {
        if(array==null || array.length==0)
        {
            throw new Error("Error: Array cannot be null or empty")
        }
       
        let min = array[0];
        for(const num of array)
        {
            min = Math.min(min,num)
        }
        
        return min;



    }

    function run() {

    const dataSet: number[][] = [
        [1,2,3,6,7],
        [2,3,4,45,66,98],
        [],
        [0],
        [3,4],
        [1,1,1,1,1,1],
        [-2.3,4,0]
    ]

    for (const array of dataSet )
    {
        console.log(`number of odd numbers ${findMinimum(array)}`);

    }

    }