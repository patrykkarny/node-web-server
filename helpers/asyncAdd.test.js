import asyncAdd from './asyncAdd';

describe('asyncAdd test', () => {
  test('should return proper values', done => {
    asyncAdd(3, 4, (sum) => {
      expect(sum).toBe(7);
      done();
    });
  });
});
