<<<<<<< HEAD
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

// Define the public directory path
const publicPath = path.join(__dirname,);

// Serve the static files from the public directory
app.use(express.static(publicPath));

// Parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handle the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// Handle the IPA transcription request
app.post('/transcribe', (req, res) => {
  const malayalamText = req.body.text;

  // Define a mapping of Malayalam characters to IPA representations
  const mapping = {
<<<<<<< HEAD
    'ക': 'k',
    'ഖ': 'kʰ',
    'ഗ': 'ɡ',
    'ഘ': 'gʰ',
    'ങ': 'ŋ',
    'ച': 'tʃ',
    'ഛ': 'tʃʰ',
    'ജ': 'dʒ',
    'ഝ': 'dʒʰ',
    'ഞ': 'ɲ',
    'ട': 'ʈ',
    'ഠ': 'ʈʰ',
    'ഡ': 'ɖ',
    'ഢ': 'ɖʰ',
    'ണ': 'ɳ',
    'ത': 't̪',
    'ഥ': 't̪ʰ',
    'ദ': 'd̪',
    'ധ': 'd̪ʰ',
    'ന': 'n',
    'പ': 'p',
    'ഫ': 'pʰ',
    'ബ': 'b',
    'ഭ': 'bʰ',
    'മ': 'm',
    'യ': 'j',
    'ര': 'r',
    'ല': 'l',
    'വ': 'ʋ',
    'ശ': 'ʃ',
    'ഷ': 'ʂ',
    'സ': 's',
    'ഹ': 'h',
    'ള': 'ɭ',
    'ഴ': 'ɻ',
    'റ': 'r',
    'റ്റ': 't',
    'ന്റ': 'nt̪',
    'ങ്ക': 'ŋk',
    'ങ്ങ': 'ŋŋ',
    'ച്ച': 'tʃtʃ',
    'ഞ്ച': 'ɲtʃ',
    'ഞ്ഞ': 'ɲɲ',
    'ട്ട': 'ʈʈ',
    'ണ്ട': 'ɳʈ',
    'ണ്ണ': 'ɳɳ',
    'ത്ത': 't̪t̪',
    'ന്ത': 'nt̪',
    'ന്ധ': 'nd̪ʱ',
    'ന്ന': 'nn',
    'പ്പ': 'pp',
    'മ്പ': 'mb',
    'മ്മ': 'mm',
    'ബ്ബ': 'bb',
    'യ്യ': 'jj',
    'വ്വ': 'ʋʋ',
    'ക്ല': 'kl',
    'പ്ല': 'pl',
    'ാ': 'aː',
    'ി': 'i',
    'ീ': 'iː',
    'ു': 'u',
    'ൂ': 'uː',
    'ൃ': 'r̩',
    'െ': 'e',
    'േ': 'eː',
    'ൊ': 'o',
    'ോ': 'oː',
    'ൈ': 'ai',
    'ൗ': 'au',
    'ൌ': 'au',
    'അ': 'a',
    'ആ': 'aː',
    'ഇ': 'i',
    'ഈ': 'iː',
    'ഉ': 'u',
    'ഊ': 'uː',
    'ഋ': 'r̩',
    'എ': 'e',
    'ഒ': 'o',
    'ഓ': 'oː',
    'ഐ': 'ai',
    'ഔ': 'au',
    'ം' :'am',
    '്': '∂',
    'ൽ':'l',
    'ൺ':'ɳ',
    'ൻ':'n̪',
    'ർ':'r',
    'ൾ':'ɭ'


=======
 
      'ക': 'k',
      'ഖ': 'kʰ',
      'ഗ': 'ɡ',
      'ഘ': 'gʰ',
      'ങ': 'ŋ',
      'ച': 'tʃ',
      'ഛ': 'tʃʰ',
      'ജ': 'dʒ',
      'ഝ': 'dʒʰ',
      'ഞ': 'ɲ',
      'ട': 'ʈ',
      'ഠ': 'ʈʰ',
      'ഡ': 'ɖ',
      'ഢ': 'ɖʰ',
      'ണ': 'ɳ',
      'ത': 't̪',
      'ഥ': 't̪ʰ',
      'ദ': 'd̪',
      'ധ': 'd̪ʰ',
      'ന': 'n',
      'പ': 'p',
      'ഫ': 'pʰ',
      'ബ': 'b',
      'ഭ': 'bʰ',
      'മ': 'm',
      'യ': 'j',
      'ര': 'r',
      'ല': 'l',
      'വ': 'ʋ',
      'ശ': 'ʃ',
      'ഷ': 'ʂ',
      'സ': 's',
      'ഹ': 'h',
      'ള': 'ɭ',
      'ഴ': 'ɻ',
      'റ': 'r',
      'റ്റ': 't',
      'ന്റ': 'nt̪',
      'ങ്ക': 'ŋk',
      'ങ്ങ': 'ŋŋ',
      'ച്ച': 'tʃtʃ',
      'ഞ്ച': 'ɲtʃ',
      'ഞ്ഞ': 'ɲɲ',
      'ട്ട': 'ʈʈ',
      'ണ്ട': 'ɳʈ',
      'ണ്ണ': 'ɳɳ',
      'ത്ത': 't̪t̪',
      'ന്ത': 'nt̪',
      'ന്ധ': 'nd̪ʱ',
      'ന്ന': 'nn',
      'പ്പ': 'pp',
      'മ്പ': 'mb',
      'മ്മ': 'mm',
      'ബ്ബ': 'bb',
      'യ്യ': 'jj',
      'വ്വ': 'ʋʋ',
      'ക്ല': 'kl',
      'പ്ല': 'pl',
      'ാ': 'aː',
      'ി': 'i',
      'ീ': 'iː',
      'ു': 'u',
      'ൂ': 'uː',
      'ൃ': 'r̩',
      'െ': 'e',
      'േ': 'eː',
      'ൊ': 'o',
      'ോ': 'oː',
      'ൈ': 'ai',
      'ൗ': 'au',
      'ൌ': 'au',
      'അ': 'a',
      'ആ': 'aː',
      'ഇ': 'i',
      'ഈ': 'iː',
      'ഉ': 'u',
      'ഊ': 'uː',
      'ഋ': 'r̩',
      'എ': 'e',
      'ഒ': 'o',
      'ഓ': 'oː',
      'ഐ': 'ai',
      'ഔ': 'au',
      'ം' :'am',
      '്': '∂'


    
    


    // Add more mappings as needed
>>>>>>> 0ad3744159dd0ab68230336624020d9bd6eb4aec
  };

  
  let ipaTranscription = '';

  const words = malayalamText.split(' '); // Split the input text into words

  // Iterate over each word in the Malayalam text and convert it to IPA representation
  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    let ipaWord = '';

    // Iterate over each character in the word and convert it to IPA representation
    for (let j = 0; j < word.length; j++) {
      const char = word[j];
      const ipaChar = mapping[char] || char; // If no mapping found, use the original character

      // Check if '്' appears between letters within a word
      if (char === '്' && j > 0 && j < word.length - 1) {
        // Skip adding '്' character within the word
        continue;
      }

      ipaWord += ipaChar;
    }

    ipaTranscription += ipaWord;

    // Add a space between words
    if (i < words.length - 1) {
      ipaTranscription += ' ';
    }
  }

  
  

  // Send the IPA transcription as the response
  res.json({ transcription: ipaTranscription });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
=======
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

// Define the public directory path
const publicPath = path.join(__dirname,);

// Serve the static files from the public directory
app.use(express.static(publicPath));

// Parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handle the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// Handle the IPA transcription request
app.post('/transcribe', (req, res) => {
  const malayalamText = req.body.text;

  // Define a mapping of Malayalam characters to IPA representations
  const mapping = {
 
      'ക': 'k',
      'ഖ': 'kʰ',
      'ഗ': 'ɡ',
      'ഘ': 'gʰ',
      'ങ': 'ŋ',
      'ച': 'tʃ',
      'ഛ': 'tʃʰ',
      'ജ': 'dʒ',
      'ഝ': 'dʒʰ',
      'ഞ': 'ɲ',
      'ട': 'ʈ',
      'ഠ': 'ʈʰ',
      'ഡ': 'ɖ',
      'ഢ': 'ɖʰ',
      'ണ': 'ɳ',
      'ത': 't̪',
      'ഥ': 't̪ʰ',
      'ദ': 'd̪',
      'ധ': 'd̪ʰ',
      'ന': 'n',
      'പ': 'p',
      'ഫ': 'pʰ',
      'ബ': 'b',
      'ഭ': 'bʰ',
      'മ': 'm',
      'യ': 'j',
      'ര': 'r',
      'ല': 'l',
      'വ': 'ʋ',
      'ശ': 'ʃ',
      'ഷ': 'ʂ',
      'സ': 's',
      'ഹ': 'h',
      'ള': 'ɭ',
      'ഴ': 'ɻ',
      'റ': 'r',
      'റ്റ': 't',
      'ന്റ': 'nt̪',
      'ങ്ക': 'ŋk',
      'ങ്ങ': 'ŋŋ',
      'ച്ച': 'tʃtʃ',
      'ഞ്ച': 'ɲtʃ',
      'ഞ്ഞ': 'ɲɲ',
      'ട്ട': 'ʈʈ',
      'ണ്ട': 'ɳʈ',
      'ണ്ണ': 'ɳɳ',
      'ത്ത': 't̪t̪',
      'ന്ത': 'nt̪',
      'ന്ധ': 'nd̪ʱ',
      'ന്ന': 'nn',
      'പ്പ': 'pp',
      'മ്പ': 'mb',
      'മ്മ': 'mm',
      'ബ്ബ': 'bb',
      'യ്യ': 'jj',
      'വ്വ': 'ʋʋ',
      'ക്ല': 'kl',
      'പ്ല': 'pl',
      'ാ': 'aː',
      'ി': 'i',
      'ീ': 'iː',
      'ു': 'u',
      'ൂ': 'uː',
      'ൃ': 'r̩',
      'െ': 'e',
      'േ': 'eː',
      'ൊ': 'o',
      'ോ': 'oː',
      'ൈ': 'ai',
      'ൗ': 'au',
      'ൌ': 'au',
      'അ': 'a',
      'ആ': 'aː',
      'ഇ': 'i',
      'ഈ': 'iː',
      'ഉ': 'u',
      'ഊ': 'uː',
      'ഋ': 'r̩',
      'എ': 'e',
      'ഒ': 'o',
      'ഓ': 'oː',
      'ഐ': 'ai',
      'ഔ': 'au',
      'ം' :'am',
      '്': '∂',
      'ൺ': 'n̪',
      'ൻ':'n̪',
      'ർ':'r',
      'ൽ':'l',
      'ൾ':'ɭ'




    
    


    // Add more mappings as needed
  };

  
  let ipaTranscription = '';

  const words = malayalamText.split(' '); // Split the input text into words

 // Iterate over each word in the Malayalam text and convert it to IPA representation
for (let i = 0; i < words.length; i++) {
  const word = words[i];

  let ipaWord = '';

  // Iterate over each character in the word and convert it to IPA representation
  for (let j = 0; j < word.length; j++) {
    const char = word[j];
    const ipaChar = mapping[char] || char; // If no mapping found, use the original character

    // Check if '്' appears between letters within a word
    if (char === '്' && j > 0 && j < word.length - 1) {
      // Skip adding '്' character within the word
      continue;
    }

    ipaWord += ipaChar;
  }

  // Add 'a' if the word ends with a consonant
  const lastChar = word[word.length - 1];
  const isConsonant = !(/[ാിീുൂൃെേൊോൗൌം്]/.test(lastChar)); // Check if lastChar is not a vowel

  if (isConsonant) {
    ipaWord += 'a';
  }

  ipaTranscription += ipaWord;

  // Add a space between words
  if (i < words.length - 1) {
    ipaTranscription += ' ';
  }
}
  
  
  

  // Send the IPA transcription as the response
  res.json({ transcription: ipaTranscription });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
>>>>>>> f427b32a665cca8c6cfee1bc946e3c7721c74971
