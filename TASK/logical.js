let age=prompt("enter your age:");
if(age>18){
    alert("you can apply for a voter id");
}
else{
    alert("you are not eligible");
}

//or

let Age = Number(prompt("Enter your age:"));
let country = prompt("Enter your country:");

if (Age >= 18 && country === "India") {
    alert("You can apply for a voter ID");
} 
else {
    alert("You are not eligible");
}


let username = prompt("Enter your username:");
let email = prompt("Enter your email:");

if (username || email) {
    alert("Login successful");
} 
else {
    alert("Please provide login details");
}


let password = prompt("Enter your password:");

if (password && password.length >= 6) {
    alert("Password accepted");
} 
else {
    alert("Password too short");
}


let isLoggedIn = true;
let isVerified = false;

console.log("AND:", isLoggedIn && isVerified);  
console.log("OR:", isLoggedIn || isVerified); 
console.log("NOT:", !isVerified);               


let msg=confirm("do you want to continuing:");
if(!msg){
    alert("exiting");
}
else{
    alert("continuing"); 
}