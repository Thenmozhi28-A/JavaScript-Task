function Student(name,age,grade){
    this.name= name;
    this.age=age;
    this.grade=grade;
}
let Student1=new Student("thenu" , 21 ,100);
console.log(Student1);

function Product(name,price,category){
    this.name=name;
    this.price=price;
    this.category=category;
}
let Product1 = new  Product("laptop" , 500000 , "electronics");
console.log(Product1);
console.log("the product" + " " + Product1.name + " "+"costs" +" "+ Product1.price +" "+"and belong to"+" "+Product1.category);

function Book(title, author) {
    this.title = title;
    this.author = author;
    this.info = function() {
        console.log("Title: " + this.title + ", Author: " + this.author);
    }
}

let book1 = new Book("Wings of Fire", "APJ");
book1.info();
