import { sum } from './index';

test('add 1 + 2 equals 3', () => {
    expect(sum(1,2)).toBe(3);
})

test('add 2 + 3 equals 5', () => {
    expect(sum(2,3)).toBe(5);
})