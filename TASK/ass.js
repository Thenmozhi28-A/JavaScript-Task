let sayHi=function(){
    alert("hii,javascript");
}
sayHi();

let multiply = function(a, b) {
    return a * b;
};

let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let Result = multiply(num1, num2);
alert("Product is: " + Result);


// let isAdult=function(){
//     let age=Number(prompt("enter you age:"));
//     if(age>=18){
//         alert("adult");
//     }
//     else{
//         alert("not");
//     }
// }
// isAdult();

let isAdult = function(age) {
    if (age >= 18) {
        return "Adult";
    } else {
        return "Not an adult";
    }
};

let userAge = Number(prompt("Enter your age:"));
let result = isAdult(userAge);
alert(result);
