/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */
type employeeAttendance = {
    employeesID: string;
    employeesName: string;
    date: string;
    checkinTime: string;
    checkinOut: string;
    totalWorkingHours: string;
    present: boolean;
}
const employee1: employeeAttendance = {
    employeesID: "KA187689OFC",
    employeesName: "Khansa AR",
    date: "17-Juli-2026",
    checkinTime: "08.00",
    checkinOut: "18.00",
    totalWorkingHours: "10 Hours",
    present: true,
} ;  

const employee2: employeeAttendance = {
    employeesID: "ZM871650SE",
    employeesName: "Zeindra DM",
    date: "17-Juli-2026",
    checkinTime: "08.00",
    checkinOut: "20.00",
    totalWorkingHours: "12 Hours",
    present: true,
} ;  

const employee3: employeeAttendance = {
    employeesID: "FR1988621PR",
    employeesName: "Fidha DR",
    date: "17-Juli-2026",
    checkinTime: "08.00",
    checkinOut: "18.00",
    totalWorkingHours: "10 Hourse",
    present: false,
} ;  
console.log("=== EMPLOYEE ATTENDANCE ===");
console.log("Employee 1:", employee1);
console.log("Employee 2:", employee2);
console.log("Employee 3:", employee3);






