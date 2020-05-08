document.onload = function strDatazero() {
    value = "";
}

var oBtn = document.getElementsByClassName("numb");//按键
var outp1 = document.getElementById("outp1"); //输出1
//var outp2=document.getElementById("outp2");//输出2,结果
//var list=document.getElementsByTagName("input");
var str = "";
var value = "";
var strData;
var count_page = 1;
var count = 0;


for (var i = 0; i < oBtn.length; i++) {
    oBtn[i].onclick = function () {
        switch (this.innerHTML) {
            case "Delete": str = str.replace(/.$/, '');
                //str = str.substr(0,str.length-1);
                outp1.innerHTML = str;
                break;

            case "space": str = str + "\xa0";
                outp1.innerHTML = str;
                break;

            default: str += this.innerHTML;
                outp1.innerHTML = str;
                break;
        }
        value = outp1.innerText;
        chrome.runtime.sendMessage({ greeting: value }, function () {
            console.log(value);
        });
       
    }
}

//screenX ,screenY
var div_num = new Array(43);
var num_str = "div";
for (i = 1; i < 45; i++) {

    var div_str = num_str + i;
    div_num[i] = document.getElementById(div_str);

}

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
    // console.log("screenwidth/screenheight:" + screenwidth + "/" + screenheight + "/" + x1);
    //var z1up=window.innerHeight;
    //var z2=z1up+70-z1up;
    //console.log("Browser page height"+z1up+"/"+z2);


    if (mausx > x1  && mausy < y1down && mausy > y1up) {

        div_num[(count_page - 1) * 4 + 2].style.background = '#ffe1a9';
        div_num[(count_page - 1) * 4 + 4].style.background = '#ffe1a9';
        div_num[(count_page - 1) * 4 + 1].style.background = 'none';
        div_num[(count_page - 1) * 4 + 3].style.background = 'none';

    }

    if (mausx > x1 && mausy > y1middle && mausy < y1down) {

        div_num[(count_page - 1) * 4 + 4].style.background = 'red';
        div_num[(count_page - 1) * 4 + 3].style.background = 'none';
        div_num[(count_page - 1) * 4 + 2].style.background = '#ffe1a9';
        div_num[(count_page - 1) * 4 + 1].style.background = 'none';

        activate_3 = false;
        activate_1 = false;
        activate_2 = false;
        activate_4 = true;

    }
    if (mausx > x1 && mausy > y1up && mausy < y1middle ) {

        div_num[(count_page - 1) * 4 + 2].style.background = 'red';
        div_num[(count_page - 1) * 4 + 3].style.background = 'none';
        div_num[(count_page - 1) * 4 + 4].style.background = '#ffe1a9';
        div_num[(count_page - 1) * 4 + 1].style.background = 'none';

        activate_3 = false;
        activate_1 = false;
        activate_2 = true;
        activate_4 = false;

    }
    //Leftpart
    if (mausx < x1  && mausy < y1down && mausy > y1up) {

        div_num[(count_page - 1) * 4 + 1].style.background = '#ffe1a9';
        div_num[(count_page - 1) * 4 + 3].style.background = '#ffe1a9';
        div_num[(count_page - 1) * 4 + 2].style.background = 'none';
        div_num[(count_page - 1) * 4 + 4].style.background = 'none';

    }

    if ( mausx < x1 && mausy > y1up && mausy < y1middle && count < 2) {

        div_num[(count_page - 1) * 4 + 1].style.background = 'red';
        div_num[(count_page - 1) * 4 + 3].style.background = '#ffe1a9';
        div_num[(count_page - 1) * 4 + 4].style.background = 'none';
        div_num[(count_page - 1) * 4 + 2].style.background = 'none';
        activate_3 = false;
        activate_1 = true;
        activate_4 = false;
        activate_2 = false;
    }

    if (mausx < x1 && mausy > y1middle && mausy < y1down && count < 2) {

        div_num[(count_page - 1) * 4 + 3].style.background = 'red';
        div_num[(count_page - 1) * 4 + 4].style.background = 'none';
        div_num[(count_page - 1) * 4 + 2].style.background = 'none';
        div_num[(count_page - 1) * 4 + 1].style.background = '#ffe1a9';
        activate_3 = true;
        activate_4 = false;
        activate_1 = false;
        activate_2 = false;

    }
}







//div dispaly


console.log("start!");
document.onkeydown = function (e) {
    

    if (e.keyCode == 13 && count_page == 1) {
        count=0;
        document.getElementById("div5").style.display = "block";
        document.getElementById("div6").style.display = "block";
        document.getElementById("div7").style.display = "block";
        document.getElementById("div8").style.display = "block";


        document.getElementById("div1").style.display = "none";
        document.getElementById("div2").style.display = "none";
        document.getElementById("div3").style.display = "none";
        document.getElementById("div4").style.display = "none";

        
 
    }
    else {
        document.getElementById("div5").style.display = "none";
        document.getElementById("div6").style.display = "none";
        document.getElementById("div7").style.display = "none";
        document.getElementById("div8").style.display = "none";


        document.getElementById("div1").style.display = "none";
        document.getElementById("div2").style.display = "none";
        document.getElementById("div3").style.display = "none";
        document.getElementById("div4").style.display = "none";
    }
    
    if (e.keyCode == 13 && count_page == 2) {

        document.getElementById("div9").style.display = "block";
        document.getElementById("div10").style.display = "block";
        document.getElementById("div11").style.display = "block";
        document.getElementById("div12").style.display = "block";
    }
    else {
        document.getElementById("div9").style.display = "none";
        document.getElementById("div10").style.display = "none";
        document.getElementById("div11").style.display = "none";
        document.getElementById("div12").style.display = "none";

    }

    if (e.keyCode == 13 && count_page == 3) {

        document.getElementById("div13").style.display = "block";
        document.getElementById("div14").style.display = "block";
        document.getElementById("div15").style.display = "block";
        document.getElementById("div16").style.display = "block";
    
    }
    else {
        document.getElementById("div13").style.display = "none";
        document.getElementById("div14").style.display = "none";
        document.getElementById("div15").style.display = "none";
        document.getElementById("div16").style.display = "none";

    }

    if (e.keyCode == 13 && count_page == 4) {

        document.getElementById("div17").style.display = "block";
        document.getElementById("div18").style.display = "block";
        document.getElementById("div19").style.display = "block";
        document.getElementById("div20").style.display = "block";
       
    }
    else {
        document.getElementById("div17").style.display = "none";
        document.getElementById("div18").style.display = "none";
        document.getElementById("div19").style.display = "none";
        document.getElementById("div20").style.display = "none";

    }

    if (e.keyCode == 13 && count_page == 5) {

        document.getElementById("div21").style.display = "block";
        document.getElementById("div22").style.display = "block";
        document.getElementById("div23").style.display = "block";
        document.getElementById("div24").style.display = "block";

    }
    else {
        document.getElementById("div21").style.display = "none";
        document.getElementById("div22").style.display = "none";
        document.getElementById("div23").style.display = "none";
        document.getElementById("div24").style.display = "none";

    }

    if (e.keyCode == 13 && count_page == 6) {

        document.getElementById("div25").style.display = "block";
        document.getElementById("div26").style.display = "block";
        document.getElementById("div27").style.display = "block";
        document.getElementById("div28").style.display = "block";
        
    }
    else {
        document.getElementById("div25").style.display = "none";
        document.getElementById("div26").style.display = "none";
        document.getElementById("div27").style.display = "none";
        document.getElementById("div28").style.display = "none";

    }

    if (e.keyCode == 13 && count_page == 7) {

        document.getElementById("div29").style.display = "block";
        document.getElementById("div30").style.display = "block";
        document.getElementById("div31").style.display = "block";
        document.getElementById("div32").style.display = "block";
        
    }
    else {
        document.getElementById("div29").style.display = "none";
        document.getElementById("div30").style.display = "none";
        document.getElementById("div31").style.display = "none";
        document.getElementById("div32").style.display = "none";

    }


    if (e.keyCode == 13 && count_page == 8) {

        document.getElementById("div36").style.display = "block";
        document.getElementById("div33").style.display = "block";
        document.getElementById("div34").style.display = "block";
        document.getElementById("div35").style.display = "block";
       
    }
    else {
        document.getElementById("div36").style.display = "none";
        document.getElementById("div33").style.display = "none";
        document.getElementById("div34").style.display = "none";
        document.getElementById("div35").style.display = "none";

    }

    if (e.keyCode == 13 && count_page == 9) {

        document.getElementById("div40").style.display = "block";
        document.getElementById("div37").style.display = "block";
        document.getElementById("div38").style.display = "block";
        document.getElementById("div39").style.display = "block";
      
    }
    else {
        document.getElementById("div40").style.display = "none";
        document.getElementById("div37").style.display = "none";
        document.getElementById("div38").style.display = "none";
        document.getElementById("div39").style.display = "none";
    }

    if (e.keyCode == 13 && count_page == 10) {

        document.getElementById("div44").style.display = "block";
        document.getElementById("div41").style.display = "block";
        document.getElementById("div42").style.display = "block";
        document.getElementById("div43").style.display = "block";
       
        
    }
    else {
        document.getElementById("div44").style.display = "none";
        document.getElementById("div41").style.display = "none";
        document.getElementById("div42").style.display = "none";
        document.getElementById("div43").style.display = "none";
    }
    if (e.keyCode == 13 && count_page >= 11) {
            count_page=0;
        document.getElementById("div1").style.display = "block";
        document.getElementById("div4").style.display = "block";
        document.getElementById("div2").style.display = "block";
        document.getElementById("div3").style.display = "block";
       
        
    }
    else {
        document.getElementById("div4").style.display = "none";
        document.getElementById("div1").style.display = "none";
        document.getElementById("div2").style.display = "none";
        document.getElementById("div3").style.display = "none";
    }
   



    if (e.keyCode == 13) {
        
        count_page ++;   
    }else{
       
    }
}




