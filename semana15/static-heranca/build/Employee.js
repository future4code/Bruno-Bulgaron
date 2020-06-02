"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const User_1 = require("./User");
class Employee extends User_1.User {
    constructor(id, email, name, password, admissionDate, baseSalary) {
        super(id, email, name, password);
        this.admissionDate = admissionDate;
        this.baseSalary = baseSalary;
    }
    getAdmissionDate() {
        return this.admissionDate;
    }
    getBaseSalary() {
        return this.baseSalary;
    }
    calculateTotalSalary() {
        return this.baseSalary += 400;
    }
}
exports.Employee = Employee;
const employeeTest = new Employee("idEmployee1", "employee@employee.com", "Employee1", "123", "02/06/2020", 5000);
console.log(employeeTest);
console.log(employeeTest.calculateTotalSalary());
//# sourceMappingURL=Employee.js.map