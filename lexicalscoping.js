/*
var a = 'a';
// console.log(a); // 10
var b ='abhi'
var c = 'nav'

function test1(){
    var x = 'x'
    console.log(x); //20
    console.log(a, b, c); // 1. not defimned 2. 10 3. undefined
}

function test2(){
    var x1 = 'x1'
    // console.log(x); // 1. ref error 2. x
    console.log(x1); // x
    console.log(a, b, c); // a b c printed
}

// test1();
// console.log(x); // not accesible coz of lexical scoping
test1();
test2();

// GEC

// a , test1

// test1 EC
// x

*/

/*
var a = 10; 
var b = 'abhinav'
var c  = true

function test(x){
    a = 20
    console.log(a); // 20
    console.log(x);
    console.log(b); // 20
    console.log(c);
}

console.log(a); //10
test(3000);
console.log(a); // 20



//Functions

var a =20; // global 

function printNameAndRole(name, role){
    var x = 20;
    console.log(name+' is an ' +role +' of Antares batch started in Jan 2022');
    name = 'sourabh'
    console.log(name);
    console.log(a);
}

printNameAndRole('abhinav', 'instructor'); //function calling // function invocation

*/



// console.log(a); //undefined //execution phase
// var a = 10;
// var name = 10;
// console.log(a); //10



// function declaration
// function invocation
// function parameters
// function body
// local variables to the function


// first class functions
// in js functions are first class citizens
// in a  language  functions are first class function when you can do following


// 1. when you can assign functions as variables
// 2. you can pass functions as function parameters to another functions.
// 3. you  can return function from a function.

var a = function(){
    console.log('log me');
}

var b = function(){
    console.log('log b');
}

function abc(fn){
    fn()
    console.log(fn);
}

abc(b);
