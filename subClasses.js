/*

class Person{
    address = 'Earth'
    #propertyPrivate = 'value1'
    constructor(name, yob){
        this.name = name;
        this.yob = yob;
    }

    calculateAge(){
        console.log(this.#propertyPrivate);
        console.log('from person');
        return new Date().getFullYear() - this.yob
    }

    static Method1(){
        console.log('calling method 1');
    }

    // exmaple implementaion
    static WhoIsYounger(person1, person2){
        let subs = person1.yob - person2.yob 
        if(subs>0){
            return person1.name
        } else{
            return person2.name
        }
    }
}

let av = new Person('Abhinav', 1990);
let suraj = new Person('Suraj', 1997);
console.log(Person.WhoIsYounger(av, suraj));
// console.log(av.calculateAge());

// classes are nothing but function in JS
// internally classes uses function only to depict or create classes
// console.log(typeof(Person));




class Player extends Person{
    
    // address = 'India' //overriding parent property
    constructor(name, yob, game){
        super(name, yob);
        this.game = game;
    }

    // overriding parent class method;
    // calculateAge(){
    //     console.log('from Player');
    //     return new Date().getFullYear() - this.yob
    // }

    YearLeftOfRetirement(){
        return 40-this.calculateAge()
    }

    printAddress(){
        console.log(this.address);
        // console.log(this.#propertyPrivate);
    }

    static AreSameGamePlayer(player1, player2){

    }

}

let dhoni = new Player('MS Dhoni', 1985, 'cricket');
let Nadal = new Player('Rafel Nadal', 1985, 'Tennis');
console.log(dhoni.YearLeftOfRetirement());
dhoni.printAddress();
// dhoni.Method1(); //wont work
Player.Method1()


// person1 ---> 1980
// person2 ---> 1995


// let obj = {
//     token: {
//         token: ''
//     }
// }

function areaOfRectangle(len, bred){
    return len*bred;
}

function areaOfRectangleV2(len){
    return function(bredth){
        return len*bredth;
    };
}









console.log(areaOfRectangle(10,15));
console.log(areaOfRectangle(10,10));
console.log(areaOfRectangle(10,20));
console.log(areaOfRectangle(10,5));

let reactngaleWithoneSideAs10 = areaOfRectangleV2(10);

console.log(reactngaleWithoneSideAs10(10));
console.log(reactngaleWithoneSideAs10(20));
console.log(reactngaleWithoneSideAs10(30));
console.log(reactngaleWithoneSideAs10(5));

console.log(areaOfRectangleV2(10)(20));
console.log(areaOfRectangleV2(15)(15));
console.log(areaOfRectangleV2(5)(20));
console.log(areaOfRectangleV2(25)(20));

*/

// Currying
function Converter(unitValue, value){
    return unitValue*value
}

function ConverterCurry(unitValue ){
    return function(value){
        return unitValue*value
    }
}

let kilometerToMeterConverter = ConverterCurry(1000);
kilometerToMeterConverter(5);

let MeterToCentiMeter = ConverterCurry(100);

console.log(Converter(1000,5));

console.log(Converter(100,10));
console.log(Converter(100,5));


function Calculator(operartion, value1, value2){

}

// function CalculatorCurry(operartion){
//     // if(operartion === mutiplocation )
//     return function(value1, value2){
//         return value1 something value2
//     }
// }

// let multiplier = CalculatorCurry(multiplication)


function foo() { 
    let x = y= 0;
    // let y = 0;
    // let x = y;
    x++; 
    y++; 
    return x; 
} 

// console.log(y);
// console.log(x);
console.log(foo(), typeof x, typeof y);

