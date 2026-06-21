// An object - groups related data together 
let student = {
    name: "Moham",
    age:22,
    skills: ["HTML", "CSS", "JavaScript"]

} ;
console.log(student.name);
console.log(student.skills);

// An ARRAY -  a list of things 
let courses = ["javaScript", "React", "Node.js", "Database"];
// Loop through the array 
for (let i = 0; i < courses.length; i++){
    console.log ("Course"  + (i+1) + ":"  + courses[i])
}

// Add something to the array 

// courses.push("Git & GitHub");
// console.log (courses);

let stu = {
    name: "Solution",
    age: 26,
    skills: ["python ", " java ", " cybersecurity ", " Database "]
}; 
// let print the output in the console 

console.log(stu.name);
console.log('your age ' + stu.age);
console.log(`${stu.skills} are your skills which i belive that is a very good skilss and trust me if you put in all the effort you will become rich as the potential is alredy there.`);

// now let work with the array 
// note that array work with list which mean that elemet in array shiuld be in []

let course = ["function", "scratch", "css"];
// from here we are going to loop through the array 

// on javascript the proces of how to go about the for loop is different compare to other programming languages
// here we let 
for (let i = course.length - 1 ; i>=0 ; i--){
    console.log ("Semester course"  + (i+1) + ":"  + course[i])
}
// };
