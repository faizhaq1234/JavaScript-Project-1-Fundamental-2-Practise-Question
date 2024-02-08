// 1. One parameter, and a single return statement
const square = (x) => x*x;

// 2. Multiple parameter, and a single return expression
const sumOfNumbers = (x,y) => x+y;

// 3. Multiple statements in function expression
const sum = (x,y) => 
{
    console.log(`Adding ${x} and ${y}`);
}

// 4. Rendring an Object
const sumAndDifference =(x,y) => ({sum: x+y, difference: x+y})


const sayHello = name => console.log("Faiz" + name);
sayHello(" Haque")

const sayhello = (name, greeting) => console.log(greeting + " " +name);
sayhello("hello", "Faiz") //function calling 


const x={
    name: "Faiz Haque",
    role: "engineer",
    exp: "Fresher",
    show: function()
    {
        console.log(`The name is ${this.name} The Role is ${this.role}`);
    }
}
x.show();