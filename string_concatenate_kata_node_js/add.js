function add(numbers) {
  if (numbers === "") return 0;

  const parts = numbers.split(',');
  const sum = parts.reduce((acc, val) => acc + Number(val), 0);
  return sum;
}

module.exports = { add };
