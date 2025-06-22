// Rest in Object Destructuring

const user = {
  name: "Dinesh",
  age: 25,
  city: "Salem"
};

const { name, ...others } = user;

console.log(name);    // "Dinesh"
console.log(others);  // { age: 25, city: "Salem" }

// Rest in Array Destructuring

const colors = ["red", "green", "blue", "yellow"];

const [first, ...restColors] = colors;

console.log(first);       // "red"
console.log(restColors);  // ["green", "blue", "yellow"]


// Spread in Array

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

console.log(arr2); // [1, 2, 3, 4, 5]


// Spread in Object

const User = { name: "Dinesh", age: 25 };
const newUser = { ...User, city: "Salem" };

console.log(newUser);
// { name: "Dinesh", age: 25, city: "Salem" }


// Spread in Functions (React props use this)

function sum(a, b, c) {
  return a + b + c;
}

const nums = [9, 2, 3];
console.log(sum(...nums)); // 14



// Ternary Operator?

const age = 10;

const result = age >= 18 ? "Adult" : "Child";
console.log(result); // "Adult"

// const Num = 4;
// const Result= Num >= 5 ? "true":"false";
// console.log(Result);

//Full Form

let loggedIn = true;
let msg;

if (loggedIn) {
  msg = "Welcome!";
} else {
  msg = "Please log in";
}
console.log(msg);

// //Short form
// const loggedIn = true;
// const msg = loggedIn ? "Welcome!" : "Please log in";

// console.log(msg); // "Welcome!"


//Ternary inside JSX (used in React)

// const isLoggedIn = true;

// return (
//   <div>
//     { isLoggedIn ? <p>Welcome, Dinesh!</p> : <p>Please log in</p> }
//   </div>
// );



const temp = 30;
const weather = temp > 25 ? "Hot" : "Cool";

console.log(weather);



// Function

function greet(name) {
  return `Hello, ${name}`;
}
console.log(greet("Dinesh")); // Hello, Dinesh


//Arrow 

// const sayHi = () => {
//   return "Hi!";
// };

// const greet = (name) => {
//   return `Hello, ${name}`;
// };


//shortext arrow

// const SayHi = () => "Hi!";

// const greet = name => `Hello, ${name}`;


// //multiple parameters

const add = (a, b) => a + b;

console.log(add(5, 3)); // 8


// //no parameters


// const welcome = () => "Welcome, Dinesh!";

// //practice

// function double(n) {
//   return n * 2;
// }

// //practice
// const double = n => n * 2;

// //Logical

const username = "" || "Guest";
console.log(username); // "Guest"

const Name = "Dinesh" || "Guest";
console.log(Name); // "Dinesh"

const isLoggedIn = true;
const message = isLoggedIn && "Welcome Dinesh!";
console.log(message); // "Welcome Dinesh!"

const IsLoggedIn = false;
const Message = IsLoggedIn && "Welcome!";
console.log(Message); // false

const userName = null ?? "Guest";
console.log(userName); // "Guest"

const Username = "" ?? "Guest";
console.log(Username); // ""

//Optional Chaining

const User$ = {};
console.log(User$.address?.city); 
// ✅ Output: undefined (no error)


// const user = {
//   name: "Dinesh",
//   address: {
//     city: "Salem"
//   }
// };

// console.log(user.address?.city); // "Salem"
// console.log(user.contact?.phone); // undefined (no error)


const users = [];
console.log(users[0]?.name); // undefined (safe)


const person = {
  greet() {
    return "Hello";
  }
};

console.log(person.greet?.()); // "Hello"
console.log(person.sayHi?.()); // undefined (no error)


const user$ = {
  name: "Dinesh",
  profile: {
    bio: "Designer"
  }
};

return (
  <div>
    <p>{user$.profile?.bio}</p>   // "Designer"
    <p>{user$.contact?.email}</p> // No error, just empty
  </div>
);


const Name$ = user?.Name$?.toUpperCase(); // ✅ safe

//Map

const numbers = [1, 2, 3];

const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6]



array.map((item, index) => {
  return someValue;
});



const names = ["Dinesh", "Priya", "Rahul"];

const greetings = names.map(name => `Hello, ${name}!`);

console.log(greetings);
// ["Hello, Dinesh!", "Hello, Priya!", "Hello, Rahul!"]



const fruits = ["apple", "banana", "orange"];

fruits.map((fruit, index) => {
  console.log(`${index + 1}. ${fruit}`);
});



//Filter

array.filter((item, index) => {
  return condition;
});



const Numbers = [1, 2, 3, 4, 5];

const even = Numbers.filter(num => num % 2 === 0);

console.log(even); // [2, 4]


const Names = ["Dinesh", "Divya", "Raj", "David"];

const Result = Names.filter(Name => Name.startsWith("D"));

console.log(result); // ["Dinesh", "Divya", "David"]


const words = ["hi", "hello", "hey", "greetings"];

const longWords = words.filter(word => word.length > 3);

console.log(longWords); // ["hello", "greetings"]


const Users = [
  { name: "Dinesh", active: true },
  { name: "Priya", active: false },
  { name: "Rahul", active: true }
];

return (
  <ul>
    {Uers
      .filter(User => User.active)
      .map((User, index) => (
        <li key={index}>{User.name}</li>
      ))}
  </ul>
);


//Reduce

array.reduce((accumulator, currentValue) => {
  return updatedValue;
}, initialValue);


const Numbers$ = [10, 20, 30];

const total = Numbers$.reduce((acc, curr) => acc + curr, 0);

console.log(total); // 60


const Nums = [2, 3, 4];

const product = Nums.reduce((acc, curr) => acc * curr, 1);

console.log(product); // 24


const Words = ["Hi", "Dinesh", "!"];

const Message$ = Words.reduce((acc, Word) => acc + " " + Word, "");

console.log(Message$); // " Hi Dinesh !"











