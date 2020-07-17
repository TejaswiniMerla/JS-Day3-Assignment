//Method 1 : Using Conditional Statements
/*
var marks = prompt("Enter Your Marks")
var grade;
if(marks >= 90){
    grade = "A";
} else if (marks >= 80) {
    grade = "B";
} 
else if (marks >= 70) {
    grade = "C";
} 
else if (marks >= 60) {
    grade = "D";
} 
else if (marks >= 50) {
    grade = "E";
} 
else {
    grade = "F";
} 
console.log(`Marks are ${marks} and grade is ${grade}`);
*/

//Method 2 : Using Switch

/*var marks = prompt("Enter Your Marks")
var grade;
switch (grade)
{
case 'A':
console.log("Marks >= 90");
break;
case 'B':
console.log("Marks >= 80");
break;
case 'C':
console.log("Marks >= 70");
break;
case 'D':
console.log("Marks >= 60");
break;
case 'E':
console.log("Marks >= 50");
break;

}
*/
var marks=prompt("Enter Your Marks");  
var grade;  
switch(true) {
    case marks > 90 && marks <= 100:
        grade = 'A';
        console.log(`Marks are ${marks} and grade is ${grade}`);
        break;
    case marks > 80  && marks <= 90:
        grade = 'B';
        console.log(`Marks are ${marks} and grade is ${grade}`);
        break;
    case marks > 70 && marks <= 80:
        grade = 'C';
        console.log(`Marks are ${marks} and grade is ${grade}`);
        break;
    case marks > 60 && marks <= 70:
        grade = 'D';
        console.log(`Marks are ${marks} and grade is ${grade}`);
        break;
    case marks > 50 && marks <= 60:
        grade = 'E';
        console.log(`Marks are ${marks} and grade is ${grade}`);
        break;
    default:
        grade = 'F';
        console.log(`Marks are ${marks} and grade is ${grade}`);
        break;
    }


//Method 3 : Using Ternary
/*
var marks =  prompt("Enter Your Marks ");

var grade = (marks >= 90) ? 'A':
            (marks >= 80) ? 'B':
            (marks >= 70) ? 'C':
            (marks >= 60) ? 'D':
            (marks >= 50) ? 'E':
            'F';
console.log(`Marks are ${marks} and Grade is ${grade}`);

*/