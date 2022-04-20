const menu = document.querySelector(".menu");
const bars = document.querySelector("#menubars");
const closes = document.querySelector("#closemenu");

function MenuBar() {
    menu.setAttribute("style", "display: inline")
    bars.setAttribute("style", "display: none")
    closes.setAttribute("style", "display: inline")
}

function CloseBar() {
    menu.setAttribute("style", "display: none")
    bars.setAttribute("style", "display: inline")
    closes.setAttribute("style", "display: none")
}