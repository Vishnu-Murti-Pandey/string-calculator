const { add } = require('./calculator');

test('empty string returns 0', () => {
  expect(add("")).toBe(0);
});

test('single number', () => {
  expect(add("5")).toBe(5);
});

test('two numbers', () => {
  expect(add("1,2")).toBe(3);
});

test('multiple numbers with new lines', () => {
  expect(add("1\n2,3")).toBe(6);
});

test('custom delimiter', () => {
  expect(add("//;\n1;2")).toBe(3);
});

test('throws error on negative numbers', () => {
  expect(() => add("1,-2,3,-4")).toThrow("negative numbers not allowed: -2, -4");
});
