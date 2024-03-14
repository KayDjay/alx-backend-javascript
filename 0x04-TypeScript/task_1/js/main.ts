// main.ts

interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

class TeacherImpl implements Teacher {
    constructor(
        public firstName: string,
        public lastName: string,
        public fullTimeEmployee: boolean,
        public location: string,
        public yearsOfExperience?: number,
    ) {}
}

const teacher: Teacher = new TeacherImpl('John', 'Doe', true, 'New York');
teacher.contract = true; // Adding a new attribute dynamically

console.log(teacher);