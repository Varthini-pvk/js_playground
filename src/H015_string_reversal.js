const word = "happy_days";
const word_array = Array.from(word);


//for loop and string concat
let rev_word_1 = ""
for(let i =word_array.length-1; i>=0; i--)
{
  rev_word_1 += word_array[i]
}
console.log(rev_word_1);


//for loop and array
let rev_word_2 = [];
for(let i =word_array.length-1; i>=0; i--)
{
  rev_word_2.push(word_array[i])
}
console.log(rev_word_2.join(""));


//inbuilt methods

console.log(word_array.reverse().join(""));
console.log (word.split("").reverse().join(""));
