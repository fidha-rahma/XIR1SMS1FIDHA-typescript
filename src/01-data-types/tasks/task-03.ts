/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */

/**1. Define a proper type for the student information. 
 * uniqe student ID : string
 * a full name : string
 * age : number
 * status indicating whether they are currently an active student : boolean
*/
type Student = {
    StudentID: string;
    FullName: string;
    Age: number;
    Status: boolean;
}
/**2. Implement a type that you defined on 3 students data. */
const student1: Student = {
    StudentID: "F98712Y",
    FullName: "Felicya Yesica",
    Age: 16,
    Status: true,
};
const student2: Student = {
    StudentID: "S981471R",
    FullName: "Seline Reycya",
    Age: 17,
    Status: false,
};
const student3: Student = {
    StudentID: "A918286R",
    FullName: "Alnand Renaldo",
    Age: 15,
    Status: true,
};

/** display the student data using console.log.*/
console.log("=== Student Information System ===");
console.log(student1);
console.log(student2);
console.log(student3);