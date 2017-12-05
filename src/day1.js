export default function solver(val) {
  const arr = val.split('');
  let sum = 0;

  const get = index =>
    index < arr.length ? parseInt(arr[index], 10) : parseInt(arr[arr.length % index], 10);

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < arr.length; i++) {
    if (get(i) === get(i + 1)) {
      sum += get(i);
    }
  }
  return sum;
}
