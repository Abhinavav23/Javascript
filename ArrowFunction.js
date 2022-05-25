/*
function test(){
    console.log('test');
}

var test1 = function(){
    console.log('test1');
}

var test2 = () => {
    console.log('test2');
}

function TenMutiplier(a){
    return a*10
}

var TwentyMultiplier = function(a){
    return 20*a
}

//arrow functions
// released in ES6 in 2015
// newer way to write a function
// shorter syntax --> 
    // removed function keyword, 
    // removed curley braces, 
    // removed return keyword if there is only statement
    // remove braces if single parameter
//

var fiftyMultiplier = (a) => {
    return 50*a
}

var HundredMultiplier = (a) =>  {
    return 10;
}

var HundredMultiplier = a =>  a*100;

console.log(HundredMultiplier(20));

var add = (a,b) => a+b;
console.log(add(2,3));







// console.log(TenMutiplier(10));
// console.log(TwentyMultiplier(10));
// console.log(fiftyMultiplier(10));


// console.log(HundredMultiplier(10));

// console.log(console.log('sff'));

// let obj = {
//     print: function(){
//         console.log(
//             'somethinf'
//         );
//     }
// }


// Ram ---> Shyam ---> Gopi --> Sita

console.log(console);
// console.clear()
*/

var a = 10;

let b = 20;

function CalculateAge(yearOfBirth){
    console.log(this);
    function test(){
        console.log(this);
        console.log('calling test');
    }
    test();
    return 2022 - yearOfBirth;
}

var obj1 = {
    a: 20,
    CalculateAge: function(yearOfBirth){
        console.log(this);
        function test(){
            console.log(this);
            console.log('calling test');
        }
        test();
        return 2022 - yearOfBirth
    }
}

// CalculateAge(1990);
window.CalculateAge(1990);


obj1.CalculateAge(1990);

// window.CalculateAge(1990);

// let CalculateDays = (startday) => {
//     console.log(this);
//     return 365 - startday
// }

// CalculateDays(23);