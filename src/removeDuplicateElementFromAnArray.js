// Remove duplicate element from an array

function removeDuplicate(arr) {
  const n = arr.length;
  let exists = {},
    uniqueArr = [],
    element;

  for (let i = 0; i < n; i++) {
    element = arr[i];
    if (!exists[element]) {
      uniqueArr.push(element);
      exists[element] = true;
    }
  }
  return uniqueArr;
}

export default removeDuplicate;
