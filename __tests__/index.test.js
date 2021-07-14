import reverse from '../src/index.js';

test('reverse', () => {
  const str = 'Erebor'
  expect(reverse(str)).toEqual('roberE');
  expect(reverse('')).toEqual('');
});

test('matchers', () => {
  const data = [1, 2, 3];
  expect(data).toContain(2);
  expect('hello, world').toMatch('hello');
  expect({ key: 'value' }).toHaveProperty('key', 'value');
});