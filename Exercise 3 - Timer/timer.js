// console.log("Exercise 3 - Timer");

const Time = document.getElementById("output");
const containerOfBtns = document.getElementById("myTimer");
const controlBtns = document.querySelector('.control')
 
let seconds = 20;
const myTimer =() => {
   Time.textContent = seconds;
   seconds--
}




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

controlBtns.addEventListener('click', e=> {
    if(e.target.id === "reset") {
        seconds = 0;
    }
    if(e.target.id === "start") {
        let myInterval = setInterval(myTimer, 1000);
        e.target.textContent = 'STOP'
        e.target.className = 'stop'
        return myInterval;
    }

    if(e.target.className === 'stop'){
        clearInterval(myInterval)
    }

})
