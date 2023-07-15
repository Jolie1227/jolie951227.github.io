//left
let count1 = 0;
function changeImage1(src) {
    document.querySelector("#img1").src = "./images/" + src + ".png";}

document.body.onkeydown = function (e) {
    if (e.keyCode == 13) {
        count1 += 1;
    document.querySelector("#pop1").textContent = count1;
    changeImage1("s0115_30_0");}
}
document.body.onkeyup = function (e) {
    if (e.keyCode == 13) {
    changeImage1("s0115_25_0");}
}

//right
let count2 = 0;
function changeImage2(src) {
    document.querySelector("#img2").src = "./images/" + src + ".png";}

document.body.onmousedown = function () {
    count2 += 1;
    document.querySelector("#pop2").textContent = count2;
    changeImage2("s0115_30_0");
}
document.body.onmouseup = function () {
    changeImage2("s0115_25_0");
}