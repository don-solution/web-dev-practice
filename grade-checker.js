/* Your first mini-project: Student Grade Checker
Create a new file in your web folder called grade-checker.js. Keep index.js as your practice file — from now on, each project gets its own file.
Here's what it needs to do:

Store a student's name and score in an object
Check the score and assign a grade (A, B, C, D, F)
Print a personalised message with the name, score and grade

Start with this structure and build it out yourself:*/

let student={
    name: 'Moham',
    score: 30
};

if (student.score >= 90){
    student.grade = "A";
}else if (student.score >=70 ){
    student.grade ="B";
}else if (student.score >=50){
    student.grade = "C";}
else if (student.score >= 40){
    student.grade = "D";}
else{
    student.grade = "F";
}

console.log(student.name + " scored " + student.score + " and got a " + student.grade + ". Keep pushing!")



