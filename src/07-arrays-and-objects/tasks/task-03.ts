/**
 * A school has attendance data below.
 * Tasks:
 * 1. Get all student's names who are present
 * expected array: ["Andi","Citra"]
 * 2. Get all students who are present
 * expected array: ["Budi"]
 * 3. Get students who are late
 * expected array: ["Deni"]
 * 4. Generate array that contains {name, status}
 */

const students = [
    { id: 1, name: "Andi" },
    { id: 2, name: "Budi" },
    { id: 3, name: "Citra" },
    { id: 4, name: "Deni" },
];

const attendance = [
    { studentId: 1, status: "present" },
    { studentId: 2, status: "absent" },
    { studentId: 3, status: "present" },
    { studentId: 4, status: "late" },
];

// 1. Get all students names who are present
const presentNames = attendance
    .filter((item) => item.status === "present")
    .map((item) => students.find((student) => student.id === item.studentId)?.name);
console.log("1. Present Names:", presentNames);

// 2. Get all students who are absent
const absentStudents = attendance
    .filter((item) => item.status === "absent")
    .map((item) => students.find((student) => student.id === item.studentId)?.name);
console.log("2. Absent Students:", absentStudents);

// 3. Get students who are late 
const lateStudents = attendance
    .filter((item) => item.status === "Late")
    .map((item) => students.find((student) => student.id === item.studentId)?.name);
console.log("3. Late Students:", lateStudents);

// 4. Generate array that contains {name, status}
const studentAttandance = attendance.map((item) => ({name: students.find((student) => student.id === item.studentId)?.name, status: item.status,}));
console.log("4. Student attandance:", studentAttandance);