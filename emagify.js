const symbols = require('./emagi-symbols');
const words = require('./emagi-words');


const emagify = function(userWords) {
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
