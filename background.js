console.log("start: background.js");

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({ backgroundColor: "#3aa757" }, function() {
    console.log("save: backgroundColor");
  });
});

chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    console.log("send: toggleWebLauncher");
    chrome.tabs.sendMessage(tabs[0].id, "toggleWebLauncher");
  });
});
