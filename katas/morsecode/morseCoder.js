



class MorseCoder {

  static encode( string ) {
    let tokens = string.toUpperCase().split('')
    let outputTokens = tokens.map( token => `${MorseCoder.codeKey[ token ]} ` )
    return outputTokens.join('')
  }

  static decode( string ) {
    let tokens = string.split(' s')
    let letters = Object.keys( MorseCoder.codeKey )
    console.log(letters);
    let outputTokens = []
    for ( let x=0; x<tokens.length; x++ ) {
      let token = tokens[x]
      for ( let y=0; y<letters.length; y++ ) {
        if ( MorseCoder.codeKey[letters[y]] === token ) {
          outputTokens.push( letters[y] )
        }
      }
    }
    console.log( outputTokens )
  }

}

Object.defineProperty(MorseCoder, 'codeKey', {
    value: {
      'A': '.-',
      'B': '-...',
      'C': '-.-.',
      'D': '-..',
      'E': '.',
      'F': '..-.',
      'G': '--.',
      'H': '....',
      'I': '..',
      'J': '.---',
      'K': '-.-',
      'L': '.-..',
      'M': '--',
      'N':	'-.',
      'O':	'---',
      'P':	'.--.',
      'Q':	'--.-',
      'R':	'.-.',
      'S':	'...',
      'T':	'-',
      'U':	'..-',
      'V':	'...-',
      'W':	'.--',
      'X':	'-..-',
      'Y':	'-.--',
      'Z':	'--..',
      '0':	'-----',
      '1':	'.----',
      '2':	'..---',
      '3':	'...--',
      '4':	'....-',
      '5':	'.....',
      '6':	'-....',
      '7':	'--...',
      '8':	'---..',
      '9':	'----.',
      ' ': '  '
    },
    writable : false,
    enumerable : true,
    configurable : false
})

console.log( MorseCoder.decode( '- . ... -    - .... .. ...' ) )
