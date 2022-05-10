/*
console.log('start'); // execution phase

console.log(a); // execution phase

var a = 10; // 1. In creation phase a = undefined 2. execution pahse a =10

function test(){
    console.log('print test');
} //creation phase

var x = 100;

console.log('end'); //execution phase
console.log(a); //exe

test(); //invocation or calling the function


//Execution context

// 1. creation 
    // a = undefined

    // test = function(){
    //     console.log('test');
    // }

    // x = 100

// 2. execution phase
//  start


// console.log(a); //undefined
// var a = 'abhinav'
// console.log(a); //abhinav


console.log(printValue); //

function printValue(){
    console.log('value is this');

} //creation or memory creation

// console.log(printValue); //

// console.log();
*/




//Global Execution context

var a =10;
console.log('a');
var b =20
var c = 30

console.log(test);

function test(){
    var x = 20;
    var y = 40;
    var z = 50;
    console.log(x);
}

function test1(){
    var x1 = 20;
    var y1 = 40;
    var z1 = 50;
    console.log(x1);
}

// console.log(y); //1. undefined  2.cant find  3.

console.log(a);
console.log(b);




test();//finished

test1();


//global EC
// 1. memory creation
// a = undefined
// b = undefined
// c = undefined
// test = fn(){
//     var x = 20;
//     var y = 40;
//     var z = 50;
//     console.log(x);
// }

// 2. Code execution phase
// test()
//     new EC
//     1. memory creation
//         x= undefined
//         y = undefined
//         z = undefined
//     2. code execution
//     log()

// 3. test1()


var a = 10;
function test1(){
    var x = 1
    console.log('hvsv');
}

var b = 10;
function test2(){
    var x =1
    console.log('hvsv');
}
var c = 10;
test2()
test1()


/** stack empty
 * 
 * 1. craete GEC and push it in call stack
 * 2. memory creation for GEC
 * 3. code execution GEC
 * 4. creation of EC for test2 and pushed in call stack
 * 5. memory creation for EC for test2 
 * 6. code execution for test2
 * 7. test2 remove from the stack
 * 8. creation of EC for test1 and pushed in the stack
 * 9. memory creation for EC for test1
 * 10. code execution for test1
 * 11. remove test1 from the stack
 * 12. remove GEC from stack 
 * 
 * stack empty
 * 
 */




