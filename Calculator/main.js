let show = document.querySelector(".text");
let btns = document.querySelectorAll(".btn");
let clears = document.querySelector(".btn1");
let solve = document.querySelector(".solve");

function display(btn){
    console.log("it's worked");
    show.innerHTML += btn.target.value;
}

btns.forEach((btn, index)=> {
    btn.addEventListener("click",display)
})


function clear(){
    show.textContent = "";
}

clears.addEventListener("click",clear);

function calculate() {
    try {
        let result = eval(show.textContent);
        show.textContent = result;
    } catch (error) {
        show.textContent = "Error";
    }
}

solve.addEventListener("click",calculate);