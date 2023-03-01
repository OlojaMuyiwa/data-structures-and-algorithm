// binary search only works for sorted array
// if array is not sorted, sort first
// if array is not empty find the middle element

function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) {
      return middleIndex;
    }
    if (target < middleIndex) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

console.log(
  binarySearch([32, 53, 46, 557, 7, 6, 43, 32, 23, 23, , 43].sort(), 7)
);
console.log(
  binarySearch(["ade", "lola", "tunde", "segun", "kunle"].sort(), "tunde")
);
console.log(
  binarySearch([32, 32, 1335, 5, 5413, 2323, 33, 34, 55, 5, 55, 5].sort(), 5)
);
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 5));
