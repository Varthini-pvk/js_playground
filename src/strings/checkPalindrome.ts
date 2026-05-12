function checkIfPalindrome(input: string):boolean
{
   let start:number = 0;
   let end:number = input.length-1;
   input = input.toLowerCase().replaceAll(" ", "");

   while(start < end)
   {
        if (input.charAt(start)!==input.charAt(end))
        {
            return false;
        }
        start++;
        end--;
   }
   return true
}
