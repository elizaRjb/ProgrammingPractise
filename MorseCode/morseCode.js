const morseCodeMap = {
  'A' : '. -',
  'B' : '- . . .',
  'C' : '- . - .',
  'D' : '- . .',
  'E' : '.',
  'F' : '. . - .',
  'G' : '- - .',
  'H' : '. . . .',
  'I' : '. .',
  'J' : '. - - -',
  'K' : '- . -',
  'L' : '. - . .',
  'M' : '- -',
  'N' : '- .',
  'O' : '- - -',
  'P' : '. - - .',
  'Q' : '- - . -',
  'R' : '. - .',
  'S' : '. . .',
  'T' : '-',
  'U' : '. . -',
  'V' : '. . . -',
  'W' : '. - -',
  'X' : '- . . -',
  'Y' : '- . - -',
  'Z' : '- - . .',
  '1' : '. - - - -',
  '2' : '. . - - -',
  '3' : '. . . - -',
  '4' : '. . . . -',
  '5' : '. . . . .',
  '6' : '- . . . .',
  '7' : '- - . . .',
  '8' : '- - - . .',
  '9' : '- - - - .',
  '0' : '- - - - -'
};

const reverseMorseCodeMap = reverseMapper(morseCodeMap);

const spaceBetweenLetters = '   ';
const spaceBetweenWords = '       ';

function reverseMapper(originalMap){
  var reverseMap = {};
  for(var key in originalMap){
    reverseMap[originalMap[key]] = key;
  }

  return reverseMap;
}

function morseCodeEncoder(str){
  var encodedMsg = '';
  for(var i = 0; i < str.length; i++){
    if(str.charAt(i) === ' '){
      encodedMsg += spaceBetweenWords;
    }
    else{
      encodedMsg += morseCodeMap[str.charAt(i).toUpperCase()] + spaceBetweenLetters;
    }
  }

  console.log(encodedMsg);
}

morseCodeEncoder('a ba');
