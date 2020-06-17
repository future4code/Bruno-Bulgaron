import { Student } from './Student';
import { FileManager } from './FileManager';

export class Students extends FileManager {
    public filePath: string = './students.json'

    public arrayStudents: Student[] = [];

    public addStudent(newStudent: Student): void {
        this.arrayStudents.push(newStudent);
    }
}