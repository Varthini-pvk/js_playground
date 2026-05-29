function chunkArray(array: number[], chunkSize:number): number[][]
{

    if (array === null || array.length === 0) return [];
    if (chunkSize === null || chunkSize <=0) throw new Error("Invalid Chunk Size");
    if (chunkSize === array.length) return [array];
   let chunkStart = 0;
   let chunkEnd = chunkStart+ chunkSize;
   const result: number[][] = [];
   while (chunkStart < array.length )
   {
        result.push(array.slice(chunkStart,chunkEnd))
        chunkStart = chunkEnd;
        chunkEnd = chunkStart+ chunkSize;
   }
  
   return result;

}

function runChunkArray()
{
    const dataSet: Record<number,number[]> = {
       2: [1,2,3,4,5,6],
       3: [1,2,3,4,5,6],
       4:  [1,2,3,4,5],
       5: [],
       0: [1,2,3,4],
    }
    for(const [size,ds] of Object.entries(dataSet))
    {
        console.table(chunkArray(ds,Number(size)));
    }
  
}