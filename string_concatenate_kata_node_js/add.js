function add(numbers) {
  if (numbers === "") return 0;

  return numbers
    .split(/[\n,]/) // regex: split on comma or newline
    .map(Number)
    .reduce((sum, n) => sum + n, 0);
}

module.exports = { add };
