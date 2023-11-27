angular.module('studentApp', [])
.controller('StudentController', function() {
    this.student = {
        name: '',
        rollNumber: '',
        year: '',
        marks: {
            math: 0,
            science: 0,
            english: 0,
            history: 0,
            computer: 0,
            social: 0
        }
    };
    this.showResults = false;
    
    this.calculateAggregate = function() {
        const marks = this.student.marks;
        const totalMarks = marks.math + marks.science + marks.english + marks.history + marks.computer + marks.social;
        this.aggregatePercentage = (totalMarks / 600) * 100;
        this.showResults = true;
    };
});
