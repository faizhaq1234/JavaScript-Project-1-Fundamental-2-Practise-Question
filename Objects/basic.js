let obj = {id:101, name: "Faiz", salary: 10000}

let  emp = new Object();
emp.id=102;
emp.name="Faiz";

console.log(emp);
console.log(obj);

// through Functions
function Emp(i,n,s)
{
    this.id=1;
    this.name=n;
    this.salary=s;
}
const e = new Emp (103, "Faiz", 10000);
console.log(e)


console.log(emp.id);
console.log(emp.name);

// updating emp
emp.salary=13000;
emp.id=13;
emp.name="Faiz Haque"


console.log(emp);
