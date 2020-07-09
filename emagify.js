const symbols = require('./emagi-symbols');
const words = require('./emagi-words');


const emagify = function(userWords) {
  const results = [];
  for (const word of userWords) {
    const wordIndex = words.indexOf(word);
    if (wordIndex === -1) {
      results.push(word)
    } else {
      results.push(symbols[wordIndex]);
    }
  }

  return results;
}

// uses includes and no intermediate variables
const emagifyAlt = function(userWords) {
  const results = [];
  for (const word of userWords) {
    if (words.includes(word)) {
      results.push(symbols[words.indexOf(word)]);
    } else {
      results.push(word)
    }
  }

  return results;
}

module.exports = emagify;
