import multipleByTwo from './multipleByTwo';

describe('myltipleByTwo test', () => {
  test('myltipleByTwo should return number multipled by two', () => {
    expect(multipleByTwo(2)).toBe(4);
  });
});
