function greetUser(){
    let name=prompt("enter your name:");
    alert("hello \t"+name);
}
greetUser();

function addNumber(){
    let a=Number(prompt("enter your number 1:"));
    let b=Number(prompt("enter your number 2:"));
    let sum=(a+b);
    alert("result \t"+sum);
}

addNumber();

function isEven(){
    let Num=Number(prompt("enter your number 1:"));
    if(Num%2===0){
        alert("even num");
    }
    else{
        alert("odd num");
    }
}
isEven();