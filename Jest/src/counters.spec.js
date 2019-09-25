/* eslint-disable */
import { setTimerP, countDown } from './counters';

describe.skip('counter tests', () => {
  describe('Timer function', () => {
    it('Should throw Error: < 0', async () => {
      await expect(setTimerP(-1, 'abc')).rejects.toThrow('timeout must be > 0');
    });

    it('Should return value after set number of time.', async () => {
      const givenArg = 'abc';
      const val = await setTimerP(10, givenArg);
      expect(val).toBe(givenArg);
    });
  });

  describe('Counter function', () => {
    it('Should count down.', done => {
      expect.assertions(6);
      let cnt = 5;
      countDown('abc', -100, cnt, (arg, count, isDone) => {
        expect(count).toBe(cnt);
        cnt--;

        if (isDone) {
          done();
        }
      });
    });
  });
});
