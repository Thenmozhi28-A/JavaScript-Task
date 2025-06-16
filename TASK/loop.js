for(let i=1;i<=10;i++){
    console.log(i);
}

for(let i=5; i>=0; i--){
console.log(i);
}

let Num = Number(prompt("Enter a number:"));
for (let i = 1; i <= 10; i++) {
    console.log(Num + " x " + i + " = " + (Num * i));
}


for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

let count = 0;
let num;

do {
    num = Number(prompt("Enter a number (0 to stop):"));
    if (num !== 0) {
        count++;
    }
} while (num !== 0);

console.log("Total numbers entered: " + count);
