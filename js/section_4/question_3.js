// Unique Values

let numbers = [18, 45, 17, 333, 21, 8, 28, 37, 38, 6, 6];
let unique = [];

for(let i = 0; i < numbers.length; i++){
    
    if(! unique.includes(numbers[i])){
        unique.push(numbers[i]);
    }
}
console.log("Original Array:", numbers);
console.log("Unique Array:", unique);

