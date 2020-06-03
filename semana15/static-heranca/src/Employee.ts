import { User } from './User';

export class Employee extends User {
    protected admissionDate: number | string;
    protected baseSalary: number;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        admissionDate: number | string,
        baseSalary: number
    ) {
        super(id, email, name, password);
        this.admissionDate = admissionDate;
        this.baseSalary = baseSalary;
    }

    public getAdmissionDate(): number | string {
        return this.admissionDate;
    }

    public getBaseSalary(): number {
        return this.baseSalary;
    }

    public calculateTotalSalary(): number {
        return this.baseSalary + 400;
    }
}

const employeeTest: Employee = new Employee("idEmployee1", "employee@employee.com", "Employee1", "123", "02/06/2020", 5000)

console.log(employeeTest);
console.log(employeeTest.calculateTotalSalary());

// Exercício 6

// A) Se eu comentar a instância do arquivo User.ts, aparece apenas uma vez nesse arquivo Employee.
// B) Imprime um objeto Employee com id, email, name, password, admissionDate, baseSalary.