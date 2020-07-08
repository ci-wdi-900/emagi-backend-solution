const emagify = require('./emagify.js');
const symbols = require('./emagi-symbols.js');
const words = require('./emagi-words.js');


describe('emagify', () => {
  it(`transforms emoji words to symbols`, () => {
    const words1 = [
      words[0],
      words[1],
      words[2],
      words[3],
      words[4],
      words[5],
      words[6],
      words[7],
    ]

    const words2 = [
      words[8],
      words[9],
      words[10],
      words[11],
    ]

    const symbols1 = [
      symbols[0],
      symbols[1],
      symbols[2],
      symbols[3],
      symbols[4],
      symbols[5],
      symbols[6],
      symbols[7],
    ]

    const symbols2 = [
      symbols[8],
      symbols[9],
      symbols[10],
      symbols[11],
    ]

    expect(emagify(words1)).toEqual(symbols1);
    expect(emagify(words2)).toEqual(symbols2);
  })

  it(`leaves unrecognized words intact`, () => {
    const words1 = [
      'this',
      'is',
      words[0],
    ]

    const words2 = [
      'not',
      'to',
      'be',
      'confused',
      'with',
      words[1],
    ]

    const symbols1 = [
      'this',
      'is',
      symbols[0],
    ]

    const symbols2 = [
      'not',
      'to',
      'be',
      'confused',
      'with',
      symbols[1],
    ]

    expect(emagify(words1)).toEqual(symbols1);
    expect(emagify(words2)).toEqual(symbols2);
  })
})
