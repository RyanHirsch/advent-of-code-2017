import solver from '../day-2';

describe('Day 2', () => {
  it('can solve the example', () => {
    const spreadsheet = `5 9 2 8
    9 4 7 3
    3 8 6 5`;
    expect(solver(spreadsheet)).toEqual(9);
  });
});
