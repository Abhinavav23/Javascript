// Higher order functions are functions where we can pass functions as arguments 
// or we can return function from a function
/*
// here --> Outer is hof
function Outer(oneFunction){
    let a = 10; 
    let b = 20;
    console.log(a+b);
    oneFunction()
    
}

// function printAddress(){
//     console.log('Address ');
//     console.log('city is Bangalore');
//     console.log('pin is 234235');
//     console.log('state is katnataka');
// }

Outer(printAddress); //

function printAddress(){
    console.log('Address ');
    console.log('city is Bangalore');
    console.log('pin is 234235');
    console.log('state is katnataka');
}

// Outer(printAddress);


// 1. 30 and undefined

// 2. 30 and error -- true

// 3. 30 amd all values 

// 4. 30 and whole function


function printDetails(){
    
    console.log('Abhinav');
    
    console.log('Delhi');
    
    console.log('Instructor');

    return 'abhinav'
}

var output = printDetails()

console.log(output);
*/
// console.log(printDetails());

function PrintName(){
    console.log('name is abhinav');
    return function(){
        console.log('address is delhi');
        return 10
    }

}

var address = PrintName(); 

var result = address()

// result(); //error

console.log(result);

// result
// 1. name is abhinav
// 2. name is abhinav and address
// 3. 

// PrintName()();


// console.log(PrintName()());
