import * as moment from 'moment';
import { Teacher } from './Teacher';
import { Student } from './Student';

export abstract class Mission {
    
    private name: string
    
    constructor(private id: number,
                private startDate: moment.Moment,
                private endDate: moment.Moment,
                private teachers: Teacher[],
                private students: Student[],
                private currentModule?: number
    ){}


    public getId(): number {
        return this.id
    }
    
    public getName(name: string): string {
        return this.name
    }

    public getStartDate(): moment.Moment {
        return this.startDate
    }
    
    public getEndDate(): moment.Moment {
        return this.endDate
    }
    
    public getCurrentModule(): number | string {
        return this.currentModule
    }

    public addTeacher(teacher: Teacher){
        return this.teachers.push(teacher)
    }

    public addStudent(student: Student){
        return this.students.push(student)
    }

    public setName(name: string){
        this.name = name
    }
}