import Stack from '../src/stack.js';

const pancakes = new Stack();

test('stack sequence test', () => {
    pancakes.push(1);
    pancakes.push(32);
    expect(pancakes.isEmpty()).toBeFalsy();
    pancakes.push(4);
    pancakes.push(43);
    pancakes.pop();
    expect(pancakes.getContent()).toEqual([1, 32, 4]);
});

test('more sequences', () => {
    expect(pancakes.isEmpty()).toBe(false);
    pancakes.pop();
    expect(pancakes.pop()).toEqual(32);
});