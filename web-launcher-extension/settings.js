
//background
let backgroundColorOptions = document.getElementById("backgroundColors");
const kBackgroundColors = ["#ac9cf2", "#dfe3ee", "#b8a69a", "#4daf67"];
function constructOptions(options) {
  for (let item of options) {
    let button = document.createElement("button");
    button.style.backgroundColor = item;
    button.addEventListener("click", function() {
      chrome.storage.sync.set({ backgroundColor: item }, function() {
        console.log("color is " + item);
      });
    });
    backgroundColorOptions.appendChild(button);
  }
}
constructOptions(kBackgroundColors);

//formate2x2

let buttons=document.getElementById("buttons");
const b1_value= ["2x2","2x4","relativ"];


function chooseFormat(formats){
  for(let item of formats){
    let button=document.createElement("button");
    button.value=item;
    button.addEventListener("click",function(){
      chrome.storage.sync.set({formattttt:item},function(){
        console.log("format is" +item);
      })
    })
    buttons.appendChild(button);
  }
}
chooseFormat(b1_value);


//input选择
var input1=document.getElementById("input1");
input1.onclick=function(){
  
  document.getElementById("4").style.display="block";
  document.getElementById("8").style.display="none";
  document.getElementById("button_add").style.display="block";
}

var input2=document.getElementById("input2");
input2.onclick=function(){
  document.getElementById("button_add").style.display="block";
  document.getElementById("8").style.display="block";
  document.getElementById("4").style.display="none";
}

//添加网址
var button1=document.getElementById("button_add");
button1.onclick=function(){
    //2x2 Page
    var Url1=document.getElementById('url1').value;//url1
    var Name1=document.getElementById("name1").value;

    var Url2=document.getElementById('url2').value;//url2
    var Name2=document.getElementById("name2").value;

    var Url3=document.getElementById('url3').value;//url3
    var Name3=document.getElementById("name3").value;

    var Url4=document.getElementById('url4').value;//url4
    var Name4=document.getElementById("name4").value;

    //2x4 Page
    var Url1_2=document.getElementById('url1_2').value;//url1
    var Name1_2=document.getElementById("name1_2").value;

    var Url2_2=document.getElementById('url2_2').value;//url2
    var Name2_2=document.getElementById("name2_2").value;
   
    var Url3_2=document.getElementById('url3_2').value;//url3
    var Name3_2=document.getElementById("name3_2").value;
    
    var Url4_2=document.getElementById('url4_2').value;//url4
    var Name4_2=document.getElementById("name4_2").value;

    var Url5_2=document.getElementById('url5_2').value;//url5
    var Name5_2=document.getElementById("name5_2").value;
   
    var Url6_2=document.getElementById('url6_2').value;//url6
    var Name6_2=document.getElementById("name6_2").value;

    var Url7_2=document.getElementById('url7_2').value;//url7
    var Name7_2=document.getElementById("name7_2").value;

    var Url8_2=document.getElementById('url8_2').value;//url8
    var Name8_2=document.getElementById("name8_2").value;

    user1={'link1':Url1,'name1':Name1,'link2':Url2,'name2':Name2,'link3':Url3,'name3':Name3,'link4':Url4,'name4':Name4,'link1_2':Url1_2,'name1_2':Name1_2,'link2_2':Url2_2,'name2_2':Name2_2,'link3_2':Url3_2,'name3_2':Name3_2,'link4_2':Url4_2,'name4_2':Name4_2,'link5_2':Url5_2,'name5_2':Name5_2,'link6_2':Url6_2,'name6_2':Name6_2,'link7_2':Url7_2,'name7_2':Name7_2,'link8_2':Url8_2,'name8_2':Name8_2}
    chrome.storage.sync.set({'user1':user1},function(){
    console.log("ok");
    alert("Added successfully!");
});
    
}

/*例子
var user1 = {'name': 'diego', 'age': 18}
var user1 ={'name':'https://www.google.com/','age':18}
chrome.storage.sync.set({'user1':user1},function(){
    console.log("ok");
    
});*
/
/*
//获取页面
chrome.storage.sync.get('user1',function(result){
    document.write('name:'+result['user1'].name +'<br>'+'age:'+result['user1'].age);
});


;
var input=document.getElementById("input").value;
chrome.storage.sync.set({'input':input},function(){
    console.log("ok");
    
});*/
