const wording = [
  "Do you like Javascript as much as I do?",
  "Hope you are having fun this is a simple game you can make",
  "Source code is included so you can create your own version of this challenge",
];
let startTime, endTime;
const message = document.querySelector(".message");
const playText = document.querySelector("textarea");
const button = document.querySelector("button");
button.addEventListener("click", function () {
  if (this.innerText == "Start") {
    playText.disabled = false;
    this.innerText = "Done !";
    playGame();
  } else if (this.innerText == "Done !") {
    playText.disabled = true;
    this.innerText = "Start";
    endGame();
  }
});

function playGame() {
  message.innerText = wording[Math.floor(Math.random() * wording.length)];
  let date = new Date();
  startTime = date.getTime();
  button.innerText = "Done !";
}

function endGame() {
  let date = new Date();
  endTime = date.getTime();
  let totalTime = (endTime - startTime) / 1000;
  let str = playText.value;
  let words = str.split(" ").length;
  let speed = ((words / totalTime) * 60).toFixed(0);
  let finalMessage = `Your speed is ${speed} words per minute !`;
  finalMessage += "<br>" + compareWords(message.innerText, str);
  message.innerHTML = finalMessage;
}

function compareWords(str1, str2) {
  let words1 = str1.split(" ");
  let words2 = str2.split(" ");
  let count = 0;
  words1.forEach((el, index) => {
    if (el == words2[index]) {
      count++;
    }
  });
  return count + " correct words out of " + words1.length + " words";
}
