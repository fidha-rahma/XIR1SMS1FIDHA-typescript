/**
 * A teacher has a list of students and their exam scores below.
 * The teacher wants to analyze the exam results.
 * Tasks:
 * 1. Get an array containing only the student names.
 * expected array: ["Andi", "Budi", "Citra", "Deni", "Eka"]
 * 2. Get students who passed. Passing score is >= 70. 
 * expected array: [
 * { name: "Andi", score: 85 },
 * { name: "Citra", score: 91 },
 * { name: "Deni", score: 74 }
 * ]
 * 
 * 3. Find the student named "Citra".
 * 4. Calculate the average score.
 */
const students = [
  { name: "Andi", score: 85 },
  { name: "Budi", score: 62 },
  { name: "Citra", score: 91 },
  { name: "Deni", score: 74 },
  { name: "Eka", score: 55 },
];

//1. Only All Name
const names = students.map(student => student.name);

//2.Student passing score >=70
const passedStudents = students.filter(student => student.score >= 70);

//3. Student name Citra
const Citra = students.find(student => student.name === "Citra");

//4. Average
const totalScore = students.reduce((total, student) => total + student.score, 0);
const averageScore = totalScore / students.length;

console.log("1. Names:", names);
console.log("2. Passed Students:", passedStudents);
console.log("3. Citra:", Citra);
console.log("4. Average Score:", averageScore);