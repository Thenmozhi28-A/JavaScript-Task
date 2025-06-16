//Conditional

let age= prompt("enter your age");

 if(age >= 18 ){
    alert("adult");
 }
 else{
    alert("Child");
 }

let number = prompt("Enter a number:");

if (number % 2 == 0) {
  alert("Even");
} 
else {
  alert("Odd");
}

let password = prompt("Enter password:");

if (password === "admin123") {
  alert("Access granted");
} 
else {
  alert("Wrong password");
}

//Positive / Negative

let num = prompt("Enter a number:");

if (num > 0) {
  alert("Positive");
}
 else if (num < 0) {
  alert("Negative");
} 
else {
  alert("Zero");
}

//Logical

let Age = prompt("Enter your age:");

if (Age >= 13 && Age <= 19) {
  alert("You are a teenager");
}
 else {
  alert("You are not a teenager");
}

let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn && isAdmin) {
  alert("Welcome Admin");
} 
else {
  alert("Access denied");
}

let isHoliday = false;
let isWeekend = true;

if (isHoliday || isWeekend) {
  alert("Relax!");
}
 else {
  alert("Go to work!");
}
