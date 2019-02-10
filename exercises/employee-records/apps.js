var employees = [];

function Employee (name, title, salary, status="Full Time") {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = status;
    
    this.print = function printEmployeeForm() {
        return `Employee Info: Name: ${this.name}, Title: ${this.title}, Salary: ${this.salary}, Status: ${this.status}`
    }
}

var sunny = new Employee("Sunny", "Dev", "$100k");
var emily = new Employee("Emily", "Web Dev", "$100k", "part time");
var danny = new Employee("Danny", "Project Manager", "$100k",);

// test lines vvv
// console.log(sunny.print());
// console.log(emily.print());
// console.log(danny.print());

console.log(sunny.print());

// employees.push(sunny, emily, danny);

// console.log(employees);

//constructor makes the object
// this refers to the object being made
// 'new' use constructor to make new object