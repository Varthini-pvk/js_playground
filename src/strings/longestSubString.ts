function longestSubstring(input:string): string
{
    let startIndex = 0;
    let maxLength=0;
    let left =0;

    const set = new Set<string>();

    for(let right=0; right<input.length;right++)
    {
            while(set.has(input.charAt(right)))
            {
                set.delete(input.charAt(left));
                left++;
            }

            set.add(input.charAt(right));
            let currentLength = right-left+1 ;
            
            if (maxLength < currentLength)
            {
                maxLength = currentLength;
                startIndex = left;
            }
    
    }
    return input.substring(startIndex,startIndex+maxLength);

}