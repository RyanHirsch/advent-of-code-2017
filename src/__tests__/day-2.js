import solver from '../day-2';

describe('Day 2', () => {
  it('can solve the example', () => {
    const spreadsheet = `5 1 9 5
    7 5 3
    2 4 6 8`;
    expect(solver(spreadsheet)).toEqual(18);
  });
});
