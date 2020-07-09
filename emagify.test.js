const emagify = require('./emagify.js');


describe('emagify', () => {
  it(`transforms emoji words to symbols`, () => {
    const words1 = [
      'smile',
      'cool',
      'laugh',
      'angry',
      'cry',
      'wink',
    ]

    const symbols1 = [
      '😁',
      '😎',
      '😆',
      '😠',
      '😭',
      '😜',
    ]

    const words2 = [
      'poop',
      'heartbreak',
      'pizza',
      'tornado',
    ]

    const symbols2 = [
      '💩',
      '💔',
      '🍕',
      '🌪',
    ]

    expect(emagify(words1)).toEqual(symbols1);
    expect(emagify(words2)).toEqual(symbols2);
  })

  it(`leaves unrecognized words intact`, () => {
    const words1 = [
      'this',
      'is',
      'smile',
    ]

    const words2 = [
      'not',
      'to',
      'be',
      'confused',
      'with',
      'laugh',
    ]

    const symbols1 = [
      'this',
      'is',
      '😁',
    ]

    const symbols2 = [
      'not',
      'to',
      'be',
      'confused',
      'with',
      '😆',
    ]

    expect(emagify(words1)).toEqual(symbols1);
    expect(emagify(words2)).toEqual(symbols2);
  })
})
