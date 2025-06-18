function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const delimiterMatch = numbers.match(/^\/\/(.)\n/);
    delimiter = new RegExp(delimiterMatch[1]);
    numbers = numbers.split('\n').slice(1).join('\n');
  }

  const nums = numbers.split(delimiter).map(Number);
  const negatives = nums.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(', ')}`);
  }

  return nums.reduce((sum, n) => sum + n, 0);
}

module.exports = { add };
