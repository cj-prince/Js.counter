let count = 0;
let Display = document.getElementById('num') ;
let countIncrease = document.querySelector('.btn-increase');
let countDecrease = document.querySelector('.btn-decrease');
let countReset = document.querySelector('.btn-reset');


countDisplay();

countIncrease.addEventListener("click", ()=>{
    count++;
    countDisplay()
    
} );

countDecrease.addEventListener("click", ()=>{
    count--;
   countDisplay()
});

countReset.addEventListener("click", ()=>{
    count = 0
    countDisplay()
})



// function updateDisplay(){
//     countDisplay.textContent = count;
// };
function countDisplay(){
    Display.innerHTML = count
}