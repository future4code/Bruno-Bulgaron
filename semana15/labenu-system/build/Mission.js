"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mission = void 0;
class Mission {
    constructor(id, startDate, endDate, teachers, students, currentModule) {
        this.id = id;
        this.startDate = startDate;
        this.endDate = endDate;
        this.teachers = teachers;
        this.students = students;
        this.currentModule = currentModule;
    }
    getId() {
        return this.id;
    }
    getName(name) {
        return this.name;
    }
    getStartDate() {
        return this.startDate;
    }
    getEndDate() {
        return this.endDate;
    }
    getCurrentModule() {
        return this.currentModule;
    }
    addTeacher(teacher) {
        return this.teachers.push(teacher);
    }
    addStudent(student) {
        return this.students.push(student);
    }
    setName(name) {
        this.name = name;
    }
}
exports.Mission = Mission;
//# sourceMappingURL=Mission.js.map