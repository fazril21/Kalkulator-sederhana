const fungsiAll = document.getElementById('fungsiAll') ;
const fungsiOne = document.querySelector('#fungsiOne') ;
const number = document.querySelectorAll ('.number');
const arithmetic = document.querySelectorAll ('#arithmetic');
const hasil = document.querySelector('.hasil')
const equals = document.querySelector('#equals')

let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false
let arit = "";
let isArit = 0;



for(let i = 0; i < number.length ; i++ ){
    number[i].addEventListener('click' , (e)=>{
        let atr = e.target.getAttribute('value');
        if(isFirstValue === false){
            getFirstValue(atr)
        }if(isSecondValue === false){
            getSecondValue(atr)
        }
    })
}

function getFirstValue(el){
    hasil.innerHTML = "";
    firstValue +=el;
    hasil.innerHTML = firstValue
    firstValue = +firstValue
}
function getSecondValue(el){
    if(firstValue != "" && arit != ""){
        secondValue +=el
        hasil.innerHTML = secondValue
        secondValue = +secondValue
    }
}

function getAritmethic(){
    for (let i = 0 ; i < arithmetic.length ; i++){
        arithmetic[i].addEventListener('click', (e) => {
            arit = e.target.getAttribute('value');
            isFirstValue = true
            arithmetic.style.background = 'blue'
        })
    }
}

getAritmethic()


equals.addEventListener('click' , ()=>{
    hasil.innerHTML ="";
    if (arit === "+"){
        hasilValue = firstValue + secondValue
    }
    else if (arit === "-"){
        hasilValue = firstValue - secondValue
    }
    else if (arit === "/"){
        hasilValue = firstValue / secondValue
    }
    else if (arit === "*"){
        hasilValue = firstValue * secondValue
    }
    hasil.innerHTML = hasilValue
    firstValue =hasilValue
    secondValue =""
})


function checkResultLength(){
    hasilValue = JSON.stringify(hasilValue);

    if(hasilValue.length >+ 8){
        hasilValue = JSON.parse(hasilValue)
        hasil.innerHTML = hasilValue.toFixed(5)
    }
}

fungsiAll.addEventListener('click', ()=>{
    hasil.innerHTML = 0;

    firstValue = "";
    isFirstValue = false;
    secondValue = "";
    isSecondValue = false
    arit = "";
    hasilValue = 0;
})