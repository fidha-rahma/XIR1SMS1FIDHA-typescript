/**
 * You are developing a simple exam analytics system.
 * Tasks: 
 * 1. Calculate student score (each correct answer get 20 points)
 * 2. Get students that pass (> 70)
 * 3. Find student who reach highest score 
 * 4. Calculate class's average score
 */

const students = [
    {
        id: 1,
        name: "Andi",
        answers: ["A", "B", "C", "A", "B"],
    },
    {
        id: 2,
        name: "Budi",
        answers: ["A", "C", "C", "A", "D"],
    },
    {
        id: 3,
        name: "Citra",
        answers: ["B", "B", "C", "A", "B"],
    },
];

const correctAnswers = ["A", "B", "C", "A", "B"];

// 1. calculate student score
const studentScores = students.map((student) => {
    const correct = student.answers.filter(
        (answer, index) => answer === correctAnswers[index]
    ).length;
    return {
        name: student.name,
        score: correct * 20,
    };
});
console.log("1. Studnet Scores:", studentScores);

// 2. get students that pass (> 70)
const passStudents = studentScores.filter(
    (student) => student.score > 70
);
console.log("2. Passed Students:", passStudents);

// 3. find student who reach highest score
const highestScore = Math.max(...studentScores.map((student) => student.score));
const highestStudents = studentScores.find((student) => student.score === highestScore);
console.log("3. Highest Score:", highestStudents);

// 4. calculate class's average score
const totalScore = studentScores.reduce(
    (total, student) => total + student.score,0
);
const averageScore = totalScore / studentScores.length;
console.log("4. Class Average:", averageScore);