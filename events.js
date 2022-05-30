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
Subsbutton.addEventListener('mouseover', () => {
    if(hovertime<10){
        hovertime++
        console.log('hovering the mouse '+hovertime +' times');
        counttimes.innerText = hovertime
    }
});



