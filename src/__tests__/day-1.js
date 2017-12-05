import solver from '../day1';

describe('Day 1', () => {
  it('can solve example 1122', () => {
    expect(solver('1122')).toEqual(3);
  });

  it('can solve example 1111', () => {
    expect(solver('1111')).toEqual(4);
  });

  it('can solve example 1234', () => {
    expect(solver('1234')).toEqual(0);
  });

  it('can solve example 91212129', () => {
    expect(solver('91212129')).toEqual(9);
  });
});
