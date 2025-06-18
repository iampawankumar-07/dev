function add(numbers) {
  if (numbers === "") return 0;

  const { delimiter, input } = extractDelimiterAndInput(numbers);
  const parts = splitAndValidateInput(input, delimiter);

  const values = parts.map(Number).filter(n => n <= 1000);
  validateNegatives(values);

  return values.reduce((sum, n) => sum + n, 0);
}

function extractDelimiterAndInput(numbers) {
  const defaultDelimiter = /[\n,]/;

  if (!numbers.startsWith('//')) {
    return { delimiter: defaultDelimiter, input: numbers };
  }

  const [delimiterLine, ...rest] = numbers.split('\n');
  const customDelimiter = delimiterLine.slice(2);
  const safeDelimiter = new RegExp(`[${escapeRegExp(customDelimiter)}]`);
  return { delimiter: safeDelimiter, input: rest.join('\n') };
}

function splitAndValidateInput(input, delimiter) {
  const parts = input.split(delimiter);

  const nonNumeric = parts.filter(p => isNaN(p));
  if (nonNumeric.length > 0) {
    throw new Error(`string type not allowed: ${nonNumeric.join(', ')}`);
  }

  return parts;
}

function validateNegatives(values) {
  const negatives = values.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
  }
}

// Escape regex characters for safe dynamic RegExp
function escapeRegExp(str) {
  return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

module.exports = { add };
