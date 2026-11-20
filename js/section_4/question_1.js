// Array statistics

let numbers = [18, 45, 17, 333, 21, 8, 28, 37, 38, 6]
let sum = 0;
let lar = numbers[0];
let small = numbers[0];

// sum, largest and smallest
for(let i = 0; i < numbers.length; i++){
    sum = sum + numbers[i];

    if(numbers[i] > lar){
        lar = numbers[i];
    }
    if(numbers[i] < small){
        small = numbers[i];
    }
}
// average
let average = sum / numbers.length;
console.log("Arrays", numbers);
console.log("Sum", sum);
console.log("Average", average);
console.log("Largest Number", lar);
console.log("Smallest Number", small);





