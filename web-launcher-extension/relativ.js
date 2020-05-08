
var url1;
var url2;
var url3;
var url4;
var name1;
var name2;
var name3;
var name4;

var bt1 = document.getElementById("bt1");
var bt2 = document.getElementById("bt2");
var bt3 = document.getElementById("bt3");
var bt4 = document.getElementById("bt4");
chrome.storage.sync.get('user1', function (result) {

    url1 = result['user1'].link1;
    name1 = result['user1'].name1;
    document.getElementById("bt1").innerText = result['user1'].name1;


    url2 = result['user1'].link2;
    name2 = result['user1'].name2;
    document.getElementById("bt2").innerText = result['user1'].name2;


    url3 = result['user1'].link3;
    name3 = result['user1'].name3;
    document.getElementById("bt3").innerText = result['user1'].name3;


    url4 = result['user1'].link4;
    name4 = result['user1'].name4;
    document.getElementById("bt4").innerText = result['user1'].name4;

});

var box = document.querySelector(".box");
var pageX = document.getElementById("x");
var pageY = document.getElementById("y");
var mausx;
var mausy;

var partright = false;
var partleft = false;

function updateDisplay(event) {
    mausx = event.pageX;
    mausy = event.pageY;
    halbmausx = 271;
    halbmausy = 481;
   // pageX.innerText = mausx;
    //pageY.innerText = mausy;
    var partright = false;
}

box.addEventListener("mousemove", updateDisplay, false);
box.addEventListener("mouseenter", updateDisplay, false);
box.addEventListener("mouseleave", updateDisplay, false);

document.addEventListener('mousemove', logMovement);
function logMovement(event) {

    // while (log.childNodes.length > 128) log.lastChild.remove()
    if (event.movementX < -10) {
        event.movementY = false;
        bt1.style.background = '#ffe1a9';
        bt3.style.background = '#ffe1a9';
        bt2.style.background = 'none';
        bt4.style.background = 'none';
        partleft = true;
        partright = false;


    }
    if (event.movementX > 10) {
        event.movementY = false;
        bt2.style.background = '#ffe1a9';
        bt4.style.background = '#ffe1a9';
        bt1.style.background = 'none';
        bt3.style.background = 'none';
        partright = true;
        partleft = false;


    }
    ;



    if (partright && event.movementY > 5) {
        //partleft = false;
        event.movementX = false;
        bt4.style.background = 'red';
        bt3.style.background = 'none';
        bt2.style.background = '#ffe1a9';
        bt1.style.background = 'none';
    }
    if (partright && event.movementY < -5) {
        //partleft = false;
        event.movementX = false;
        bt2.style.background = 'red';
        bt1.style.background = 'none';
        bt4.style.background = '#ffe1a9';
        bt3.style.background = 'none';
    }
    if (partleft && event.movementY > 0) {
        //partright = false;
        event.movementX = false;
        bt3.style.background = 'red';
        bt2.style.background = 'none';
        bt1.style.background = '#ffe1a9';
        bt4.style.background = 'none';
    }
    if (partleft && event.movementY < -0) {
        //partright = false;
        event.movementX = false;
        bt1.style.background = 'red';
        bt2.style.background = 'none';
        bt3.style.background = '#ffe1a9';
        bt4.style.background = 'none';

    }
}

//window.addEventListener('mousedown', onMouseDown, false);
document.onmousedown =function whichButton(event) {
    var part1color = document.getElementById("bt1").style.background;
    var part2color = document.getElementById("bt2").style.background;
    var part3color = document.getElementById("bt3").style.background;
    var part4color = document.getElementById("bt4").style.background;
    var btnNum = event.button;
    if (btnNum == 0 && part1color == 'red') {
        window.open(url1);
    }
    else if (btnNum == 0 && part2color == 'red') {
        window.open(url2);
    }
    else if (btnNum == 0 && part3color == 'red') {
        window.open(url3);
    }
    else if (btnNum == 0 && part4color == 'red') {
        window.open(url4);
    }

}