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



// In Normal function this keyword refers to the caller but if we have nested functions then it refers to the window objects
// 


var a = 10;

let b = 20;

function CalculateAge(yearOfBirth){
    console.log(this);
    function test(){
        console.log(this);
        console.log('calling test');
        function test2(){
            console.log(this);
        }
        test2();
    }
    test();
    return 2022 - yearOfBirth;
}

// let yob = 1990


var person = {
    name: 'Abhinav',
    yob: 1990,

    CalculateAge: function(){
        console.log(this); // person

        console.log(2022-this.yob);

        // let myThis = this // closure ---> lexical scoping


        // function calculatTimeLeftForRetirement(){
        //     console.log(this);// window
        //     // let age = 2022-myThis.yob
        //     // console.log(60-age);

        //     // let test2 = () => {
        //     //     console.log(this);
        //     //     console.log('test2');
        //     // }
        //     // test2();
        // }

        let calculatTimeLeftForRetirement = () => {
            console.log(this); // person
            let age = 2022 - this.yob
            console.log(60-age);
            let test2  = () => {
                console.log(this); //person
            }
            test2();
            function test3(){
                console.log(this);
            }
            test3()
        }
        calculatTimeLeftForRetirement()
    }
}

// 60 years

// CalculateAge(1990);


// window.CalculateAge(1990);


person.CalculateAge(1990);

// window.CalculateAge(1990);

// let CalculateDays = (startday) => {
//     console.log(this);
//     return 365 - startday
// }

// CalculateDays(23);


let myfunction = () => {
    console.log(this); // window

    function level1(){
        console.log(this); //window
    }

    let level1Arrow = () => {
        console.log(this); //window
    }

    level1Arrow();
    level1();
}
myfunction();
*/


let obj1 = {
    a: 10,
    b: 20,
    c: this,
    d: function(){
        console.log(this);
    },
    test1: () => {
        console.log(this); //window
        console.log(this.a); //
        console.log(this.b); //
    }
}


// function person(sdvbhshdv,dfgg){
//     this.
// }



// let ram = new person(gn)
// obj1.test1()
console.log(obj1.c);
// console.log(obj1.d());