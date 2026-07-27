/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

type StudentRegister = {
    StudentID : number;
    FullName : string;
    GradeLevel : number;
    courseID : number;
    CourseTitle : string;
    InstructorName : string;
    TotalLearningHours : number;
    RegistrationDate : string;
    PaymentCompleted : boolean;
}
const Student1: StudentRegister = {
    StudentID: 1,
    FullName: "Nadia Putri",
    GradeLevel: 12,
    courseID: 101,
    CourseTitle: "Introduction to Programming",
    InstructorName: "John Doe",
    TotalLearningHours: 40,
    RegistrationDate: "2023-10-01",
    PaymentCompleted: true
};
const Student2: StudentRegister = {
    StudentID: 2,
    FullName: "Rina Safitri",
    GradeLevel: 13,
    courseID: 102,
    CourseTitle: "Introduction to Programming",
    InstructorName: "Jane Smith",
    TotalLearningHours: 50,
    RegistrationDate: "2023-19-01",
    PaymentCompleted: true
};
const Student3: StudentRegister = {
    StudentID: 3,
    FullName: "Andi Pratama",
    GradeLevel: 12,
    courseID: 101,
    CourseTitle: "Introduction to Programming",
    InstructorName: "Sarah Johnson",
    TotalLearningHours: 40,
    RegistrationDate: "2023-10-01",
    PaymentCompleted: true
};
console.log("=== Student Registration Information ===");
console.log("Student 1:", Student1);
console.log("Student 2:", Student2);
console.log("Student 3:", Student3);