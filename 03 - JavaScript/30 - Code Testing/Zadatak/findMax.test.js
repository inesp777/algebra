const findMax = require('./script.js');
test(' argument testing', () => {
    expect(findMax(10, 2, 3,80)).toBe(80);
    expect(findMax()).toStrictEqual(undefined);
     expect(findMax([])).toStrictEqual(-Infinity);
})

