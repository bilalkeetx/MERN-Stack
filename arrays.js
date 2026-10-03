// Array Mutation vs. Non-Mutation Methods
// Mutating (Modifies original array in place): push() (add to end), pop() (remove from end), unshift() (add to start), shift() (remove from start), splice() (add/remove elements at index).

// Non-Mutating (Returns new array/value): slice() (extract portion), map() (transform array), filter() (select items based on condition), find() (get first matching element), reduce() (accumulate to single value).

const students = [
  {name:"Hammad",marks:100},
  {name:"Usman",marks:110},
  {name:"Biloo",makrs:90}
];
//filter
const passStudents = students.filter(marks>60);
//find
const findStudents = students.find(s => s.name === "Biloo");
//extract
const extractNames = students.map(s => s.name);
//reduce 
const totalMarks = students.reduce((acc, curr) => acc + curr.marks, 0);
const avgMarks = totalMarks/students.length;
//sort
const sortStudents = students.toSorted((a,b)=> a.marks - b.marks);

//objects & data structures
const student = {
  name: "Bilal",
  semester: 5,
  skills: ["React","Javascript"]
};
console.log(student.name);
console.log(["semester"]);
student.semester = 6;
student.cgpa = 3.2;
delete student.skills;
const keys = Object.keys(student);
const values = Object.values(student);
const entries = Object.entries(student);
