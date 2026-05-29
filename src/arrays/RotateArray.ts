function rotateArray(array: number[], rotateIndex: number): number[]
{
    if (!array || array.length === 0) return [];
    const arraylength = array.length;
    
    rotateIndex = rotateIndex % arraylength;       // handle k > length
    if (rotateIndex === 0) return array; // no-op guard

    
    reverse(array, 0,arraylength-1);
    reverse(array, 0,rotateIndex-1);
    reverse(array, rotateIndex,arraylength-1);

    return array;

    
}

function reverse(array: number[], start: number, end: number):void
{
    while(start<end)
    {
        [array[start], array[end]] = [array[end],array[start]];
        start++;
        end--;
    }
}