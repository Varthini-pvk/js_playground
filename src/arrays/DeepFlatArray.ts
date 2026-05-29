type NestedArray<T> = T | NestedArray<T>[];
function deepFlatArray(array: NestedArray<number>[]): number[]
{
    return array.reduce<number[]>((acc,val) => {
         acc.push(...(Array.isArray(val)? deepFlatArray(val): [val]))
         return acc;
    }, []);
}