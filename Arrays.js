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

*/

let arr = [3,5,7,20]

let newArrayMap = arr.map(function(anything){
   return anything*100
})


console.log(newArrayMap);
// console.log('original array');
// console.log(arr);

function double(arg){
    return arg*2
}

let newArr = []

for(let i = 0; i<arr.length; i++){
    let newel = double(arr[i])
    newArr.push(newel)
}























 