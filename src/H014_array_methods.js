const test_array_one = ["mon", "tue", "wed"];
const test_array_two = [1,2,3,5,8];

//Push
console.log(`new_array_length: ${test_array_two.push(13,21)}` );
console.log(`updated_array: ${test_array_two}`);

//pop
console.log(`removed_element: ${test_array_two.pop()}` );
console.log(`updated_array: ${test_array_two}`);

//shift
console.log(`removed_element: ${test_array_two.shift()}` );
console.log(`updated_array: ${test_array_two}`);

//unshift
console.log(`new_array_length: ${test_array_two.unshift(1)}` );
console.log(`updated_array: ${test_array_two}`);

//find
console.log(`even_number: ${test_array_two.find(x => x%2==0)}`);

//findIndex
console.log(`even_number: ${test_array_two.findIndex(x => x%2==0)}`);

//Includes
console.log(`is array has sat? : ${test_array_one.includes("sat")}`);

//Slice
console.log(`sliced array:${test_array_two.slice(2,5)} `);

//Splice
console.log (`original array (before splice): ${test_array_two}`);
test_array_two.splice(1,3,'x','y','z')
console.log (`updated array (after splice(): ${test_array_two}`);


//concat
const test_array_3 = ['a','b','c'];
console.log(`joined_array:${test_array_3.concat(test_array_two,test_array_one)}`);
console.log(`original arrays: ${test_array_3},${test_array_two},${test_array_one}`);


//sort

//reverse
console.log(`reveresed array: ${test_array_3.reverse()}`);

//at
console.log(test_array_two.at(-1));
console.log(test_array_two.at(-2));
console.log(test_array_two.at(0));

//join
console.log(test_array_two.join('&'));
console.log(test_array_two.join('T'));

//Array.from
console.log(`new_array_one:${Array.from('hello')}`);
console.log(`new_array_two:${Array.from({length:5},(_,x) => (x+1)*(x+1))}`);


//Array.of
console.log(`new_array_three:`, Array.of('x',1,['abc','efg'],-100, {y:2}))

//Array.isArray()
let yy =0
console.log(Array.isArray(test_array_two));
console.log(Array.isArray(yy));

