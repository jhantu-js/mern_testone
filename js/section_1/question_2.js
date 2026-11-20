// Swap two numbers without using a third variable

let numb1 = 18;
let numb2 = 45;
console.log("Before swapping: numb1 =", numb1, "numb2 =", numb2);

// Swapping logic
numb1 = numb1 + numb2; // Step 1: Add both numbers
numb2 = numb1 - numb2; // Step 2: Subtract the new numb1 from numb2 to get original numb1
numb1 = numb1 - numb2; // Step 3: Subtract the new numb2 from the new numb1 to get original numb2
console.log("After swapping: numb1 =", numb1, "numb2 =", numb2);