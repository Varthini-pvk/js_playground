 //1. 
 const input = "  Varthini    PVK   ";
 console.log(`normalised output:  ${input.replace(/\s+/g, " ").trim().toLowerCase()}`)


 //2 - count characters
const text = "lead sdet".;
const count: Record<string,number> = {}

for(const letter of text)
{count[letter] =  (count[letter] ?? 0) + 1 }

for(const [key,value] of Object.entries(count))
{
    console.log(`${key}:${value}`);
}
