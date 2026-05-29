function intersectionOfArryays(arrayOne: number[], arrayTwo: number[]): number[]
{

    const seen:Record<number,boolean> = {};
    const result:number[] = []
    for(const number of arrayOne)
    {
        seen[number] = true;
    }
    for(const number of arrayTwo)
    {
        if (seen[number]) 
        {
            result.push(number)
            seen[number] = false;
        }
   return result;

}

function runIntersection()
{
    const dataSet: number[][][] = [
       [[1,2,3,4,5,6] ,[1,2,3,4,5,6]],
       [[1,2,3], [2,3]],
       [[] ,[1,2,3]],
       [[2,3,5] ,[4,5,6]],
       [[1], [2]]

    ]
    for(const array of dataSet )
    {
        console.log(intersectionOfArryays(array[0],array[1]));
    }
  
}
runIntersection();