/*
let array = [];
array.push()
console.log(array);
console.log(Array.prototype);

// Array.prototype.mypush = 'ifvdsfgsgfdgsh'

Array.mypush = 'test'
// console.log(arr.mypush);

let arr2 = [1,4,56,79]

console.log(arr2.mypush);

Array.prototype.slice = function(){
    console.log('sfgdgd');
    return 4
}

console.log(arr2.slice());

// function test(){

// }
// // console.log(test.__proto__);
// // console.log(Function.prototype);


// let obj = {
//     name: 'abhi',
//     printName: function(){
//         console.log('Abhinav');
//     }
// }

// console.log(obj);


let obj = {
    name: 'abhi',
    role: 'instructor'
}

let obj2 = {
    school: 'newton'
}


function Person(name){
    this.name = name;
    // this.CalculateSalary = function(){
    //     if(role === 'Admin'){
    //         return 500
    //     }
    //     if(role === 'user'){
    //         return 200
    //     }
    // }
}

Person.prototype.CalculateSalary =  function(){
    if(this.role === 'Admin'){
        return 10000
    }
    if(this.role === 'user'){
        return 20000
    }
}

Person.prototype.Property2 = 'something'

// Object.prototype.CalculateSalary = function(){
//     if(this.role === 'Admin'){
//         return 50
//     }
//     if(this.role === 'user'){
//         return 20
//     }
// }

let Ram = new Person('Ram');
console.log(Ram.someProperty);
// console.log(Ram.name);
// Ram.printDetail()
console.log(Ram.CalculateSalary());

let Shyam = new Person('Shyam');
console.log(Shyam);
// console.log(Shyam.name);
// // Shyam.printDetail()
console.log(Shyam.CalculateSalary());



function Employee(role){
    this.role = role;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.Property1 = 'sdfsdfs';

// Employee.prototype = Object.create(Person.prototype);

let abhinav = new Employee('Trainer');
console.log(abhinav.Property1);
console.log(abhinav.Property2);


Array.prototype.slice = function(){
   
}

*/

let obj1 = {
    name1: 'name1',
    add1: 'add1'
}

// obj1.prototype.someting = 'something'

let obj2 = {
    name2: 'name2',
    add2: 'add2',
    print: function(){
        console.log('printing');
    }
}

let obj3 = {
    name3: 'name'
}

Object.setPrototypeOf(obj1, obj2);

// obj1.__proto__ = obj2

// obj2.__proto__ = obj1

// cyclic not possible
// Object.setPrototypeOf(obj2, obj1);


console.log(obj1.add2);
// console.log(obj1.print());

// console.log(obj1);
console.log(obj1.__proto__.__proto__);
console.log(obj2);


let arr = [1,2,3];
console.log(arr.__proto__);
console.log(Array.prototype);


