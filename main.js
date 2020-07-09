const symbols = require('./emagi-symbols.js');
const emagify = require('./emagify.js');
const emagiSearch = require('./emagi-search.js');
const randomElement = require('./emagi-random.js');


const command = process.argv[2];
const words = process.argv.slice(3);

if (command === 'convert') {
  console.log(emagify(words).join(' '));
} else if (command === 'search') {
  const emojis = emagiSearch(words[0]);
  for (const emoji of emojis) {
    console.log(emoji);
  }
} else if (command === 'random') {
  console.log(randomElement(symbols));
} else {
  console.log('Please type one of the following:')
  console.log('* "convert" followed by a sentence to get emoji replacement');
  console.log('* "search" followed by a word to search for matching emojis');
  console.log('* "random" to get a random emoji');
}


// or, as an switch statement
// switch(command) {
//   case 'convert':
//     console.log(emagify(words).join(' '));
//     break;
// 
//   case 'search':
//     const emojis = emagiSearch(words[0]);
//     for (const emoji of emojis) {
//       console.log(emoji);
//     }
// 
//     break;
// 
//   case 'random':
//     console.log(randomElement(symbols));
//     break;
// 
//   default:
//     console.log('Please type one of the following:')
//     console.log('* "convert" followed by a sentence to get emoji replacement');
//     console.log('* "search" followed by a word to search for matching emojis');
//     console.log('* "random" to get a random emoji');
//     break;
// }
