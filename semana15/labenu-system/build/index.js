"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = require("./Student");
const moment = require("moment");
const Students_1 = require("./Students");
const jackSparrow = new Student_1.Student(1, "Jack Sparrow", "jacksparrow@pirates.com", moment("06/06/1888", "DD/MM/YYYY"), ["Tomar café", "Tomar Rum", "Encontrar tesouros!"]);
const allStudents = new Students_1.Students;
allStudents.addStudent(jackSparrow);
allStudents.writeFile(allStudents.arrayStudents);
//# sourceMappingURL=index.js.map