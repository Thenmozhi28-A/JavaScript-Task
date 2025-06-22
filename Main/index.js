// Destructuring an Object

const user = {
  name: "Dinesh",
  age: 25,
  city: "Salem"
};

const { name, age ,city} = user;

console.log(name); // "Dinesh"
console.log(age);  // 25
console.log(city);


// Destructuring an Array

const colors=["purple","red","rose"];
const [first,second]=colors;
console.log(first);

// Destructuring with Default Values

const { Name, Age, country = "India" } = { Name: "Dinesh", Age: 25 };
console.log(country); // "India"


// Renaming while Destructuring

const User = { name: "THENU" };
const { name: UserName } = User;

console.log(UserName); // "THENU"

// Destructuring in Function Parameters (Used in React Often)

function greet({ name, age }) {
  console.log(`Hello ${name}, age: ${age}`);
}

greet({ name: "Dinesh", age: 25 });