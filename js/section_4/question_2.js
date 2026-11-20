// Search for student name
let students = [
  "Virat",
  "Salt",
  "Padikkal",
  "Rajat",
  "Krunal",
  "Tim",
  "Jitesh",
  "Romario",
  "Hazlewood",
  "Bhuvi",
  "Iyer",
];
let search = "Virat";
let found = false;
for (let i = 0; i < students.length; i++) {
  if (students[i] == search) {
    found = true;
    break;
  }
}
if (found) {
  console.log(search + "found in the array");
} else {
  console.log(search + "does not found");
}
