let age=prompt("enter your age:");
if(age>=18){
    alert("you can vote");
}
else{
    alert("you are too young");
}


let marks=prompt("enter your marks:");
if(marks>=90){
    alert("a");
}
else if(marks>=70){
    alert("b");
}
else if(marks>=50){
    alert("c");
}

else{
    alert("fail");
}


let num = Number(prompt("Enter a number:"));
if (num > 0) {
    alert("The number is positive.");
} 
else if (num < 0) {
    alert("The number is negative.");
} 
else {
    alert("The number is zero.");
}


let username = prompt("Enter your username:");
let password = prompt("Enter your password:");

if (username === "admin" && password === "1234") {
    alert("Access granted");
} 
else {
    alert("Access denied");
}


let time = Number(prompt("Enter the time (0 to 23):"));

if (time >= 0 && time <= 11) {
    alert("Good morning");
}
 else if (time >= 12 && time <= 17) {
    alert("Good afternoon");
} 
else if (time >= 18 && time <= 23) {
    alert("Good evening");
} 
else {
    alert("Invalid time entered");
}


