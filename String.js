/*
var name = 'abhinav';
var role = "Instructor";

// let str = new String("myNAme")
// console.log(...str);

console.log(name.length);
console.log(role);
// console.log(str);

let statement = "It's me";
console.log(statement);

let statement1 = "this is \"abhinav\""
let statement2 = "this is \'abhinav\'"
let statement3 = "this is \\abhinav\\"
console.log(statement1);
console.log(statement2);
console.log(statement3);



// \n, \f, \t


// string methods

let str1 = 'abcdefghij';

let str2 = str1.slice(-9,-2);
console.log(str1);
console.log(str2);

//substring is similar to slice but you cant use negative values

let str3 = str1.substring(0,5);
console.log(str3);


// substr similar to splice
let str4 = str1.substr(4,3)
console.log(str4);
*/

// abhinav@gmail.com

// abhiAAV@gmail.com
// string are immutable as well as case sensitive.
let statement = 'thIs is abhinav';
// This / tHIs, 
// this and This are different;

let newStatement = statement.replace("ABHINAV", "it");
console.log(newStatement);
console.log(statement);

let userName = 'abhISnAv'
let useNameModified = userName.toUpperCase();
console.log(userName.toUpperCase());


let str2 = '                    HI!!!!'
console.log(str2);
let trimmed = str2.trim();
console.log(trimmed);

//explore search

// Date
/*
let today = new Date();

console.log(today);

let day1 = new Date(2020,13,15,11,30,45,20);
console.log(day1);

// pass atleasst 2
let day2 = new Date(2004,13); // 15 feb 2005
console.log(day2);


//1 Jan 1970

let mili = new Date(5000000000000);
24*60*60*1000
console.log(mili.toDateString());
*/


let date = new Date();
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getMinutes());
console.log(date);







