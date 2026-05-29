function removeDuplicates(array: number[]): number[]
{
    if (array === null)
        throw new Error("Input Array is null");
    if (array.length === 0) return [];
    

    const seen:Record<number,boolean> = {}
    const result: number[] = [];

    for (const num of array)
    {
       if(seen[num] === undefined || seen[num] != true)
       {
            seen[num] = true;
            result.push(num)
       }
        
    }
    return result;

   

}

function runRemoveDuplicates()
{
   const  dataSet: number[][] = [
    [1,2,3,1,2,3],
    [1,1,1,2,4,5,1,2],
    [3,5,3,6,6,78,3],
    [],
    [2],
    [2,2,2],
    [1,2,3,5]
   ]

   for(const ds of dataSet)
   {
        console.log(`Unique elemnts : ${removeDuplicates([...ds])}`);
   }

    
}