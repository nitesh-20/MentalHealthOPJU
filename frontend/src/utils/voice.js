export const speakText = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
  };
  
  export const listenText = () => {
    return new Promise((resolve) => {
      const recognition = new window.webkitSpeechRecognition();
      recognition.lang = "en-US";
      recognition.start();
  
      recognition.onresult = (event) => {
        resolve(event.results[0][0].transcript);
      };
  
      recognition.onerror = () => resolve('');
    });
  };
  