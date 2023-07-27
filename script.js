const submitBtn = document.getElementById('submitBtn');
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');

submitBtn.addEventListener('click', () => {
  const malayalamText = inputText.value;
  
  // Make a POST request to the server to transcribe the text
  fetch('/transcribe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text: malayalamText })
  })
  .then(response => response.json())
  .then(data => {
    // Update the output text with the transcription result
    outputText.textContent = data.transcription;
  })
  .catch(error => {
    console.error('An error occurred:', error);
    outputText.textContent = 'An error occurred. Please try again.';
  });
});
