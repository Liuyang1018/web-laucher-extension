
var url1;
var url2;
var url3;
var url4;
var name1;
var name2;
var name3;
var name4;

chrome.storage.sync.get('user1', function (result) {

    url1 = result['user1'].link1;
    name1 = result['user1'].name1;
    document.getElementById("bt1").innerText = result['user1'].name1;
    var bt1 = document.getElementById("bt1");

    url2 = result['user1'].link2;
    name2 = result['user1'].name2;
    document.getElementById("bt2").innerText = result['user1'].name2;
    var bt2 = document.getElementById("bt2");

    url3 = result['user1'].link3;
    name3 = result['user1'].name3;
    document.getElementById("bt3").innerText = result['user1'].name3;
    var bt3 = document.getElementById("bt3");

    url4 = result['user1'].link4;
    name4 = result['user1'].name4;
    document.getElementById("bt4").innerText = result['user1'].name4;
    var bt4 = document.getElementById("bt4");
});

//屏幕坐标
var x1;//div1的x坐标
y1up = 200;
y1middle = 555
y1down = 621;
let screenLog = document.querySelector('#screen-log');
document.addEventListener('mousemove', logKey);

var mausx;
var mausy;;
var press = false;
var pressright = false;
var pressleft = false;
var count = 0;
var activate_3 = false;
var activate_1 = false;
var activate_2 = false;
var activate_4 = false;


function logKey(event) {
   /* screenLog.innerText = `
     Screen X/Y: ${event.screenX}, ${event.screenY},${event.clientX}, ${event.clientY}`;*/

    mausx = event.screenX;
    mausy = event.screenY;

    var screenwidth = screen.width;
    var screenheight = screen.height;
    x1 = screenwidth - 0.25 * screenwidth / 2;
    console.log("screenwidth/screenheight:" + screenwidth + "/" + screenheight + "/" + x1);
    //var z1up=window.innerHeight;
    //var z2=z1up+70-z1up;
    //console.log("Browser page height"+z1up+"/"+z2);



    if (mausx > x1 && !press && mausy < y1down && mausy > y1up) {

        bt2.style.background = '#ffe1a9';
        bt4.style.background = '#ffe1a9';

        bt1.style.background = 'none';
        bt3.style.background = 'none';

    }
    if (pressright && mausx > x1 && mausy > y1middle && mausy < y1down && count < 2) {

        bt4.style.background = 'red';
        bt3.style.background = 'none';
        bt2.style.background = '#ffe1a9';
        bt1.style.background = 'none';

        activate_3 = false;
        activate_1 = false;
        activate_2 = false;
        activate_4 = true;

    }

    if (mausx > x1 && mausy > y1up && mausy < y1middle && pressright && count < 2) {

        bt2.style.background = 'red';
        bt3.style.background = 'none';
        bt4.style.background = '#ffe1a9';
        bt1.style.background = 'none';

        activate_3 = false;
        activate_1 = false;
        activate_2 = true;
        activate_4 = false;

    }

    //Leftpart
    if (mausx < x1 && !press && mausy < y1down && mausy > y1up) {

        bt1.style.background = '#ffe1a9';
        bt3.style.background = '#ffe1a9';
        bt2.style.background = 'none';
        bt4.style.background = 'none';

    }

    if (pressleft && mausx < x1 && mausy > y1up && mausy < y1middle && count < 2) {

        bt1.style.background = 'red';
        bt3.style.background = '#ffe1a9';
        bt4.style.background = 'none';
        bt2.style.background = 'none';
        activate_3 = false;
        activate_1 = true;
        activate_4 = false;
        activate_2 = false;
    }

    if (pressleft && mausx < x1 && mausy > y1middle && mausy < y1down && count < 2) {

        bt3.style.background = 'red';
        bt4.style.background = 'none';
        bt2.style.background = 'none';
        bt1.style.background = '#ffe1a9';
        activate_3 = true;
        activate_4 = false;
        activate_1 = false;
        activate_2 = false;

    }

}

document.onmousedown = function whichButton(event) {

    btnNum = event.button;

    if (btnNum == 0) {
        press = true;

        count++;

        //alert(mausx);
        if (mausx > x1) {
            pressright = true;
            //alert("right");

        }
        if (mausx < x1) {
            pressleft = true;


        }

        if (activate_3) {

            bt3.onclick = function () {
                openNewTab3();
            }

            function openNewTab3() {
                chrome.tabs.create({
                    url: url3
                });
            }
        }
        else if (activate_1) {
            //window.open("2x2-1.html");
            bt1.onclick = function () {
                openNewTab1();
            }

            function openNewTab1() {
                chrome.tabs.create({
                    url: url1
                });
            }
        }
        else if (activate_2) {
            bt2.onclick = function () {
                openNewTab2();
            }

            function openNewTab2() {
                chrome.tabs.create({
                    url: url2
                });
            }
        }
        else if (activate_4) {
            bt4.onclick = function () {
                openNewTab4();
            }

            function openNewTab4() {
                chrome.tabs.create({
                    url: url4
                });
            }
        }
    }
}





var partrightkb = false;
var partleftkb = false;
window.onload = function () {
    document.onkeydown = function (event) {
        event = event || window.event;

        if (event.keyCode) {
            if (event.keyCode == 39) {

                bt2.style.background = '#ffe1a9';
                bt4.style.background = '#ffe1a9';
                bt1.style.background = 'none';
                bt3.style.background = 'none';
                partrightkb = true;
            }
            if (event.keyCode == 37) {

                bt1.style.background = '#ffe1a9';
                bt3.style.background = '#ffe1a9';
                bt2.style.background = 'none';
                bt4.style.background = 'none';
                partleftkb = true;
            }


            if (partrightkb && event.keyCode == 38) {

                bt2.style.background = 'red';
                bt3.style.background = 'none';
                bt4.style.background = '#ffe1a9';
                bt1.style.background = 'none';

            }
            if (partleftkb && event.keyCode == 38) {

                bt1.style.background = 'red';
                bt2.style.background = 'none';
                bt3.style.background = '#ffe1a9';
                bt4.style.background = 'none';
            }

            if (partrightkb && event.keyCode == 40) {

                bt4.style.background = 'red';
                bt3.style.background = 'none';
                bt2.style.background = '#ffe1a9';
                bt1.style.background = 'none';
            }

            if (partleftkb && event.keyCode == 40) {

                bt3.style.background = 'red';
                bt2.style.background = 'none';
                bt1.style.background = '#ffe1a9';
                bt4.style.background = 'none';
                partrightkb = false;
                partleftkb = false;
            }
            var part1color = document.getElementById("bt1").style.background;
            var part2color = document.getElementById("bt2").style.background;
            var part3color = document.getElementById("bt3").style.background;
            var part4color = document.getElementById("bt4").style.background;

            if (part1color == "red" && event.keyCode == 13) {

                window.open(url1);
            }
            if (part2color == "red" && event.keyCode == 13) {

                window.open(url2);

            }
            if (part3color == "red" && event.keyCode == 13) {


                window.open(url3);

            }
            if (part4color == "red" && event.keyCode == 13) {
                window.open(url4);


            }

        }
    }

}





