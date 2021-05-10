//pseudo
// declare alphabet
// split alphabet into letters
// empty sentence edge case
// split sentence into letters
// declare true boolean
// iterate over alphabet letters
  // if sentence letters do not include alphabet letter
    // boolean equals false
//
// return boolean

export function isPangram(sentence) {
    if (sentence === '') {
      return false;
    }
  
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let letters = sentence.toLowerCase();
    let boolean = true;
  
    for (let i = 0; i < alphabet.length; i++) {
      if (!letters.includes(alphabet[i])) {
        boolean = false;
        break;
      }
    }
    
    return boolean;
  };
  