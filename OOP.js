// object  --> a blueprint
// instances ---> created from that blueprint


// car ----> blueprint
// tyres
// engines

// instances of car hence will have all the propeerties of car like tyre and engine
// bolero ---> type car ,6 seat
// scorpio --> 6 seater
// homda city ---> 4 seater



// javascript has versions
// in year 2015 ES2015 or ES6

// ways to create objects

// 1. using object literals or {}
// 2. function constructors
// 3. object.create()
// 4. classes --->released in ES6


// function constructors
// 
/*
function Person(name, age, address){
    this.name = name;
    this.age = age;
    this.address = address;
    this.isPerson = true;
    this.printage = function(){
        console.log('your age is '+age);
    }
}

let ram = new Person('Ram', 20, 'Delhi');

// let ram = {
//     name: 'ram',
//     age: 20,
//     address: 'Delhi',
//     isPerson: true,
//     printAge: function(){

//     }
// }


console.log(ram.name);
console.log(ram.age);
console.log(ram.address);
console.log(ram.details);
ram.printage();

let shyam = new Person('shyam', 30); // {everything}
console.log(shyam);

// role of new keyword
// 1. creates an empty object 
// 2. refers the this to created object
// 3. return the this


let Lakshman = Person('Laksman', 40, 'Pune')
console.log(Lakshman);



// printage()

// let shyam = {
//     name: 'hsdfvbsd',
//     age: 20
// }


//value and reference types

let a = 10;

// console.log(a === b);
// b = 20;
// console.log(a === b);

let c = a; // 10

console.log(c);
console.log(a);

a = 100;
console.log(a);
console.log(c);

//Execution phase
a = 100;
c = 10

//value type
let x = 'abhi'
let y = x
console.log(x);
console.log(y);
x = 'abhinav'
// y = x to update y value
console.log(x);
console.log(y);


// reference types
// objects , arrays and functions





let arr1 = {a:1}
let arr2 = {a:2}

let arr3 = arr1;

console.log(arr1);
console.log(arr3);

console.log(arr1 === arr3);

// arr1.push(100);
arr1 = [1,2,4];

console.log(arr1); //
console.log(arr3);
console.log(arr1 === arr3);

// creation phase 
// #aa100 ---> [1,2,4]
// #aa101 ---> [1,2,3]
// #aa102 ---> [1,2,4]

// arr1 = #aa102
// arr2 = memory address ref #aa101 
// arr3 = memory address ref #aa100 


let arrOne = [3,4,5]

let arrTwo = [3,4,5]

let arrThree = arrOne


// mark and sweep algo

// memory address
// #10001 --->[3,4,5]
// #10002 ---->[3,4,5]
// #10003 ----> []


// mem creation
// arrOne = #10003
// arrTwo = #10002
// arrThree = #10001


arrOne = [2,3,4] // 

console.log(arrOne);
console.log(arrThree);

console.log(arrOne === arrThree);


// arrOne[i] === arrThree[i]


// console.log(arrOne === arrTwo); //false
// console.log(arrOne === arrThree); //  true

// console.log(arrOne);
// console.log(arrTwo);
// console.log(arrThree);

// arrThree.push(100); 
// arrOne.push(200);

// console.log(arrOne);
// console.log(arrThree);

*/

var nameOfPerson = 'something'
var YearOfBirth = 'year'

//Abstraction
function Person(name, YearOfBirth){
    this.nameOfPerson =  name ;
    this.YearOfBirth = YearOfBirth;
    
    //Abstraction
    const CalculateAge = function(){
        return 2022 - YearOfBirth
    }

    let prinDetails = function(){
        return 'This is '+name +'having age '+this.age
    }

    this.age = CalculateAge()
    this.details = prinDetails()
}

let Ram = new Person('Ram', 1995);
console.log(Ram);
console.log(Ram.nameOfPerson);
// console.log(Ram.YearOfBirth);
console.log(Ram.age);
// console.log(Ram.CalculateAge); //cant be accessed hence undefined
// console.log(sita); //not defined

let Lakshman = new Person('Lakshman', 1997);
console.log(Lakshman.nameOfPerson);
// console.log(Lakshman.YearOfBirth);
console.log(Lakshman.age);
// console.log(Lakshman.CalculateAge); can't be accessed






