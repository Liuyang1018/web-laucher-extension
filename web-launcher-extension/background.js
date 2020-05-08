console.log("start: background.js");

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({ backgroundColor: "#dfe3ee" }, function() {
    console.log("save: backgroundColor");
  });
  
});

var value="";
chrome.runtime.onMessage.addListener(
          function(request,sender,sendResponse){
             
                console.log("ok!");
                if(request.greeting){
                
                    sendResponse({farewell:"goodbye"});
                    //console.log(request.greeting);
                    if(request.greeting){
                      value=request.greeting;
                      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
                        console.log(value);
                        chrome.tabs.sendMessage(tabs[0].id, value);
                      });
                    }
                }
                else{
                  sendResponse({farewell:"noting"});
                }
      
            });
            
chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    console.log("send: toggleWebLauncher");
    chrome.tabs.sendMessage(tabs[0].id, "toggleWebLauncher");
  });
});

