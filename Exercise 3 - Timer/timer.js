// console.log("Exercise 3 - Timer");

const Time = document.getElementById("output");
const containerOfBtns = document.getElementById("myTimer");
const controlBtns = document.querySelector('.control')
 
let seconds = 20;
const myTimer =() => {
   Time.textContent = seconds;
   seconds--
}

function addOrSubtractTime(){
    containerOfBtns.addEventListener('click', e=> {
        e.preventDefault();
        if(e.target.id === 'minus-btn'){
            console.log('minus btn clicked')
            seconds -= 1
        }
        if(e.target.id ==='plus-btn'){
            console.log('minus btn clicked')
            seconds += 1
        }
        Time.textContent = seconds;
    })  
}

function resetTime(){
    controlBtns.addEventListener('click', e=> {
        if(e.target.id === "reset") {
            seconds = 0;
            Time.textContent = seconds;        
        }
   })
}

var myInterval;
controlBtns.addEventListener('click', e=> {
      if(e.target.id === "start") {
        myInterval = setInterval(myTimer, 1000);
        e.target.textContent = 'STOP'
        e.target.setAttribute('id', '')
        e.target.setAttribute('class', 'stop')
        return myInterval;
    }
    
    if(e.target.className === 'stop' || seconds == 0){
        e.target.textContent = 'START'
        e.target.setAttribute('id', 'start')
        e.target.setAttribute('class', '')
        clearInterval(myInterval)
        addOrSubtractTime();
        resetTime()
    }
})
