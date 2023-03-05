const button1 = document.querySelector("input")
const button2 = document.querySelectorAll("input")[1];
const body = document.getElementById("body")
const h3 = document.getElementById("h3")
button1.addEventListener("input",changeBackground)
button2.addEventListener("input", changeBackground)
function changeBackground() {
    body.style.background = "linear-gradient(to right," 
    +button1.value 
    + ", " 
    + button2.value+")"
    h3.textContent = body.style.background +";"
}