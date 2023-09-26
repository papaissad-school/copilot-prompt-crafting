const calculator = require('./samples/calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator(1, 2, '+')).toBe(3);
});

test('subtracts 5 - 2 to equal 3', () => {
  expect(calculator(5, 2, '-')).toBe(3);
});

test('multiplies 3 * 4 to equal 12', () => {
  expect(calculator(3, 4, '*')).toBe(12);
});

test('divides 10 / 2 to equal 5', () => {
  expect(calculator(10, 2, '/')).toBe(5);
});

test('modulus 10 % 3 to equal 1', () => {
  expect(calculator(10, 3, '%')).toBe(1);
});

test('returns error when dividing by zero', () => {
  expect(calculator(10, 0, '/')).toBe('Error: Division by zero');
});

test('returns error when invalid operator is used', () => {
  expect(calculator(10, 2, 'invalid')).toBe('Error: Invalid operator');
});