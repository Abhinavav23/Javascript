// Json
// Javascript object notation

// to transfer the data


// shirt name is Allensoly 

let person1 = {
    name: 'Abhinav',
    age: 30,
    address: {city: 'Delhi', pin: 10010},
    instructor: true,
    classes: ['mon', 'tues', 'fri', 100, true],
    anything: null,
    calculate: {
        test: true,
        value: {
            val: 10
        }
    },
    myfunc: function(){
        console.log('it is function');
    }
}

// {
//     "name": "abhinav",
//     "age": 30,
//     "address": "Delhi"
// }

//for converting a JS object into JSON
// console.log(JSON.stringify(person1));

let jsonConverted = JSON.stringify(person1)

console.log(jsonConverted);

// to convert JSON into a JS object we use
let parsedObj = JSON.parse(jsonConverted)
console.log(parsedObj);

// json Supported types
// string
// objects
// arrays
// boolean
// numbers
// null


// function(){
    let x = 43;
    (function random(){
    x++; //temporal dead zone
    console.log(x);
    let x = 21;
    })();
// })();



let a = 10;

function test(){
    // let a = 20
    console.log(a); //10
}

test();