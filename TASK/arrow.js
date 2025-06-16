// let greet=()=>{
//     alert("sayhi");
// }
// greet();

// let num=()=>{
//     let num=Number(prompt("enter your num:"));
//     if(num%2===0){
//         alert("even");
//     }
//     else{
//         alert("odd");
//     }
// }
// num();

let sayHello = () => {
    alert("Welcome to JavaScript!");
};
sayHello();



const square = (n) => {
    return n * n;
};

let input = Number(prompt(
    "Enter a number:"));
let result = square(input);
alert("Square is: " + result);



const checkEvenOdd = (number) => {
    return number % 2 === 0 ? "Even" : "Odd";
};

let Input = Number(prompt("Enter a number:"));
let Result = checkEvenOdd(input);
alert(Result);
