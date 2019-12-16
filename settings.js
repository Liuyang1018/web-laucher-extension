let backgroundColorOptions = document.getElementById("backgroundColors");
const kBackgroundColors = ["#3aa757", "#e8453c", "#f9bb2d", "#4688f1"];

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
