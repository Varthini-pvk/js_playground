function caluculate_array_sum(arr) {
    let sum = 0;
    for(let i in arr){
        sum += arr[i];
    }
    return sum;
}

console.log(caluculate_array_sum([1, 2, 3, 4, 500]));