
    function reverseArray(array: number[]): number[]
    {

         if(array==null)
        {
            throw("Error: Array cannot be null")
        }
       
        let start = 0;
        let end = array.length-1;
        while (end>start)
        {
            const temp = array[start];
            array[start] = array[end];
            array[end] = temp;
            end--;
            start++;

        }
        return array;



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
        console.log(`Reversed Array: ${reverseArray([...array])}`);

    }

    }