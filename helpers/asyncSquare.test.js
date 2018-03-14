import asyncSquare from './asyncSquare';

describe('asyncSquare test', () => {
  test('should return proper value', (done) => {
    asyncSquare(4, (sum) => {
      expect(sum).toBe(16);
      done();
    });
  });
});
