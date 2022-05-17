// closures
// function along with its lexical scope is called a closure
/*
function calculator(){
    var a = 10;
    var b = 20;

    function multiplier(){
        var b = 20;
        console.log(a);
        console.log(b);
    }

    function addition(){
        console.log(a);
        console.log(b);
    }

    function division(){
        console.log(a);
    }

    multiplier()
    addition()
}

calculator()

*/

function multiplier(){
    var a = 10;
    var b = 20; // this variable gets garbage collected
    var a = a+b;
    var c = 20;

    function printA(){
        a = a+b;
        console.log(a);
    }

    function printB(){
        a = a+b;
        console.log(a);
    }

    printB()

    function printC(){
        a = a+b;
        console.log(a);
    }
    
    printC()

    console.log(b);
    // return printA
}

// EC

// 1. creation
// 2. execotion

// a = 30
// b = 20

// ---

// ----

var result = multiplier();
console.log(result);


// let x = 10
// let x = 10
// let x = 10
// let x = 10
// let x = 10
// let x = 10

result();

// undefined()
