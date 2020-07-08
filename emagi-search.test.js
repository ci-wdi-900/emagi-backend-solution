const emagiSearch = require('./emagi-search.js');
const words = require('./emagi-words.js');
const symbols = require('./emagi-symbols.js');


describe('emagiSearch', () => {
  it(`given a full word, it returns the matching emoji in an array`, () => {
    const word1 = words[0]
    const word2 = words[1]
    const word3 = words[2]
    const searchResult1 = [symbols[0]]
    const searchResult2 = [symbols[1]]
    const searchResult3 = [symbols[2]]
    expect(emagiSearch(word1)).toEqual(searchResult1);
    expect(emagiSearch(word2)).toEqual(searchResult2);
    expect(emagiSearch(word3)).toEqual(searchResult3);
  })

  it(`returns the appropriate symbol given the start of a word`, () => {
    const searchTerm1 = 'piz'
    const searchTerm2 = 'rito'
    const searchTerm3 = 'storm'
    const symbols1 = ['🍕'];
    const symbols2 = ['🌯'];
    const symbols3 = ['🌩'];
    expect(emagiSearch(searchTerm1)).toEqual(symbols1);
    expect(emagiSearch(searchTerm2)).toEqual(symbols2);
    expect(emagiSearch(searchTerm3)).toEqual(symbols3);
  })
})
