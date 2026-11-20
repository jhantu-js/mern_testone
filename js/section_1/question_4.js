// Employee salary

let salary = 92000;

// Calculate HRA, DA, and Bonus

let HRA = salary * 20 / 100; 
let DA = salary * 10 / 100; 
let bonus = salary * 5 / 100;

// Calculate Final salary

let totalSalary = salary + HRA + DA + bonus;

console.log("Salary: " + salary);
console.log("HRA: " + HRA);
console.log("DA: " + DA);
console.log("Bonus: " + bonus);
console.log("Total Salary: " + totalSalary);