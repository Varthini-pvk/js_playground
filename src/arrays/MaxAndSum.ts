function findMaxElement(testArray: number[]): number
{
    let maxElement = Number.MIN_SAFE_INTEGER
    for (const num of testArray )
    {
        maxElement = Math.max(maxElement, num);
    }

    return maxElement;
}

function findSum(testArray: number[]): number
{
  let sum = 0;
    for (const num of testArray )
    {
        sum+=num;
    }

    return sum;

}

const datasets: number[][] = [
  [-9, 30, 4943543, 34],
  [-10, -3, -50, -1],
  [5],
  [2, 4, 6, 8],
  []
];

for (let i = 0; i < datasets.length; i++) {
  const array = datasets[i];
  console.log(`dataset ${i + 1}`);
  if (datasets[i] == null || datasets[i].length === 0) {
        throw new Error("Array must not be null or empty");
    }
  console.log("max =", findMaxElement(array));
  console.log("sum =", findSum(array));
 
}