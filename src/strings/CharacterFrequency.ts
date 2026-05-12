function characterFreq(input:string): Map<string, number>
{
    const map = new Map<string,number>();
    for(let i =0;i<input.length;i++)
    {
        const ch = input.charAt(i)
        map.set(ch, (map.get(ch) ?? 0)+1);
    }
    return map;
}