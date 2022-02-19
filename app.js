//select button and outpout
const button = document.querySelector(".talk");
const output = document.querySelector(".outpout");
const reset = document.querySelector(".reset");

//Initiate speech recognition
const speechRecognition =
  window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();

//when we start talking
recognition.onstart = function () {
  console.log("you can speak now");
};

//When we stop talking
recognition.onresult = function (event) {
  //console.log(event)
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  output.value = transcript;
  readMySpeech(transcript);
};

//Add event when the button is clicked
button.addEventListener("click", () => {
  recognition.start();
});

function readMySpeech(message) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = message;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 2;
  window.speechSynthesis.speak(speech);
}

reset.addEventListener("click", () => {
  output.placeholder = "Your speech will be displayed here";
  output.value = ''
});
