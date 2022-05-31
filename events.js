/*

let Addbutton = document.getElementById('add');
let Subsbutton = document.getElementById('sunstract');

console.log(Addbutton);
console.log(Subsbutton);

function handler(){
    console.log('clicking on the add button');
}

function sunsHandler(){
    console.log('clicking on the subs button');
}

Addbutton.addEventListener('click', handler);
Subsbutton.addEventListener('click', sunsHandler);


//this is a arrow function/ callback funtion / anonyms function

Addbutton.addEventListener('mousemove', () => {
    console.log('mousemove');
});

let hovertime = 0;
let counttimes = document.getElementById('counttimes');


// mouseenter same as mouseover
// mouseleave same as mouseout


// 1. Subsbutton is a element on the dom
// 2. addEventListener is a method that adds eventlistener on the element
// 3. addEventListener takes arguments 1 one is eventname 2nd is function/handler/listerner

Subsbutton.addEventListener('mouseover', () => {
    if(hovertime<10){
        hovertime++
        console.log('hovering the mouse '+hovertime +' times');
        counttimes.innerText = hovertime
    }
});

function createTd(data){
    let td = document.createElement('td');
    td.innerText = data
    return td
}


function AddToCart(ev){
    console.log(ev);
    console.log('item added to cart');
}

function hovering(){
    console.log('item hovered');
}

let enteredName;

function nameChange(e){
    console.log(e);
    console.log(e.target.value);
    enteredName = e.target.value;
    console.log('changing the name');
}

function printName(){
    document.getElementById('NameContainer').innerText = enteredName;
}
*/

//Calculator +, -, *, /
// 4 buttons
// number should be entered by user ---> input tags -2
// Result ---> div


// event bubbling, event trickling/capturing, propogation

// 

function mostouter(){
    console.log('mostouter');
}

function outer(){
    // w.stopPropagation();
    console.log('outer');
}

function inner(ev){
    // ev.stopPropagation();
    console.log('inner');
}

function dblclick(){
    console.log('dounle click');
}


document.getElementById('mostouter').addEventListener('click', mostouter)
document.getElementById('outer').addEventListener('click', outer)
document.getElementById('inner').addEventListener('click', inner)



// event propogation

// 1. capturing phase  ---> statrts from the top most el or object window then goes all the way to the inner most el
// 2. target phase --> event goes to the target
// 3. buubling --> inner to outer





















/*
function createTr(d1,d2,d3,d4){
    let tr = document.createElement('tr');
    let data1 = createTd(d1);
    tr.appendChild(data1); // <td>1</td>
    tr.appendChild(createTd(d2)); // <td>1</td>
    tr.appendChild(createTd(d3)); // <td>1</td>
    tr.appendChild(createTd(d4)); // <td>1</td>

    <tr>
        <td>1</td>
        <td>abhonav</td>
        <td>deldi</td>
        <td>888888</td>
    </tr>
    return tr
}
 tbody.appendChild(tr);
 */
