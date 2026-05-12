function moveZeros(array: number[]): number[]
{
    if (array == null || array.length === 0) {
        throw new Error("Array must not be null or empty");
    }
    // let first = 0;
    // let second = 0;
    // while(second<array.length)
    // {
    //     if (array[first] == 0)
    //     {
    //         while(second<array.length-1 && array[second]===0) second++;
    //         const temp = array[second];
    //         array[second] = array[first];
    //         array[first] = temp;
    //     }
    //      first++;
    //      second++;   
        
    // }

    //decoupled pointer
    let nonzeroPointer = 0;
    let currentPointer = 0
    while(currentPointer<array.length)
    {
        if(array[currentPointer]!==0)
        {
            const temp = array[currentPointer];
            array[currentPointer] = array[nonzeroPointer];
            array[nonzeroPointer] = temp;
            nonzeroPointer++
        }
        currentPointer++
    }

    return array;
}


function run()
{
const datasets: number[][] = [
//   [0, 0, 1,2,4,5],
//   [5, 0, 1, 0, 3, 4],
//   [1,4, 4, 6,0],
//   [1,2,35,6],
//   [0,0,0],
//   [1,2,0,0,0,3,4],
//   [2,4,8,9,0,0],
//   [0,1,0,3,12],
//   [0, 1, 0, 0, 3],
//   [0,0,1],
//   [1,0,0,2,0,3],
//   [0,0,0,1],
//   [1, 0, 0, 2, 0, 3],
//   [0, 0, 0, 1, 0, 2]
];

for (let i = 0; i < datasets.length; i++) {
  const array = datasets[i];
//   console.log(`dataset ${i + 1}`);
  
  console.log(moveZeros([...array]));
}
}

run();