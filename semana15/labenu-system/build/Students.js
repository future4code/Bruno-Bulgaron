"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Students = void 0;
const FileManager_1 = require("./FileManager");
class Students extends FileManager_1.FileManager {
    constructor() {
        super(...arguments);
        this.filePath = './students.json';
        this.arrayStudents = [];
    }
    addStudent(newStudent) {
        this.arrayStudents.push(newStudent);
    }
}
exports.Students = Students;
//# sourceMappingURL=Students.js.map