const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname, 'ipa-converter');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

/*app.get('/transcribe', (req, res) => {
  const malayalamText = req.query.text;
  
    // Define a mapping of Malayalam characters to IPA representations
    const mapping = {
      'അ': 'a',
      'ആ': 'aː',
      'ഇ': 'i',
      'ഈ': 'iː',
      // Add more mappings as needed
    };
  
    let ipaTranscription = '';
  
    // Iterate through each character in the Malayalam text
    for (let i = 0; i < malayalamText.length; i++) {
      const character = malayalamText[i];
      const ipa = mapping[character];
  
      // If a mapping exists, add the IPA representation to the transcription
      if (ipa) {
        ipaTranscription += ipa;
      } else {
        // If no mapping exists, add the original character to the transcription
        ipaTranscription += character;
      }
    }
  
    res.json({ transcription: ipaTranscription });
  });
  

  // TODO: Implement IPA transcription logic here

  const transcription = "IPA transcription result"; // Replace this with the actual transcription result

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});*/

app.post('/transcribe', (req, res) => {
  const malayalamText = req.body.text;

  // Define a mapping of Malayalam characters to IPA representations
  const mapping = {
    'അ': 'a',
    'ആ': 'aː',
    'ഇ': 'i',
    'ഈ': 'iː',
    // Add more mappings as needed
  };
  
  let ipaTranscription = '';
  
  // Iterate over each character in the Malayalam text and convert it to IPA representation
  for (let i = 0; i < malayalamText.length; i++) {
    const char = malayalamText[i];
    const ipaChar = mapping[char] || char; // If no mapping found, use the original character
    ipaTranscription += ipaChar;
  }
  
  // Send the IPA transcription as the response
  res.json({ transcription: ipaTranscription });
  });
  
  const port = 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  
