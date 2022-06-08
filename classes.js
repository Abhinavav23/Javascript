

class Person{
    static address = 'Earth';
    houseNo = '42';
    address = 'Delhi' +houseNo;

    constructor(name, birthyear){
        this.myname = name,
        this.yob = birthyear
    }

    calculateAge = () => {
        return new Date().getFullYear() - this.yob
    }

    getAddress(){
        console.log('Address is Bihar' + address);
    }

}


let abhinav = new Person('Abhinav', 1990);
console.log(Person.address);
console.log(abhinav.address);
console.log(abhinav.calculateAge());


abhinav.address = 'Hyderabad'
console.log(abhinav.address + abhinav.houseNo);

console.log(abhinav.getAddress());










// function Person1(name){
//     this.name = name
// }

// function calculateAge(){

// }

// const calculateAge = () => {

// }


// step 1 ---> find the user ---> if pass --> pas
// step 2 ----> match  the password --> match --> if this also pass
// step 3 --> shows home page