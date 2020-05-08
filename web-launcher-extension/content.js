//document.body.addEventListener("focus", (e) => console.log(e), true)焦点命令行
//document.body.addEventListener("focus", (e) => event.target.value='pink', true)
console.log("start: content.js");

var keyboard = document.createElement("iframe");
function togglekeyboard() {
  keyboard.style.width = "0px";
  keyboard.style.height = "100%";
  keyboard.style.width = "30%";
  keyboard.style.position = "fixed";
  keyboard.style.top = "0px";
  keyboard.style.right = "0px";
  keyboard.style.zIndex = "9000000000000000000";
  keyboard.frameBorder = "none";
  keyboard.setAttribute("id", "keyboard");
  keyboard.src = chrome.extension.getURL("keyboard.html");
  document.body.appendChild(keyboard);
}



var strData;
var list = document.getElementsByTagName("input");
for (var i = 0; i < list.length && list[i]; i++) {
  if (list[i].id && list[i].type != "hidden") {
    strData = list[i].id;
    break;
  }
}

//document.body.addEventListener("focus", (e) => console.log(e.srcElement.id), true);
var x;
var tt;
var hahah;
var idd;
document.body.addEventListener("click", function (e) {
   if(e.srcElement!= null){
     hahah=e.srcElement;
    tt = hahah;
    idd=e.srcElement.id;
    console.log(idd);
    togglekeyboard();
  }  
}, true);
console.log(idd);


console.log("strdata:" + strData);
var t = document.getElementById(strData);

chrome.runtime.onMessage.addListener(function (msg, sender) {
  if (msg == "toggleWebLauncher") {
    toggleWebLauncher();
  }else if (msg == "close") {
    closeKeyboard();
  }
  else {
    jianpan=true;
    console.log(msg);
    console.log(tt);
    t.value = msg;
    if (tt) {
      tt.value = msg;
    }
  }
});

//2x2 or 2X4 Page
var launcher = document.createElement("iframe");
launcher.style.height = "100%";
launcher.style.width = "30%";
launcher.style.position = "fixed";
launcher.style.top = "0px";
launcher.style.right = "0px";
launcher.style.zIndex = "9000000000000000000";
launcher.frameBorder = "none";
launcher.setAttribute("id", "web-launcher");
document.body.appendChild(launcher);

//background color
chrome.storage.sync.get("backgroundColor", function (data) {
  console.log("storage get: background color");
  launcher.style.background = data.backgroundColor;
});

//formate2x2 formate4x4
chrome.storage.sync.get("formattttt", function (data) {
  console.log("storage get: format" + data.formattttt);

  if (data.formattttt == "2x2") {
    launcher.src = chrome.extension.getURL("launcher.html");

  } else if(data.formattttt == "2x4") {
    launcher.src = chrome.extension.getURL("launcher1.html");
  }else if(data.formattttt == "relativ") {
    launcher.src = chrome.extension.getURL("relativ.html");
  }

});

var clientx=document.body.clientWidth*0.68+"px";
console.log(clientx);
document.body.style.width=clientx;

function toggleWebLauncher() {
  if (launcher.style.width == "0px") {
    launcher.style.width = "30%";
  } else {
    launcher.style.width = "0px";
    keyboard.style.width="0px"
  }
}




