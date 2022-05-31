// javascvript is single threaeded and syncronous

const { log } = require("async");

let a = 10;

function getData(){
    // fetch the api
}

let res = getData() //takes 50 sec

let b = 20

// whatever takes time we do those tasks asyncronously

function outer(){
    let a = 20;
    function inner(){
        console.log(a);
        console.log('inner');
    }
    console.log('outer');

    return inner
}

outer()();

console.log(x);
let x = 5;
