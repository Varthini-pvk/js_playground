function buildArray(array: number[]): number[]
{
    if (array == null || array.length === 0) {
        throw new Error("Array must not be null or empty");
    }
    let result: number[] = [];
    for(let i=0;i<array.length;i++)
    {
        result[i] = (array[array[i]]);
    }
    return result;

}

function runningSum(array:number[]): number[]
{

    if (array == null) {
        throw new Error("Array must not be null");
    }

    if (array.length === 0) {
        return [];
    }

    for(let i=1; i<array.length;i++)
    {
        array[i] = array[i-1]+array[i];
    }
    return array;
}

function run()
{
const datasets: number[][] = [
  [0, 2, 1, 5, 3, 4],
  [5, 0, 1, 2, 3, 4],
  [1, 0],
  [0]
];

for (let i = 0; i < datasets.length; i++) {
  const array = datasets[i];
  console.log(`dataset ${i + 1}`);
  
  console.log(buildArray(array)); 
  console.log(runningSum([...array])); 
}
}

run();