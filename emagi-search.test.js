const emagiSearch = require('./emagi-search.js');


describe('emagiSearch', () => {
  it(`given a full word, it returns the matching emoji in an array`, () => {
    const word1 = 'cool'
    const searchResult1 = ['😎']
    const word2 = 'praise'
    const searchResult2 = ['🙌']
    const word3 = 'sushi'
    const searchResult3 = ['🍣']

    expect(emagiSearch(word1)).toEqual(searchResult1);
    expect(emagiSearch(word2)).toEqual(searchResult2);
    expect(emagiSearch(word3)).toEqual(searchResult3);
  })

  it(`returns the appropriate symbol given the start of a word`, () => {
    const searchTerm1 = 'piz'
    const symbols1 = ['🍕'];
    const searchTerm2 = 'burr'
    const symbols2 = ['🌯'];
    const searchTerm3 = 'thun'
    const symbols3 = ['🌩'];

    expect(emagiSearch(searchTerm1)).toEqual(symbols1);
    expect(emagiSearch(searchTerm2)).toEqual(symbols2);
    expect(emagiSearch(searchTerm3)).toEqual(symbols3);
  })

  it(`returns the appropriate symbol even if the search string is not at the start of the word`, () => {
    const searchTerm1 = 'za'
    const symbols1 = ['🍕'];
    const searchTerm2 = 'rito'
    const symbols2 = ['🌯'];
    const searchTerm3 = 'storm'
    const symbols3 = ['🌩'];

    expect(emagiSearch(searchTerm1)).toEqual(symbols1);
    expect(emagiSearch(searchTerm2)).toEqual(symbols2);
    expect(emagiSearch(searchTerm3)).toEqual(symbols3);
  })

  it(`can return partial matches`, () => {
    const searchTerm1 = 'za'
    const symbols1 = ['🍕'];
    const searchTerm2 = 'rito'
    const symbols2 = ['🌯'];
    const searchTerm3 = 'storm'
    const symbols3 = ['🌩'];

    expect(emagiSearch(searchTerm1)).toEqual(symbols1);
    expect(emagiSearch(searchTerm2)).toEqual(symbols2);
    expect(emagiSearch(searchTerm3)).toEqual(symbols3);
  })

  it(`can return multiple matches`, () => {
    const searchTerm1 = 'heart'
    const symbols1 = ['💓', '💔'];
    const searchTerm2 = 'corn'
    const symbols2 = ['🦄', '🍿'];

    expect(emagiSearch(searchTerm1)).toEqual(symbols1);
    expect(emagiSearch(searchTerm2)).toEqual(symbols2);
  })
})
