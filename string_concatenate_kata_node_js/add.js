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

   const checkForNonNumeric = input.split(delimiter).filter((currentNums) => isNaN(currentNums) === true)
  console.log("checkForNonNumeric", checkForNonNumeric)
  if(checkForNonNumeric.length > 0) {
    throw new Error(`string type not allwed: ${checkForNonNumeric.join(', ')}`)
  }

  const values = input
    .split(delimiter)
    .map(Number)
    .filter(n => n <= 1000);
    

  const negatives = values.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
  }

  return values.reduce((sum, n) => sum + n, 0);

}

// Escape regex characters for safe dynamic RegExp
function escapeRegExp(str) {
  return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

module.exports = { add };
