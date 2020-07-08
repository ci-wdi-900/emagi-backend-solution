const randomElement = require('./emagi-random.js');


describe('randomElement', () => {
  it(`gives back a random element from an array`, () => {
    const arr1 = [4]
    const arr2 = [3]
    const result1 = [];
    const result2 = [];
    let count = 0;
    while (count < 50) {
      result1.push(randomElement(arr1))
      result2.push(randomElement(arr2))
      count++;
    }
    expect(result1.every((element) => element === 4)).toBe(true);
    expect(result2.every((element) => element === 3)).toBe(true);
  })

  it(`can handle multiple-element arrays`, () => {
    const arr = [4, 5, 3, 6]
    const result = [];
    let count = 0;
    while (count < 500) {
      result.push(randomElement(arr))
      count++;
    }
    expect(result.every((element) => {
      return element === 3 || element === 4 || element === 5 || element === 6;
    })).toBe(true);
  })
})
