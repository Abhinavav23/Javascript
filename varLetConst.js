/*
var test;

test = 'value';

var test; //in var duplicate variables doesnt throw error

console.log(test);

var test1 = 'value1';

console.log(test1);

test = 'changedName';

console.log(test);


//ES 2015 or ES6 let and const were released
//let


let x = 10;
// let x; //cant do duplicate assignments in let (syntax error)
let z;
console.log(z);
z = 20;
console.log(z);
z = 50;
console.log(z);
z = 'abhinav';
console.log(z);
z = true
console.log(z);
console.log(x);




//const
// const a = 10;

// const b; //declaration of const and assignment on different lines not allowed
// b=20

// a = 20; override of value not possible in const




//functional scope or block scope

// var is a functional scope
// let and const is block scope

function myfunction(){
    // var a= 10;
    // var b = 20;
    // let r = 30;
    // let x =10;

    var x = 10;

    // let x = 10; // can't do
    // const x = 20; //can't do 

    {
        const x = 20;
        // var x =20;

        // console.log(x); // 20
        // var y = 20;
        // let x = 10;
        // const z = 30;
        // console.log(x);
        // console.log(z);
        // console.log(y); 
    }

    console.log(x); // 20
    console.log(z);
    console.log(y);
    
    console.log(r);

}

myfunction();


let a =10, b =20, c = 30 

console.log(a);
console.log(b);
console.log(c);
*/


//memory creation phase --->





// Hoisting

// case with var
console.log(a); //undefined
var a = 10;
console.log(a); //10

//case with let 

console.log(x); //error
// let x;
let x;
const y = 10;
console.log(x); // undefined
x =10;
console.log(x); // 10


// temporal dead zone
// you cant access a let or const variable till yoy define or initialize it



//in java

// print(a) // a is not defined

// int a;