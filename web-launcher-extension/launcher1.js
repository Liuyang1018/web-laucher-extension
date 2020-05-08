var url1_2;
var url2_2;
var url3_2;
var url4_2;

var url5_2;
var url6_2;
var url7_2;
var url8_2;

chrome.storage.sync.get('user1', function (result) {
    // document.write('name:'+result['user1'].name);
    //url1
    url1_2 = result['user1'].link1_2;
    var name1_2 = result['user1'].name1_2;

    document.getElementById("bt1").innerText = result['user1'].name1_2;
    var bt1 = document.getElementById("bt1");
    
    url2_2 = result['user1'].link2_2;
    var name2_2 = result['user1'].name2_2;
    document.getElementById("bt2").innerText = result['user1'].name2_2;
    var bt2 = document.getElementById("bt2");
    

    url3_2 = result['user1'].link3_2;
    var name3_2 = result['user1'].name3_2;
    document.getElementById("bt3").innerText = result['user1'].name3_2;
    var bt3 = document.getElementById("bt3");
    

    url4_2 = result['user1'].link4_2;
    var name4_2 = result['user1'].name4_2;
    document.getElementById("bt4").innerText = result['user1'].name4_2;
    var bt4 = document.getElementById("bt4");
    
    url5_2 = result['user1'].link5_2;
    var name4_2 = result['user1'].name5_2;
    document.getElementById("bt5").innerText = result['user1'].name5_2;
    var bt5 = document.getElementById("bt5");
    
    url6_2 = result['user1'].link6_2;
    var name6_2 = result['user1'].name6_2;
    document.getElementById("bt6").innerText = result['user1'].name6_2;
    var bt6 = document.getElementById("bt6");
    
    url7_2 = result['user1'].link7_2;
    var name7_2 = result['user1'].name7_2;
    document.getElementById("bt7").innerText = result['user1'].name7_2;
    var bt7 = document.getElementById("bt7");
    

    url8_2 = result['user1'].link8_2;
    var name8_2 = result['user1'].name8_2;
    document.getElementById("bt8").innerText = result['user1'].name8_2;
    var bt8 = document.getElementById("bt8");
    


    //屏幕坐标
    var x1;//div1的x坐标
    y1up = 200;//204;
    y1middle = 569//455;
    y2middle_up = 385;//327;
    y2middle_down =751; //584;
    y1down = 912//700;
    let screenLog = document.querySelector('#screen-log');
    document.addEventListener('mousemove', logKey);
    function logKey(event) {
       /* screenLog.innerText = `
    Screen X/Y: ${event.screenX}, ${event.screenY}`;*/
    }
    var mausx;
    var mausy;;
    var press = false;
    var pressright = false;
    var pressleft = false;
    var press_ru = false;
    var press_lu = false;
    var press_rd = false;
    var press_ld = false;



    var count = 0;
    var activate_3 = false;
    var activate_1 = false;
    var activate_2 = false;
    var activate_4 = false;
    var activate_5 = false;
    var activate_6 = false;
    var activate_7 = false;
    var activate_8 = false;
    function logKey(event) {
      /*  screenLog.innerText = `
     Screen X/Y: ${event.screenX}, ${event.screenY}`;*/

        mausx = event.screenX;
        mausy = event.screenY;
        var screenwidth=screen.width;
        var screenheight=screen.height;
        x1=screenwidth-0.25*screenwidth/2;
       // console.log("screenwidth/screenheight:"+screenwidth+"/"+screenheight+"/"+x1);


        if (mausx > x1 && !press && mausy < y1down && mausy > y1up) {
            bt2.style.background = '#ffe1a9';
            bt4.style.background = '#ffe1a9';
            bt6.style.background = '#ffe1a9';
            bt8.style.background = '#ffe1a9';
            bt1.style.background = 'none';
            bt3.style.background = 'none';
            bt5.style.background = 'none';
            bt7.style.background = 'none';
        }
        if (pressright && mausx > x1 && mausy < y1middle && count < 2) {
            bt2.style.background = 'red';
            bt4.style.background = 'red';
            bt6.style.background = '#ffe1a9';
            bt8.style.background = '#ffe1a9';
            bt1.style.background = 'none';
            bt3.style.background = 'none';
            bt5.style.background = 'none';
            bt7.style.background = 'none';
        }
        if (pressright && mausx > x1 && mausy > y1middle && count < 2) {
            bt2.style.background = '#ffe1a9';
            bt4.style.background = '#ffe1a9';
            bt6.style.background = 'red';
            bt8.style.background = 'red';
            bt1.style.background = 'none';
            bt3.style.background = 'none';
            bt5.style.background = 'none';
            bt7.style.background = 'none';
        }

        if (press_ru && mausx > x1 && mausy > y2middle_up && mausy < y1middle && count < 3) {

            bt4.style.background = 'red';
            bt3.style.background = 'none';
            bt6.style.background = 'none';
            bt8.style.background = 'none';
            bt2.style.background = '#ffe1a9';
            bt1.style.background = 'none';
            bt7.style.background = 'none';
            bt5.style.background = 'none';

            activate_3 = false;
            activate_1 = false;
            activate_2 = false;
            activate_5 = false;
            activate_6 = false;
            activate_7 = false;
            activate_8 = false;
            activate_4 = true;

        }

        if (press_ru && mausx > x1 && mausy < y2middle_up && pressright && count < 3) {

            bt4.style.background = '#ffe1a9';
            bt3.style.background = 'none';
            bt6.style.background = 'none';
            bt8.style.background = 'none';
            bt2.style.background = 'red';
            bt1.style.background = 'none';
            bt7.style.background = 'none';
            bt5.style.background = 'none';

            activate_3 = false;
            activate_1 = false;
            activate_2 = true;
            activate_5 = false;
            activate_6 = false;
            activate_7 = false;
            activate_8 = false;
            activate_4 = false;
        }
        if (press_rd && mausx > x1 && mausy < y2middle_down && mausy > y1middle && pressright && count < 3) {

            bt4.style.background = 'none';
            bt3.style.background = 'none';
            bt6.style.background = 'red';
            bt8.style.background = '#ffe1a9';
            bt2.style.background = 'none';
            bt1.style.background = 'none';
            bt7.style.background = 'none';
            bt5.style.background = 'none';

            activate_3 = false;
            activate_1 = false;
            activate_2 = false;;
            activate_5 = false;
            activate_6 = true;
            activate_7 = false;
            activate_8 = false;
            activate_4 = false;
        }
        if (press_rd && mausx > x1 && mausy > y2middle_down && mausy < y1down && pressright && count < 3) {

            bt4.style.background = 'none';
            bt3.style.background = 'none';
            bt6.style.background = '#ffe1a9';
            bt8.style.background = 'red';
            bt2.style.background = 'none';
            bt1.style.background = 'none';
            bt7.style.background = 'none';
            bt5.style.background = 'none';

            activate_3 = false;
            activate_1 = false;
            activate_2 = false;;
            activate_5 = false;
            activate_6 = false;
            activate_7 = false;
            activate_8 = true;
            activate_4 = false;
        }
        //Leftpart
        if (mausx < x1 && !press && mausy < y1down && mausy > y1up) {

            bt1.style.background = '#ffe1a9';
            bt3.style.background = '#ffe1a9';
            bt5.style.background = '#ffe1a9';
            bt7.style.background = '#ffe1a9';
            bt2.style.background = 'none';
            bt4.style.background = 'none';
            bt6.style.background = 'none';
            bt8.style.background = 'none';

        }

        if (pressleft && mausy < y1middle && count < 2) {
            bt1.style.background = 'red';
            bt3.style.background = 'red';
            bt5.style.background = '#ffe1a9';
            bt7.style.background = '#ffe1a9';
            bt2.style.background = 'none';
            bt4.style.background = 'none';
            bt6.style.background = 'none';
            bt8.style.background = 'none';

        }
        if (pressleft && mausy > y1middle && count < 2) {
            bt1.style.background = '#ffe1a9';
            bt3.style.background = '#ffe1a9';
            bt5.style.background = 'red';
            bt7.style.background = 'red';
            bt2.style.background = 'none';
            bt4.style.background = 'none';
            bt6.style.background = 'none';
            bt8.style.background = 'none';

        }
        if (press_lu && mausx < x1 && mausy < y2middle_up && pressleft && count < 3) {

            bt4.style.background = 'none';
            bt3.style.background = '#ffe1a9';
            bt6.style.background = 'none';
            bt8.style.background = 'none';
            bt2.style.background = 'none';
            bt1.style.background = 'red';
            bt7.style.background = 'none';
            bt5.style.background = 'none';

            activate_3 = false;
            activate_1 = true;
            activate_2 = false;
            activate_5 = false;
            activate_6 = false;
            activate_7 = false;
            activate_8 = false;
            activate_4 = false;
        }

        if (press_lu && pressleft && mausx < x1 && mausy > y2middle_up && mausy < y1middle && count < 3) {

            bt4.style.background = 'none';
            bt3.style.background = 'red';
            bt6.style.background = 'none';
            bt8.style.background = 'none';
            bt2.style.background = 'none';
            bt1.style.background = '#ffe1a9';
            bt7.style.background = 'none';
            bt5.style.background = 'none';

            activate_3 = true;
            activate_1 = false;
            activate_2 = false;
            activate_5 = false;
            activate_6 = false;
            activate_7 = false;
            activate_8 = false;
            activate_4 = false;

        }
        if (press_ld && mausx < x1 && mausy < y2middle_down && mausy > y1middle && pressleft && count < 3) {

            bt4.style.background = 'none';
            bt3.style.background = 'none';
            bt6.style.background = 'none';
            bt8.style.background = 'none';
            bt2.style.background = 'none';
            bt1.style.background = 'none';
            bt7.style.background = '#ffe1a9';
            bt5.style.background = 'red';

            activate_3 = false;
            activate_1 = false;
            activate_2 = false;;
            activate_5 = true;
            activate_6 = false;
            activate_7 = false;
            activate_8 = false;
            activate_4 = false;
        }
        if (press_ld && mausx < x1 && mausy > y2middle_down && mausy < y1down && pressleft && count < 3) {

            bt4.style.background = 'none';
            bt3.style.background = 'none';
            bt6.style.background = 'none';
            bt8.style.background = 'none';
            bt2.style.background = 'none';
            bt1.style.background = 'none';
            bt7.style.background = 'red';
            bt5.style.background = '#ffe1a9';

            activate_3 = false;
            activate_1 = false;
            activate_2 = false;;
            activate_5 = false;
            activate_6 = false;
            activate_7 = false;
            activate_8 = true;
            activate_4 = false;
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
                if (mausy > y1middle && count == 2) {
                    press_rd = true;
                    press_ld = false;
                    press_lu = false;
                    press_ru = false;
                }
                if (mausy <= y1middle && count == 2) {
                    press_rd = false;
                    press_ld = false;
                    press_lu = false;
                    press_ru = true;
                }

            }
            if (mausx < x1) {
                pressleft = true;
                if (mausy > y1middle && count == 2) {
                    press_rd = false;
                    press_ld = true;
                    press_lu = false;
                    press_ru = false;
                }
                if (mausy <= y1middle && count == 2) {
                    press_rd = false;
                    press_ld = false;
                    press_lu = true;
                    press_ru = false;
                }

            }

            if (activate_5) {

                bt5.onclick = function () {
                    openNewTab5();
                }

                function openNewTab5() {
                    chrome.tabs.create({
                        url: url5_2
                    });
                }
            }
            else if (activate_6) {
                //window.open("2x2-1.html");
                bt6.onclick = function () {
                    openNewTab6();
                }

                function openNewTab6() {
                    chrome.tabs.create({
                        url: url6_2
                    });
                }
            }
            else if (activate_7) {
                bt7.onclick = function () {
                    openNewTab7();
                }

                function openNewTab7() {
                    chrome.tabs.create({
                        url: url7_2
                    });
                }
            }

            else if (activate_8) {
                bt8.onclick = function () {
                    openNewTab8();
                }

                function openNewTab8() {
                    chrome.tabs.create({
                        url: url8_2
                    });
                }
            }

            else if (activate_4) {
                bt4.onclick = function () {
                    openNewTab4();
                }

                function openNewTab4() {
                    chrome.tabs.create({
                        url: url4_2
                    });
                }
            }


            else if (activate_1) {
                bt1.onclick = function () {
                    openNewTab1();
                }

                function openNewTab1() {
                    chrome.tabs.create({
                        url: url1_2
                    });
                }
            }


            else if (activate_2) {
                bt2.onclick = function () {
                    openNewTab2();
                }

                function openNewTab2() {
                    chrome.tabs.create({
                        url: url2_2
                    });
                }
            }


            else if (activate_3) {
                bt3.onclick = function () {
                    openNewTab3();
                }

                function openNewTab3() {
                    chrome.tabs.create({
                        url: url3_2
                    });
                }
            }
        }

    }

});
var partrightkb = false;
var partleftkb = false;
var partlu = false;
var partld = false;
var partru = false;
var partrd = false;

var ch1 = false;
var ch2 = false;
var ch3 = false;
var ch4 = false;
var ch5 = false;
var ch6 = false;
var ch7 = false;
var ch8 = false;
var quren = 0;
window.onload = function () {
    document.onkeydown = function (event) {
        event = event || window.event;

        if (event.keyCode) {
            if (event.keyCode == 13) {
                quren++;
            }

            if (event.keyCode == 39 && quren == 0) {

                bt4.style.background = '#ffe1a9';
                bt3.style.background = 'none';
                bt6.style.background = '#ffe1a9';
                bt8.style.background = '#ffe1a9';
                bt2.style.background = '#ffe1a9';
                bt1.style.background = 'none';
                bt7.style.background = 'none';
                bt5.style.background = 'none';

                partrightkb = true;
                partleftkb = false;
            }
            if (event.keyCode == 37 && quren == 0) {

                bt4.style.background = 'none';
                bt3.style.background = '#ffe1a9';
                bt6.style.background = 'none';
                bt8.style.background = 'none';
                bt2.style.background = 'none';
                bt1.style.background = '#ffe1a9';
                bt7.style.background = '#ffe1a9';
                bt5.style.background = '#ffe1a9';
                partleftkb = true;
                partrightkb = false;
            }


            if (partrightkb && event.keyCode == 38 && quren == 1) {

                bt4.style.background = 'red';
                bt3.style.background = 'none';
                bt6.style.background = '#ffe1a9';
                bt8.style.background = '#ffe1a9';
                bt2.style.background = 'red';
                bt1.style.background = 'none';
                bt7.style.background = 'none';
                bt5.style.background = 'none';
                partru = true;
                partld = false;
                partrd = false;
                partlu = false;
            }
            if (partleftkb && event.keyCode == 38 && quren == 1) {

                bt4.style.background = 'none';
                bt3.style.background = 'red';
                bt6.style.background = 'none';
                bt8.style.background = 'none';
                bt2.style.background = 'none';
                bt1.style.background = 'red';
                bt7.style.background = '#ffe1a9';
                bt5.style.background = '#ffe1a9';
                partru = false;
                partld = false;
                partrd = false;
                partlu = true;
            }

            if (partrightkb && event.keyCode == 40 && quren == 1) {

                bt4.style.background = '#ffe1a9';
                bt3.style.background = 'none';
                bt6.style.background = 'red';
                bt8.style.background = 'red';
                bt2.style.background = '#ffe1a9';
                bt1.style.background = 'none';
                bt7.style.background = 'none';
                bt5.style.background = 'none';
                partru = false;
                partld = false;
                partrd = true;
                partlu = false;
            }

            if (partleftkb && event.keyCode == 40 && quren == 1) {

                bt4.style.background = 'none';
                bt3.style.background = '#ffe1a9';
                bt6.style.background = 'none';
                bt8.style.background = 'none';
                bt2.style.background = 'none';
                bt1.style.background = '#ffe1a9';
                bt7.style.background = 'red';
                bt5.style.background = 'red';
                partru = false;
                partld = true;
                partrd = false;
                partlu = false;
            }

            if (partlu && quren == 2 && event.keyCode == 38) {

                ch1 = true;
                ch2 = false;
                ch3 = false;
                ch4 = false;
                ch5 = false;
                ch6 = false;
                ch7 = false;
                ch8 = false;
                bt3.style.background = '#ffe1a9';
                bt1.style.background = 'red';
            }
            if (partlu && quren == 2 && event.keyCode == 40) {

                ch3 = true;
                ch1 = false;
                ch2 = false;

                ch4 = false;
                ch5 = false;
                ch6 = false;
                ch7 = false;
                ch8 = false;
                bt1.style.background = '#ffe1a9';
                bt3.style.background = 'red';


            }
            if (partru && quren == 2 && event.keyCode == 38) {

                ch2 = true;

                ch3 = false;
                ch1 = false;


                ch4 = false;
                ch5 = false;
                ch6 = false;
                ch7 = false;
                ch8 = false;
                bt4.style.background = '#ffe1a9';
                bt2.style.background = 'red';
            }
            if (partru && quren == 2 && event.keyCode == 40) {

                ch4 = true;

                ch3 = false;
                ch1 = false;
                ch2 = false;


                ch5 = false;
                ch6 = false;
                ch7 = false;
                ch8 = false;
                bt2.style.background = '#ffe1a9';
                bt4.style.background = 'red';
            }
            if (partld && quren == 2 && event.keyCode == 38) {

                ch5 = true;

                ch3 = false;
                ch1 = false;
                ch2 = false;

                ch4 = false;

                ch6 = false;
                ch7 = false;
                ch8 = false;
                bt7.style.background = '#ffe1a9';
                bt5.style.background = 'red';
            }
            if (partld && quren == 2 && event.keyCode == 40) {

                ch7 = true;

                ch3 = false;
                ch1 = false;
                ch2 = false;

                ch4 = false;
                ch5 = false;
                ch6 = false;

                ch8 = false;
                bt5.style.background = '#ffe1a9';
                bt7.style.background = 'red';
            }
            if (partrd && quren == 2 && event.keyCode == 38) {

                ch6 = true;

                ch3 = false;
                ch1 = false;
                ch2 = false;

                ch4 = false;
                ch5 = false;

                ch7 = false;
                ch8 = false;
                bt8.style.background = '#ffe1a9';
                bt6.style.background = 'red';
            }
            if (partrd && quren == 2 && event.keyCode == 40) {

                ch8 = true;

                ch3 = false;
                ch1 = false;
                ch2 = false;

                ch4 = false;
                ch5 = false;
                ch6 = false;
                ch7 = false;
                bt6.style.background = '#ffe1a9';
                bt8.style.background = 'red';

            }
            /* var part1color = document.getElementById("bt1").style.background;
             var part2color = document.getElementById("bt2").style.background;
             var part3color = document.getElementById("bt3").style.background;
             var part4color = document.getElementById("bt4").style.background;*/

            if (ch1 && event.keyCode == 13) {


                window.open(url1_2);
            }
            if (ch2 && event.keyCode == 13) {


                window.open(url2_2);

            }
            if (ch3 && event.keyCode == 13) {



                window.open(url3_2);

            }
            if (ch4 && event.keyCode == 13) {

                window.open(url4_2);


            }
            if (ch5 && event.keyCode == 13) {

                window.open(url5_2);


            }
            if (ch6 && event.keyCode == 13) {

                window.open(url6_2);


            }
            if (ch7 && event.keyCode == 13) {

                window.open(url7_2);


            }
            if (ch8 && event.keyCode == 13) {

                window.open(url8_2);


            }

        }
    }

}    
/*
var jump= document.getElementById("jump");
var jumpdiv=document.getElementById("jumpdiv");

jump.onclick=function(){
    jumpdiv.innerHTML='<iframe src="virtualkeyboard.html" width=100%,heigth=500px>11</iframe>';
   document.getElementById("bt1").style.display="none";
   document.getElementById("bt2").style.display="none";
   document.getElementById("bt3").style.display="none";
   document.getElementById("bt4").style.display="none";
   document.getElementById("bt5").style.display="none";
   document.getElementById("bt6").style.display="none";
   document.getElementById("bt7").style.display="none";
   document.getElementById("bt8").style.display="none";
   document.getElementById("jumpdiv").style.display="block";
}
var f4x4=document.getElementById("2x2");

f4x4.onclick=function(){
    //jumpdiv.innerHTML='<iframe src="setup.html">11</iframe>';
   document.getElementById("bt1").style.display="block";
   document.getElementById("bt2").style.display="block";
   document.getElementById("bt3").style.display="block";
   document.getElementById("bt4").style.display="block";
   document.getElementById("bt5").style.display="block";
   document.getElementById("bt6").style.display="block";
   document.getElementById("bt7").style.display="block";
   document.getElementById("bt8").style.display="block";
   document.getElementById("jumpdiv").style.display="none";

}  
*/

