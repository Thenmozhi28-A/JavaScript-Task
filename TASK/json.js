//json

let userProfile={
    name:"thenu",
    age:21,
    skills:["web developer"]
}
let jsonString=JSON.stringify(userProfile);
console.log(jsonString);
let parseObject=JSON.parse(jsonString);
console.log("Name:", parseObject.name);
console.log("First Skill:", parseObject.skills);

//error handling

try {
    let num1 = Number(prompt("Enter the first number:"));
    let num2 = Number(prompt("Enter the second number:"));

    if (num2 === 0) {
        throw new Error("Division by zero is not allowed");
    }

    let result = num1 / num2;
    alert("Result: " + result);
} 
catch (error) {
    alert("Error: " + error.message);
} 
finally {
    console.log("Calculation attempted");
}


//Promise with Async/Await

function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ name: "Thenu", age: 21 });
        }, 2000); // 2-second delay
    });
}

async function showUser() {
    let user = await getUser();
    console.log("User:", user);
}

showUser();


//DOM=html page
