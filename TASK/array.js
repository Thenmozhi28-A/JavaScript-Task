

// function Employee(name,position,salary){
//     this.name=name;
//     this.position=position;
//     this.salary=salary;
// }
// Employee(name,position,salary);
// let Employee2=new Employee2("thenu","web developer",50000)
// console.log(new Employee2);

function Employee(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;

    this.getDetails = function () {
        return "Employee: " + this.name + ", Position: " + this.position + ", Salary: ₹" + this.salary;
    };
}

let employee1 = new Employee("Thenu", "Web Developer", 50000);

console.log(employee1.getDetails());

