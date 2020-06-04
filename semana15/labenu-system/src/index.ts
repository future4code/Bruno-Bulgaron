import { Student } from './Student';
import { Teacher, TEACHER_SPECIALTY } from './Teacher';
import * as moment from 'moment';
import { FullTimeMission } from './FullTimeMission';
import { NightMission } from './NightMission';

// Instância de um novo Student
const jackSparrow = new Student(1, "Jack Sparrow", "jacksparrow@pirates.com", moment("06/06/1888", "DD/MM/YYYY"), ["Tomar café", "Tomar Rum", "Encontrar tesouros!"])

console.log(jackSparrow);
console.log(jackSparrow.getAge());

// Instância de um novo Teacher
const senhorReact = new Teacher(10, "Senhor React", "react_eh_top@teachers.com", [TEACHER_SPECIALTY.REACT, TEACHER_SPECIALTY.REDUX])

console.log(senhorReact);

// Instância de uma FullTimeMission
const missaoPirata = new FullTimeMission(10, moment("01/06/2020", "DD/MM/YYYY"), moment("01/12/2020", "DD/MM/YYYY"), [], [], 1)

missaoPirata.setName("Missão Pirata");

console.log(missaoPirata.getName(""));
console.log(missaoPirata);

// Instância de uma NightMission
const missaoDaEscuridao = new NightMission(20, moment("01/07/2020", "DD/MM/YYYY"), moment("01/01/2021", "DD/MM/YYYY"), [], [], 1)

missaoDaEscuridao.setName("Missão da Escuridão -na-night");

console.log(missaoDaEscuridao.getName(""));
console.log(missaoDaEscuridao);