let fetchUserId = (username) => {
    return new Promise((resolve, reject) => {
        if(username === 'abhinav') {
            // console.log('successfully fetched');
            setTimeout(() => {
                resolve('123');
            }, 2000) //success
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
            setTimeout(() => {
                res(friendlist);
            }, 4000)
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
            res(obj);
        }
        rej('friends not found')
    })
}

// fetchUserId('abhinav')
// .then((data) => {
//     console.log(data);
//     return getFriendList(data)
// })
// .then((data) => {
//     console.log(data);
//     return getMessages(data)
// })
// .then((data) => {
//     console.log(data);
// })



async function executePromise(){
    try{
        // console.log('start');
        let userId = await fetchUserId('abhinav11');
        // console.log(userId);
        let friendlist = await getFriendList(userId);
        // console.log(friendlist);
        let friendMsg = await getMessages(friendlist);
        // console.log(friendMsg);
        // console.log('end');
        return friendMsg
    } catch(e){
        console.log('error');
        console.log(e);
    }
}

// executePromise()
// .then((data) => {
//     console.log(data);
// })


// console.log(result);

// function test(){
//     console.log('test');
// }

// console.log(test());

// https://jsonplaceholder.typicode.com/users

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((res) => {
//     console.log(res); //response object
//     return res.json()
// })
// .then((data) => {
//     console.log(data);
// })

// console.log('start');

const getUser = async () => {
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await res.json();
    return data
}

getUser()
.then((data) => {
    // for(let i =0; i<data.length;i++){
    //     console.log(data[i]);
    // }
    console.log(data);
})

// console.log('end');




console.log('start');

setTimeout(() => {
    console.log('inside');
}, 0);

console.log('end');