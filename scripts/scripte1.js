/*var myHeading = document.querySelector("h2");
myHeading.textContent = "Hello world!";*/
let count = 0;

function changeImage(src) {
    document.querySelector("img").src = "./images/" + src + ".png";
}
 
document.body.onmousedown = function () {
    count += 1;
    document.querySelector("#pop").textContent = count;
    changeImage("s0115_30_0");
}
document.body.onmouseup = function () {
    changeImage("s0115_30_0");
}
