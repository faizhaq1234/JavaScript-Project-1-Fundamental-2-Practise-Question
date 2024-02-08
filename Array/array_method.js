// Push operation:- means adding the elements 
let arr = [1,2,3,4,5];
arr.push(6);
console.log(arr);

// pop operation:- pop means removing the las elements
arr.pop();
console.log(arr);

// shift opeartion:- shift opeartion means removing the first elelemts of an array
let f = arr.shift();
console.log(f);
console.log(arr);

// unshift opeartion:-
arr.unshift(9);
console.log(arr);

// concatenation:- merging two or more elments
console.log("Concatenation Operations")
let a1 = [1,2,3,4,5];
let a2 = [3,4,5]
let a3 = a1. concat (a2);
console.log(a1, a2, a3);

let s =a3.join("@")
console.log(s);

// rebersing the elements
a3.reverse();
console.log(a3);

// indexing:- means we can know the index of the  number
console.log(a3.indexOf(4));  // 4 is present in 1 index

// slicing index
let arr1 = [1,2,3,4,5,6]
console.log(arr1.slice(2,5)); // 2nd index is 3 and 5th index-1 means 5 = [3,4,5]- final output

// splice indexing :- in this method we add elements wherever we want inside an index
arr1.splice(2, 0, 11);
console.log(arr1); 


