/*
// javascvript is single threaeded and syncronous

// task to extend the calculator
// 

let a = 10;

function getData(){
    // fetch the api
}

let res = getData() //takes 50 sec

let b = 20

// whatever takes time we do those tasks asyncronously







function print(){
    console.log('print this after some second');
}

function printOne(){
    console.log('one');
}

function printTwo(){
    console.log('two');
}

function printThree(){
    console.log('three');
}

//takes  first argument as the function to run 
// setTimeout(() => {
//     console.log('inside set Timeout');
// }, 3000);





console.log('start');


function test(){
    console.log('test');
    let res = setTimeout(() => {
        console.log('four');
        return 1000
        setTimeout(printTwo,2000)
    },4000)
    console.log(res);
}


test();
console.log('end');

let set1 =  setTimeout(printThree, 3000); //web Apis
console.log(set1);
let set3 = setTimeout(printOne, 2000);
console.log(set3);
let set4 = setTimeout(printTwo, 1000);
console.log(set4);


const { log } = require("async");

function print(val){
    console.log(val);
}

// clearTimeout(set1)

//setimeout arguments
// 1. callback function
// 2. timer
// 3. argumrnts to the callback function

// setTimeout(print, 1000,'1')

// for(let i=1;i<5;i++){
//     setTimeout((val) => {
//         console.log(val);
//     },i*1000,i);
// }





// let arr = [1,2,4,5]

// function double(a){
//     return a*2
// }

// let newArr = arr.map(double)
// console.log(newArr);

let id = setInterval(() => {
    console.log('1');
},1000)

setTimeout(() => {
    clearInterval(id) 
}, 10000)



// start
// time: 00:00:00
// End


// pause
// clear

// facebook login
// after clicking on login button
// 1. check that user is a valid user
// 2. get deatils of the user



function checkValidUser(username){
    // 
    if(username === 'abhinav'){
        console.log('valid user');
        setTimeout(getDetails, 1000)
    }else{
        console.log('invalid user');
    }
}

function getDetails(){
    // 
    console.log('details are .....');
    setTimeout(getMessages, 1000)
}

function getMessages(){
    console.log('messages are this');
}


setTimeout(checkValidUser, 1000)
setTimeout(checkValidUser, 2000);


let username = document.getElementById('user');
let pass = document.getElementById('pwd');


//callback hell

// 1. dependable Code
// 2. callbacks has to be called on e fater the other
// 3. it forms an arrow like structure by creating a nesting of callbacks
// 4. it is very unmanagable from and very less readable as well
// 5. to solve above problem we have promises

setTimeout((username, pwd) => {
    console.log('username',username);
    console.log('password',pwd);
    //database check
    let userId = '123'
    setTimeout((userid) => {
        console.log('id: '+userid);
        // databse check frienlist
        let friendlist = ['ram', 'shyam', 'Lakshman']
        setTimeout((friendlist) => {
            //databse check getmessage
            console.log(username);
            for(let i=0; i<friendlist.length;i++){
                console.log(friendlist[i]);
                setTimeout((friendName) => {
                    //ger from databse
                    console.log(friendName + ' meaage');
                }, i*1000, friendlist[i])
                console.log('message');
            }
        }, 2000, friendlist )
    }, 2000, userId)
}, 2000, 'abhinav', '12345')


// setTimeout(fetchusername, 2000);

function 1
function 2
function 3



// for(var i=1; i<6; i++){
//     setTimeout(() => {
//         console.log(i);
//     },i*1000)
// }

//question ---> why ????


// promises ---> 

// state --> pending ---> fullfilled  ---> Rejected
// outcome  -> success or failure

//creation of promises
*/

let fetchUserId = (username) => {
    return new Promise((resolve, reject) => {
        if(username === 'abhinav') {
            console.log('successfully fetched');
            resolve('123') //success
        } else{
            console.log('not fetched');
            reject('user not found') //error or failure
        }
    })
}

let getFriendList = (userId) => {
    return new Promise((res, rej) => {
        if(userId === '123'){
            let friendlist = ['ram', 'shyam', 'Lakshman']
            res(friendlist)
        } else{
            rej('userId is not valid')
        }
    })
}

let getMessages = (friendList) => {
    return new Promise((res, rej) => {
        if(friendList){
            let obj = {}
            for(let i=0; i<friendList.length;i++){
                obj[friendList[i]] = 'msg for ' +friendList[i]
            }
            res(obj)
        }
        rej('friends not found')
    })
}

// handling of promises

// fetchUserId('abhinav')
// .then((id) => {
//     console.log('successfuly fetched id');
//     console.log(id);
// })
// .catch((e) => {
//     console.log('unsuccessful in fetching id');
//     console.log(e);
// })

// fetchUserId('Suraj')
// .then((id) => {
//     console.log('successfuly fetched id');
//     console.log(id);
// })
// .catch((e) => {
//     console.log('unsuccessful in fetching id');
//     console.log(e);
// })


//chaining of promises
// fetchUserId('abhinav')
// .then((id) => {
//     console.log('successfuly fetched id');
//     console.log(id);
//     throwPartyPopper();
//     return getFriendList('123')
// })
// .then((fList) => {
//     console.log(fList);
//     return getMessages(fList);
// })
// .then((mesg) => {
//     console.log(mesg);
// })
// .catch((e) => {
//     console.log(e);
//     if(e==='user not found'){
//         console.log('failed at step 1' );
//     }else if(e==='userId is not valid'){
//         console.log('failed at step 2' );
//     } else{
//         console.log('friends not found');
//     }
// })
// .finally(() => {
//     console.log('finished');
// })

// calling multiple promises
// it takes aray of promises
// returns array of values if all the promises are successful
// if any of the promises get failed catch block will be executed
// if multiple promises are failing then whoever is the first one that will reach the catch block 

// Promise.all([fetchUserId('abhinav'),getFriendList('123'), getMessages()])
// .then((value) => {
//     console.log(value);
// })
// .catch((error) => {
//     console.log(error);
// })

Promise.allSettled([fetchUserId('abhinav'),getFriendList('123'), getMessages()])
.then((data) => {
    console.log(data);
})
.catch((e) => {
    console.log(e);
})


getMessages()
.then((data) => {
    console.log('success');
    console.log(data);
})
.catch((e) => {
    console.log('failure');
    console.log(e);
})

// Promise.race()
// Promise.any()















// for(let i= 0; i<5;i++){
//     setInterval(() => {
//         console.log(i);
//     },1000)
// }

// webAPis
// () => {
//     console.log('0');
// }, 1000


// () => {
// console.log('1');
// ,1000)

// () => {
//     console.log('2');
//     ,1000)

// () => {
// console.log('3');
// ,1000)

// () => {
// console.log('4');
// ,1000)

console.log('end');

/*
    for(let i=1; i<6; i++){
        function print(i){
            setTimeout(() => {
                console.log(i);
            },i*1000)
        }
        print(i);
    }

    console.log(i); //6 //last
    console.log('test');

    // var a = 10
    // function test(a){
    //     var a =20;
    //     function test2(){
    //         var a = 30;
    //         console.log(a); // 30
    //     }
    //     console.log(a); //10
    // }





// question ---> why ????

/*
// Web Apis
(i) => {
    console.log(i); //1
}
timer = 1sec

(i) => {
    console.log(i); //2
}
timer = 2sec

(i) => {
    console.log(i); //3
}
timer = 3sec

(i) => {
    console.log(i);
}
timer = 4sec

(i) => {
    console.log(i);
}
timer = 5sec
*/




















// Assignment -- Whack a mole
// let squareCollection = document.getElementsByClassName('square')
// let index = Math.floor(Math.random()*10);

// let mole = <img></img>
// squareCollection[index].innerHtml = mole

// function selectDiv(){
//     return squareCollection[index].innerHtml
// }

// let getDiv = selectDiv()

// div.addEventListener('click', (e) => {
//     let getDiv = selectDiv()
//     e.target = getDiv

// })

// setInterval(() => {
//     let getdiv = selectDiv();
// },1000)

// function matchmolewithdiv(){

// }



