function maxMin(arr) {
  const first = parseInt(arr[0], 10);
  return arr.reduce(
    (agg, val) => ({
      max: Math.max(agg.max, parseInt(val, 10)),
      min: Math.min(agg.min, parseInt(val, 10)),
    }),
    { max: first, min: first }
  );
}

function evenlyDivisible(arr) {
  return arr.map(x => parseInt(x, 10)).reduce((evenly, num, idx, allNumbers) => {
    if (evenly) {
      return evenly;
    }
    // eslint-disable-next-line no-plusplus
    for (let i = idx + 1; i < allNumbers.length; i++) {
      const curr = allNumbers[i];
      if (num !== curr && Math.max(num, curr) % Math.min(num, curr) === 0) {
        return Math.max(num, curr) / Math.min(num, curr);
      }
    }

    return null;
  }, null);
}

export default function solver(spreadsheet) {
  const rows = spreadsheet.split('\n').map(x => x.trim().split(/\s+/));
  return rows.reduce((acc, row) => acc + evenlyDivisible(row), 0);
}
