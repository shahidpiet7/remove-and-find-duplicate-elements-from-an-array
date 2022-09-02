// Find duplicate elements from an array

function findDuplicate(arr) {
  const n = arr.length;
  let exists = {},
    elm;

  for (let i = 0; i < n; i++) {
    elm = arr[i];
    if (!exists[elm]) {
      exists[elm] = true;
    } else {
      exists[elm] = false;
    }
  }
  return exists;
}

export default findDuplicate;
