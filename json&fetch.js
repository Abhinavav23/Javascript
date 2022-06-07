// Json
// Javascript object notation

// to transfer the data


// shirt name is Allensoly 
/*
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


// // function(){
//     let x = 43;
//     (function random(){
//     x++; //temporal dead zone
//     console.log(x);
//     let x = 21;
//     })();
// // })();



let a = 10;

function test(){
    // let a = 20
    console.log(a); //10
}

test();

let obj1 = {
    firstanme: 'abhinav',
    lastname: 'kr',
    firstanme: 'dev',
    firstanme: 'kumatr',

}

let obj2 = {
    firstanme: 'dev',
    lastname: 'dev'
}
console.log(obj1.firstanme);

let arr = [{
    firstanme: 'abhinav',
    lastname: 'dev'
}, {
    firstanme: 'dev',
    lastname: 'dev'
}]


// Asyncronous code

// runs after the main thread / Global context /  is executed


// collecct the list of shirts 
// request ---> client
// response ---> server

// client ---> server ---> databases -->sql, mongodb, oracledb
// frontend ---> backend --> https://fetchshirts.com

//Ajax code

// Asyncronus javascript and xml

// const httpreq =  new XMLHttpRequest();
// httpreq.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
// httpreq.send();
// console.log(this.responseText);
*/

// browser's fetch api
// fetch APIs
// fetch is a promise


// steps to call and get data from an api
// 1. make a cal to fetch and pas the api url
// 2. fetch returns a promise so we can .then and recieve response object
// 3. properties like status, url, headers, ok are avialble,
// 4. call .json() on the response object
// 5. .json() methods again returns a promise
// 6. use .then() method and get access to the data


fetch('https://jsonplaceholder.typicode.com/posts')
.then((res) => {
    console.log(res); // response object
    return res.json(); // RETURNS A PROMISE
})
.then((data) => {
    console.log(data);
})
.catch((e) => {
    console.log(e);
})


// console.log(fetch('https://jsonplaceholder.typicode.com/posts'));
// console.log(test());

// methods in API
// 1. "GET" ---> getting the data
// 2. "POST" ---> sending the data
// 3. "PUT" ----> update the dat
// 4. "DELETE" ---> delete the data

const data1 = {
    username: "abhinav@gmail.com",
    password: "password",
}

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify(data1),
    headers: {
        'Content-Type': 'application/json'
    }
})
.then((res) => {
    return res.json()
})
.then((data) => {
    console.log(data);
})

// sample data on making call to fb login
// user = {
//     friendList: ['abhibav', 'sonu'],
//     userdetials: {
//         fullanme: 'abhinav kumar',
//         email: 'abhinav@gmail.com',
//         mobileNo: '6666666',
//         profilePic: 'htttps://imagfe.jpg'
//     },
//     message: {
//         abhinav: '',
//         sonu: '',
//         mahesh: ''
//     }
// }

// facebook api  --->
// will take the data
// search this username
// 1. found --> user is valid ---> match the password --->
// 2. not found --> user in invalid
//  ----> user not valid please try again


