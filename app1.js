angular.module('studentApp', [])
.controller('StudentController', function() {
    this.students = [];

    this.showResults = false;

    this.addStudent = function() {
        const newStudent = {
            name: '',
            rollNumber: '',
            year: '',
            marks: [
                { name: 'Math', marks: 0 },
                { name: 'Science', marks: 0 },
                { name: 'English', marks: 0 },
                { name: 'History', marks: 0 },
                { name: 'Computer Science', marks: 0 },
                { name: 'Social', marks: 0 }
            ]
        };
        this.students.push(newStudent);
    };

    this.calculateAggregate = function() {
        const marks = this.student.marks;
        const totalMarks = marks.math + marks.science + marks.english + marks.history + marks.computer + marks.social;
        this.aggregatePercentage = (totalMarks / 600) * 100;
        this.showResults = true;
    };
});
angular.module('studentApp', [])
.controller('StudentController', function() {
    this.students = [];

    this.showResults = false;

    this.addStudent = function() {
        const newStudent = {
            name: '',
            rollNumber: '',
            year: '',
            marks: [
                { name: 'Math', marks: 0 },
                { name: 'Science', marks: 0 },
                { name: 'English', marks: 0 },
                { name: 'History', marks: 0 },
                { name: 'Computer Science', marks: 0 },
                { name: 'Social', marks: 0 }
            ],
            aggregatePercentage: 0
        };
        this.students.push(newStudent);
    };

    this.calculateAggregate = function() {
        for (const student of this.students) {
            const totalMarks = student.marks.reduce(function(acc, subject) {
                return acc + subject.marks;
            }, 0);
            student.aggregatePercentage = (totalMarks / (student.marks.length * 100)) * 100;
        }
        this.showResults = true;
    };
});
