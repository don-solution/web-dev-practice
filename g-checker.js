// function greet(name){
//     console.log("Hello " + name);
// }


// greet (" Mohamed");
// greet (" Solution");

// now for proper thing let see hoe it works 

 
function checkGrade(name, score){
    let grade;

    if (score>= 90){
        grade ="A";
    }
    else if (score >= 70){
      grade = "B";
    }
    else if (score >= 50){
        grade = "C";
    }
    else if (score >= 40){
        grade = "D";
    }
    else{
        grade = "F";
    }
console.log(name+ " score " + score + " with a grade of " + grade + " keep pushing little one! ")
}



checkGrade ("mohamed", 60);
checkGrade ("Musa", 89);
checkGrade ("Solution", 77);

