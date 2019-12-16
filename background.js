console.log("start: background.js");

chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    console.log("send: toggleWebLauncher");
    chrome.tabs.sendMessage(tabs[0].id, "toggleWebLauncher");
  });
});
