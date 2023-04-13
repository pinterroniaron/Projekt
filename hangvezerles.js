if ("webkitSpeechRecognition" in window) {
  let speechRecognition = new webkitSpeechRecognition();
  let final_transcript = "";
  let isRecognitionOn = false; // added variable to track state

  speechRecognition.continuous = true;
  speechRecognition.interimResults = true;
  speechRecognition.lang = "hu";

  speechRecognition.onstart = () => {
    document.querySelector("#status").style.display = "block";
  };
  speechRecognition.onerror = () => {
    document.querySelector("#status").style.display = "none";
  };
  speechRecognition.onend = () => {
    document.querySelector("#status").style.display = "none";
    console.log("again");
    if (isRecognitionOn) {
      // start again only if the recognition is still on
      speechRecognition.start();
    }
  };

  speechRecognition.onresult = (event) => {
    let interim_transcript = "";

    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        final_transcript += event.results[i][0].transcript;
      } else {
        interim_transcript += event.results[i][0].transcript;
      }
    }

    if (final_transcript.includes("vissza")) {
      window.open("index.html", "_self");
    }
    if (final_transcript.includes("haza")) {
      window.open("index.html", "_self");
    }
    if (final_transcript.includes("pong")) {
      window.open("pongg.html", "_self");
    }
    if (final_transcript.includes("é")) {
      window.open("aimteszt.html", "_self");
    }
    if (final_transcript.includes("s")) {
      window.open("spammer.html", "_self");
    }
    if (final_transcript.includes("sz")) {
      window.open("spammer.html", "_self");
    }
    if (final_transcript.includes("egy")) {
      window.open("pongg.html", "_self");
    }
    if (final_transcript.includes("kettő")) {
      window.open("aimteszt.html", "_self");
    }
    if (final_transcript.includes("három")) {
      window.open("spammer.html", "_self");
    }
    if (final_transcript.includes("1")) {
      window.open("pongg.html", "_self");
    }
    if (final_transcript.includes("2")) {
      window.open("aimteszt.html", "_self");
    }
    if (final_transcript.includes("3")) {
      window.open("spammer.html", "_self");
    }
  };

  // kibe kapcsolás
  const toggleRecognition = () => {
    if (isRecognitionOn) {
      speechRecognition.stop();
      isRecognitionOn = false;
    } else {
      speechRecognition.start();
      isRecognitionOn = true;
    }
  };

  // elindítás
  document.addEventListener("keydown", (event) => {
    if (event.code === "Backquote") {
      // change "Space" to the key you want to use
      toggleRecognition();
    }
  });
} else {
  console.log("Speech Recognition Not Available");
}
