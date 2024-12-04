const [inputHead, inputBody] = document.querySelectorAll('.color')
var h3 = document.querySelector("h3");
var body = document.querySelector("body");
var currentCSS = window.getComputedStyle(body).backgroundImage;
var randomButton = document.getElementById("random");

h3.textContent = currentCSS + ";";
console.log(currentCSS);

function setGradient() {
    var body = document.querySelector("body");
    body.style.background = "linear-gradient(to bottom, " + inputHead.value + ", " + inputBody.value + ")";
    h3.textContent = body.style.background + ";";
}
    
function setRandomGradient() {
    var randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
    var randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
    inputHead.value = "#" + randomColor1;
    inputBody.value = "#" + randomColor2;
    setGradient();
}

inputHead.addEventListener("input", setGradient);
inputBody.addEventListener("input", setGradient);
randomButton.addEventListener("click", setRandomGradient);
