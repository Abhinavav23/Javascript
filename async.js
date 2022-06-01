/*
// javascvript is single threaeded and syncronous

// task to extend the calculator
// 

let a = 10;

function getData(){
    // fetch the api
}

let res = getData() //takes 50 sec

let b = 20

// whatever takes time we do those tasks asyncronously







function print(){
    console.log('print this after some second');
}

function printOne(){
    console.log('one');
}

function printTwo(){
    console.log('two');
}

function printThree(){
    console.log('three');
}

//takes  first argument as the function to run 
// setTimeout(() => {
//     console.log('inside set Timeout');
// }, 3000);





console.log('start');


function test(){
    console.log('test');
    let res = setTimeout(() => {
        console.log('four');
        return 1000
        setTimeout(printTwo,2000)
    },4000)
    console.log(res);
}


test();
console.log('end');

let set1 =  setTimeout(printThree, 3000); //web Apis
console.log(set1);
let set3 = setTimeout(printOne, 2000);
console.log(set3);
let set4 = setTimeout(printTwo, 1000);
console.log(set4);
*/

function print(val){
    console.log(val);
}

//setimeout arguments
// 1. callback function
// 2. timer
// 3. argumrnts to the callback function

// setTimeout(print, 1000,'1')

// for(let i=1;i<5;i++){
//     setTimeout((val) => {
//         console.log(val);
//     },i*1000,i);
// }





// let arr = [1,2,4,5]

// function double(a){
//     return a*2
// }

// let newArr = arr.map(double)
// console.log(newArr);

let id = setInterval(() => {
    console.log('1');
},1000)

setTimeout(() => {
    clearInterval(id) 
}, 10000)



// start
// time: 00:00:00
// End


// pause
// clear