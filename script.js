//Employee constructor------------------------------------------------------------------------------
function Employee(name, department) {
    this.name = name;
    this.department = department;
};

Employee.prototype.whoAreYou = function () {
    return `My name is ${this.name} and I am working in department ${this.department}`;
};

//Manager constructor-------------------------------------------------------------------------------
function Manager(name, employees) {
    Employee.call(this, name, "general");
    this.employees = employees || [];
    this.fireEmployee = function (name) {

        for (let i = 0; i < employees.length; i++) {
            if (employees[i].name === name) {
                employees.splice(i, 1);
            }
        }
    }
};
Manager.prototype = new Employee();

//SalesPerson constructor---------------------------------------------------------------------------
function SalesPerson(name, quota) {
    Employee.call(this, name, "sales");
    this.quota = quota;
};
SalesPerson.prototype = new Employee();


//Objekti primeri:----------------------------------------------------------------------------------
let nenad = new Employee("nenad", "general");
let dejan = new Employee("dejan", "sales");
let nikola = new Employee("nikola", "marketing");
let igor = new Manager("igor", [nenad, dejan, nikola]);

igor.fireEmployee("nenad");
console.log(igor);

console.log(igor.whoAreYou());

let petar = new SalesPerson("petar", 56);
console.log(petar);

console.log(petar.whoAreYou());



