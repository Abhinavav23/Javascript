// let arr = [1,2,3] // 2 to power 32 -2

// console.log(arr);

// methods

// let result = arr.push(10);
// console.log(result);
// console.log(arr[arr.length-1]);

// console.log(arr.length); //4




// console.log(arr);
// let res = arr.push(20);
// console.log(res);
// console.log(arr);

// console.log();



//pop method removes the element from the array and it also returns the removed element
// let removed = arr.pop()

// console.log('removed',removed);

// console.log(arr);

// arr.push('abhinav',false,233456, [1,2,34]);
// console.log(arr);
// arr.push(45);
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[3]);




// let arr1 = new Array(3)
// console.log(arr1);


// properties of an array
// length
// accesiing the values in arrays using index
// prototype - here properties and methods can be added for arrays - later
// constructor - creates an array

// let arr1 = new Array(3)
// console.log(arr1);
// arr1.push(10)
// console.log(arr1);
// arr1[0] = 1
// arr1[1] = 2
// arr1[2] = 45
// console.log(arr1);


// array methods
// push --> adds at the end
// pop --> delete from the end
// unshift --> add at the start index
// shift --> delete fromm the start index

// let arr = [5,6,7,8]

// console.log(arr); // 5 6 7 8

// arr.push(10) // 5 6 7 8 10

// console.log(arr);

// arr.unshift(20);// 20 5 6 7 8 10

// console.log(arr);

// arr.shift();

// console.log(arr);
/*
let arr = [5,6,7,8,9,10,11]

// delete arr[1]
// console.log(arr);

// slicing and splicing
// slicing never changes the originial array but it returns a new array
// takes two arguments 1st--starting index 2nd--ending index

let slicedarr1 = arr.slice(2,5);
let slicedarr2 = arr.slice(2);
console.log(arr);
console.log(slicedarr1);
console.log(slicedarr2);

let slicedarr = arr.slice(2, arr.length); //same as line 93
console.log(slicedarr2);

console.log(arr);
*/

// splicing
/*
let arr = [34,67,5,4,95,45,63,59]
console.log(arr);

let splicedArr = arr.splice(4,3);

console.log(arr); // 34 67 5 4 59

console.log(splicedArr); // 95 45 63

arr.splice(2);

console.log(arr);


// 1st argument is starting index
// 2nd is no of elements you ewant to remove
// then whatever you want to add


let arr = [5,8,11] //

arr.splice(2,0,9,10); //start from 11 and add 9 and 10 before that

console.log(arr);

arr.splice(1,0,6,7);

console.log(arr);

arr.splice(0,0,1,2,3,4);

console.log(arr);



let a = 10;

function double(el){
    return el*2
}

let res = double(a);
console.log(res);


let arr = [2,5,7,9]

double(2)
double(5)

double(7)
double(9)



// return should be [4,10,14,18]
// map is a method which takes a function and execute that function for each element of the array
let newArr = []

for(let i=0; i<arr.length; i++){
    newArr.push(arr[i]*2)
}

console.log(newArr);

console.log(arr);



let arr = [3,5,7,20]

let newArrayMap = arr.map(function(anything){
   return anything*100
})


console.log(newArrayMap);
// console.log('original array');
console.log(arr);

//internal implementation of map
function double(arg){
    return arg*2
}

let newArr = []

for(let i = 0; i<arr.length; i++){
    let newel = double(arr[i])
    newArr.push(newel)
}


// return element multiplied by its index 



// arr[0] = arr[0]*10
// arr[1] = arr[1]*10
// arr[2] = arr[2]*10
// arr[3] = arr[3]*10
// arr[4] = arr[4]*10 



// var handler = function(el, i, some){
//     console.log(some);
//     return el*i
// }

let arr1 = [14,43,9,46,67]

function handler(el){
    return el*10
}

let outputarr = arr1.map(handler)

console.log(outputarr);
console.log(arr1);


//doesnt return a new array
// let arr12 = arr1.forEach(handler) //undefined

let newArr= [];
arr1.forEach(function(el,i,arr){
    newArr.push(el*10)
})
console.log(newArr);



//filter

let original = [2011, 2051, 2022, 2003, 1999, 1857];

let filteredArr = original.filter(function(el){
    return el>2010 //2003 > 2010
})

// let filteredArr = original.map(function(el){
//     return el>2010 //2003 > 2010
// })

console.log(filteredArr);


console.log('original');
console.log(original);


let qualified = [15, 17, 12, 56, 67, 100]

let elementIndex = qualified.findIndex(function(age){
    return age>18
})

let element = qualified.find(function(age){
    return age>18
})

console.log(element);

//find --> 
//every --->
//findIndex --->
//some --->
//reduce --->



// spread operator in Javascript



// for(let i =0;i<arr1.length; i++){
//     arr2.push(arr1[i])
// }

// let arr2 should be [2,3,6,7,45,6,7,2,389]

let arr3 = []

let newarr = arr1.concat(arr2);

console.log(arr1);
console.log(arr2);

console.log(newarr);




let arr1 = [45,6,7,2,389]

let arr2 = [2,3,6,7]

console.log(arr1);
console.log(...arr1);


let arr3 = [...arr2,...arr1]

console.log(arr2);

console.log(arr3);
*/

// task: print even no from 2 to 16 in an array
// end res = [2,4,6,8,10,12,14,16]

let arr = [4,6,8,10,12]

let arr1 = [...arr,14,16]

let even = [2,...arr,...arr1]

// console.log(...arr);

// console.log(1,2,3,4,5);

// console.log(even);


let quality1 = {
    name: 'abhinav',
    role: 'instrauctor',
    dob: 23,
}

let quality2 = {
    place: 'Delhi',
    alive: true,
    teachingDays: ['mon', 'tues', 'wed']
}

let allqulities = {...quality1, ...quality2, teachingtime: 9}



// console.log(person1.name);
// console.log(person1.role);
// console.log(person1.dob);
// console.log(person1.name);
// console.log(person1.teachingDays);

console.log({...quality1});
console.log(quality2);

console.log(allqulities);

let array = [];
array.push()
console.log(array);
console.log(Array.prototype);

// Array.prototype.mypush = 'ifvdsfgsgfdgsh'

console.log(arr.mypush);

let arr2 = [1,4,56,79]

console.log(arr2.mypush);

Array.prototype.slice = function(){
    console.log('sfgdgd');
    return 4
}

console.log(arr2.slice());

// function test(){

// }
// // console.log(test.__proto__);
// // console.log(Function.prototype);


// let obj = {
//     name: 'abhi',
//     printName: function(){
//         console.log('Abhinav');
//     }
// }

// console.log(obj);































 