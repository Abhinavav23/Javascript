//condtionals
/*
let num = 20;
if(num === 20) console.log(num);

*/

// == we will check value only 
// === we will check value as well as type

let num1 = '10';
let num2 = 10;

if(num1 === num2){
    console.log('numbers are equal');
}else{
    console.log('numbers are not equal');
}

/*
// let person = 'test';

// if(person === 'instructor'){
//     console.log('Person is a instrucor');
// }

// if(person === 'coordinator'){
//     console.log('Person is a coordinator');
// }

// if(person === 'mentor'){
//     console.log('Person is a mentor');
// }


// if(person === 'instructor'){
//     console.log('Person is a instrucor');
// }else if(person === 'coordinator'){
//     console.log('Person is a coordinator');
// } else{
//     console.log('Person is a mentor');
// }

// let number = 10;

let person = 'student';

switch(person){
    case 'instructor':
        console.log('Person is a instrucor');
    case 'test' :
        console.log('Person is a test');
        break;
    case 'mentor':
        console.log('Person is a mentor');
        break;
    case 'student':
        console.log('Person is a student');
    default:
        console.log('nothing is met');
}
*/

//loops
//for loop
for(var i=0;i<5;i++){
    console.log(i);
}

//while
let y =20

while(y>30){
    console.log(y);
    y--
}

do{
    console.log('this is do while');
} while(y>30)

//forEach
// for of
// for in