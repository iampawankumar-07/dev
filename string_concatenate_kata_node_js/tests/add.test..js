const { add } = require('./add');

test('returns 0 for empty string', () => {
  expect(add("")).toBe(0);
});

test('returns number itself when one number is provided', () => {
  expect(add("5")).toBe(5);
});

test('returns sum of two comma-separated numbers', () => {
  expect(add("1,2")).toBe(3);
});
