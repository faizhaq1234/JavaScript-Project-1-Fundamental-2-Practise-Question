let emp =
{
    id: 102,
    name: "Faiz",
    salary: 24000

};
// in Object.keys it will return the Objects
let keys = Object.keys(emp);
console.log(keys);

// in Object.Values it will return the actual Values of the objects
let values = Object.values(emp);
console.log(values);

// Object.entries it will return all the objects
let entries = Object.entries(emp)
console.log(entries);

// Object.freeze in this property we can not make changes after applying Object.freeze

// Object.seal in this property we cam make changes after applying Object.seal
Object.seal(emp);
emp.id=100;
console.log(emp);

// Object.assign in this property it work some what same as Object.seal
let o = Object.assign({x:16},emp)
console.log(o);