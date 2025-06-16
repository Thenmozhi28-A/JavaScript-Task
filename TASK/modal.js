let fav=prompt("your favorite color is:");
alert("your favorite color is:"+fav);

let page=confirm("do you really want to leave this page");

if(page){
   alert( "goodbye");
}
else{
    alert("thanks for staying");
}

let a=Number(prompt("num1:"));
let b=Number(prompt("num2:"));
let value= a+b;
alert("sum is"+value);

let user=prompt("username:");
if(user==="admin"){

  alert("Welcome back!");
} 
else {
  alert("Access denied");
}

let name = prompt("Enter your name:");
let isConfirmed = confirm("Are you sure your name is " + name + "?");

if (isConfirmed) {
  alert("Nice to meet you!");
} 
else {
  alert("Please enter again.");
}

