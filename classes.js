
/*
class Person{
    // static country = 'Earth'
    country = 'India'
    static planet = 'Earth'
   constructor(name, address){
    this.myName = name,
    this.myAddress = address
   }

   printFullAddress(){
    console.log(this.myName + ' lives in ' +this.myAddress + this.country);
   }

   static PrintFullDetails(){
       console.log('This is a person class which allows you to create a person');
   }

}


let av = new Person('Abhinav', 'Delhi');
// console.log(av);
// console.log(av.country);
// av.printFullAddress();
// av.country = 'USA'
// av.printFullAddress();
// console.log(av.planet);

// av.PrintFullDetails();


// console.log(Person.planet);
// Person.planet = 'MArs';
// console.log(Person.planet);
Person.PrintFullDetails()


// let ram = new Person('Ram', 'Ayodhya');
// console.log(ram);
// console.log(ram.country);
// ram.country = 'USA';
// console.log(ram.country);



function CalculateSum(a,b){
    let first = a
    let second = b;

}

CalculateSum(2,3);


class Player{
    #speciality = 'Keeper';
    battingStyle = 'Right handed';
    constructor(name, game){
        this.myName = name;
        this.myGame = game;
    }

    #PrintSpecilaity(){
        console.log('speciality is ' +this.#speciality);
    }

    callPrintSpeciality(val){
        if(val <10){
            this.#PrintSpecilaity()
        }
    }

    getSpeciality(){
        this.#PrintSpecilaity()
        return this.#speciality
    }

    // method for changing the private property
    setSpeciality(speciality){
        if(speciality === 'finisher' | 'captain'){
            this.#speciality = speciality
        }
    }
}


let dhoni = new Player('MS Dhoni', 'cricket');
console.log(dhoni.battingStyle);
dhoni.battingStyle = 'left handed';
console.log(dhoni.speciality);
console.log(dhoni.getSpeciality());
dhoni.setSpeciality('finisher');
console.log(dhoni.getSpeciality());
dhoni.setSpeciality('bowler');
console.log(dhoni.getSpeciality());

// this will be undefined hence the result will be 'not a function'
// dhoni.PrintSpecilaity()




*/



class ContextClass{
    value = 'test'
    shity = ''
    constructor(name){
        this.name = name
    }

    ContextPrint(){

        console.log(this);
    }

    arrowContextPrint = () => {
        console.log(this);
    }

}
console.log(ContextClass);









// let context1 = new ContextClass();
// context1.ContextPrint();
// context1.arrowContextPrint();



// let obj = {
//     test: function(){
//         console.log(this);
//         var test1 = () => {
//             console.log(this);
//         }
//         test1()
//     },
//     name: 'ram'
// }

// obj.test()



function contextCalss(){
    let a = 10;
    let b = 10;

    function inner1(){
        let x = 10;
        let y =120;
    }
}
















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