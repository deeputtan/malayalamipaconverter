const express = require('express');
const serverless = require('serverless-http')
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const router = express.Router();

// Define the public directory path
const publicPath = path.join(__dirname,'dist');

// Serve the static files from the public directory
router.use(express.static(publicPath));

// Parse incoming request bodies
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Handle the root route
router.get('/', (req, res) => {
  res.json;
});

app.use('/.netlify',router);

// Handle the IPA transcription request
router.post('/transcribe', (req, res) => {
  const malayalamText = req.body.text;

  // Define a mapping of Malayalam characters to IPA representations
  const mapping = {
    'ക': 'k',
'ഖ': 'kʰ',
'ഗ': 'ɡ',
'ഘ': 'gʰ',
'ങ': 'ŋ',
'ച': 'c',
'ഛ': 'cʰ',
'ജ': 'ɟ',
'ഝ': 'ɟʰ',
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
'ഩ/ന[a]': 'n̪',
'പ': 'p',
'ഫ': 'pʰ',
'ഫ': 'f',
'ബ': 'b',
'ഭ': 'bʰ',
'മ': 'm',
'യ': 'j',
'ര': 'ɾ',
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
'*ന്റ': 'd',
'ഩ': 'n̪',
'ൺ': 'ɳ',
'ൻ': 'n̪',
'ർ': 'r',
'ൽ': 'l',
'ൾ': 'ɭ',
'ങ്ക': 'nk',
'ങ്ങ': 'ŋŋ',
'ച്ച': 't͡ʃt͡ʃ',
'ച്ഛ': 't͡ʃt͡ʃʰ',
'ഞ്ച': 'ɲt͡ʃ',
'ഞ്ഞ': 'ɲɲ',
'ക്ഷ': 'kʂ',
'ത്ര': 't̪r',
'ട്ട': 'ʈʈ',
'ണ്ട': 'ɳʈ',
'ണ്ണ': 'ɳɳ',
'ത്ത': 't̪t̪',
'ന്ത': 'n̪d̪',
'ന്ധ': 'n̪d̪ʱ',
'ന്ന': 'n̪n̪',
'പ്പ': 'pp',
'മ്പ': 'mb',
'മ്മ': 'mm',
'ബ്ബ': 'bb',
'യ്യ': 'jj',
'വ്വ': 'ʋʋ',
'ക്ല': 'kɭ',
'പ്ല': 'pɭ',
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
'ൌ[e]': 'au',
'അ': 'a',
'അ': 'ə',
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
'്': '∂',
'ഏ': 'eː'
    
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

module.exports.handler = serverless(app)