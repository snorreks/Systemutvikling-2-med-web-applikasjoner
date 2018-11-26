import {sharedComponentData} from 'react-simplified';

export class Student {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    courses: number[];

    constructor(id: number, firstName: string, lastName: string, email: string, courses: number[]) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.courses = courses;
    }

    deleteCourse(courseId) {
        this.courses = this.courses.filter(c => c !== courseId);
    }
}

export class Course {
    id: number;
    code: string;
    title: string;
    students: number[];

    constructor(id: number, code: string, title: string, students: number[]) {
        this.id = id;
        this.code = code;
        this.title = title;
        this.students = students;
    }

    deleteStudent(studId) {
        this.students = this.students.filter(s => s !== studId);
    }
}

let courseList = [
    new Course(1, 'TDAT104', 'Matte 1', [1, 4]),
    new Course(2, 'TDAT105', 'Algdat', [1, 2, 5]),
    new Course(3, 'TDAT106', 'Realfag', [1, 2, 3, 4])
];

let studentList = [
    new Student(1, 'Ola', 'Jensen', 'ola.jensen@ntnu.no', [1, 2, 3]),
    new Student(2, 'Kari', 'Larsen', 'kari.larsen@ntnu.no', [2, 3]),
    new Student(3, 'Per', 'Persen', 'per.larsen@ntnu.no', [3]),
    new Student(4, 'Alex', 'Alexen', 'alex.larsen@ntnu.no', [1, 3]),
    new Student(5, 'Kåre', 'Kåresen', 'kåre.larsen@ntnu.no', [2])
];

export let shared = sharedComponentData({
    studentList: studentList,
    courseList: courseList
});
