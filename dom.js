/*

console.log(document.URL);
console.log(document.domain);
console.log(document.body);
console.log(document.head);
document.title = "My new Title"

console.log(document.all);
console.log(document.all[5]);

//return a HTML collectiuon looks like an array
console.log(document.links);
console.log(document.forms);
console.log(document.images.length);
document.write('This is from write in script');


//selectors of Dom elements 

let header = document.getElementById('main-header');
console.log(header);

//returns HTML collection
let headerCont = document.getElementsByClassName('header-container');
console.log(headerCont);

let divs = document.getElementsByTagName('div');
console.log(divs);


//selects the first match and returns a single element
let divsUsingquery = document.querySelector('div');
console.log(divsUsingquery);

let selectusingClassName = document.querySelector('.test');
console.log(selectusingClassName);

let selctUsingId = document.querySelector('#header-title');
console.log(selctUsingId);

let alldiv = document.querySelectorAll('div');
console.log(alldiv);


let cardandtest = document.querySelector('div.card.test');


console.log(cardandtest);

//attribute selector
let input  = document.querySelector('input[type="password"]')
console.log(input);

*/

let selectPara = document.querySelector('p.header-container');
console.log(selectPara);
selectPara.innerText = 'this is a changed content'

let selectedDiv  = document.querySelector('div')
selectedDiv.innerHTML = '<h3>Abhinav</h3>'

let listItems = document.getElementsByClassName('product')

for(let i = 0; i<listItems.length;i++){
    listItems[i]
}