const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const textarea = document.getElementById('textarea');
recognition.onresult = function(event) {
  const result = event.results[0][0].transcript;
  textarea.value += result;
};
recognition.start();

localStorage.setItem('text', textarea.value);