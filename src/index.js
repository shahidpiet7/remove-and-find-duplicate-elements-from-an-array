import "./styles.css";
import removeDuplicate from "./removeDuplicateElementFromAnArray";
import findDuplicate from "./findDuplicateElementsFromAnArray";

document.getElementById("app").innerHTML = `
<h1>JavaScript basics Algorithm</h1>
<div>
  Remove and find duplicate elements from an array by using ES5 and ES6.
</div>
`;

const arr = [2, 1, 7, 3, 5, 7, 10, 2];

console.log("arr:", arr);
console.log("removeDuplicate:", removeDuplicate(arr));

const result = findDuplicate(arr);
const duplicateArr = Object.keys(result).filter((key) => !result[key]);
console.log("duplicateArr:", duplicateArr);
