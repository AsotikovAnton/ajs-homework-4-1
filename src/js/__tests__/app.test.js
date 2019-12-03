import checkProductCount from '../app';

test('Integer', () => {
  expect(checkProductCount(7)).toBe(7);
});

test('Not Integer', () => {
  expect(() => checkProductCount('7.57')).toThrowError('7.57 не является числом');
});

test('String', () => {
  expect(checkProductCount('10')).toBe(10);
});