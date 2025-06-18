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


test('returns sum of multiple comma-separated numbers', () => {
  expect(add("1,2,3,4")).toBe(10);
});

test('handles new lines between numbers along with commas', () => {
  expect(add("1\n2,3")).toBe(6);
});

test('supports custom single-character delimiter like ;', () => {
  expect(add("//;\n1;2")).toBe(3);
});

test('supports custom delimiter x and returns correct sum', () => {
  expect(add("//x\n2x3x4")).toBe(9);
});


test('throws error when a single negative number is provided', () => {
  expect(() => add("1,-3,4")).toThrow("negatives not allowed: -3");
});

test('throws error with all negative numbers listed', () => {
  expect(() => add("-1,-2,3")).toThrow("negatives not allowed: -1, -2");
});


test('ignores numbers greater than 1000', () => {
  expect(add("2,1001")).toBe(2);
  expect(add("1000,1")).toBe(1001);
  expect(add("1001")).toBe(0);
});

test('validate a custom input', () => {

    expect(() => add('12,aaa,45,bbb,44')).toThrow("string type not allwed: aaa, bbb")

})