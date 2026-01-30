const word = "madam";
const word_array = Array.from(word);


//for loop and string concat
let rev_word_1 = ""
for(let i =word_array.length-1; i>=0; i--)
{
  rev_word_1 += word_array[i]
}
console.log(rev_word_1 === word);


//for loop and array
let rev_word_2 = [];
for(let i =word_array.length-1; i>=0; i--)
{
  rev_word_2.push(word_array[i])
}
console.log(arraysEqual(rev_word_2,word_array));


//inbuilt methods
console.log(arraysEqual(word_array.toReversed(),word_array ));
console.log (word.split("").reverse().join("") ===  word);



function arraysEqual(a, b) {
  if (a.length != b.length)
  return false;

  for(let i = 0; i<a.length; i++)
  {
    if (a[i]!= b[i]) return false
  }
  return true
}


