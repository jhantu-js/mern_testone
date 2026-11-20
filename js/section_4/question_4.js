// Create Object

let details = {
  name: "Jhantu",
  course: "MCA",
  age: 27,
  marks: 18,
};
console.log("Details");
console.log("Name : ", details.name);
console.log("Course : ", details.course);
console.log("Age : ", details.age);
console.log("Marks : ", details.marks);

details.marks = 81;

details.grade = "B";

console.log("Updated Details");
console.log("Name : ", details.name);
console.log("Course : ", details.course);
console.log("Age : ", details.age);
console.log("Marks : ", details.marks);
console.log("Grade : ", details.grade);
