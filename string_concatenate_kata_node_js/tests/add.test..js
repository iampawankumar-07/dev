const { add } = require('./add');

test('returns 0 for empty string', () => {
  expect(add("")).toBe(0);
});

test('returns number itself when one number is provided', () => {
  expect(add("5")).toBe(5);
});
