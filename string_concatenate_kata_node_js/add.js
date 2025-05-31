function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /[\n,]/; // default delimiter regex
  let input = numbers;

  // Check for custom delimiter
  if (numbers.startsWith('//')) {
    const parts = numbers.split('\n');
    const delimiterLine = parts[0].slice(2); // extract delimiter after //
    delimiter = new RegExp(`[${escapeRegExp(delimiterLine)}]`);
    input = parts[1];
  }

  return input
    .split(delimiter)
    .map(Number)
    .reduce((sum, n) => sum + n, 0);
}

// Escape regex characters for safe dynamic RegExp
function escapeRegExp(str) {
  return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

module.exports = { add };
