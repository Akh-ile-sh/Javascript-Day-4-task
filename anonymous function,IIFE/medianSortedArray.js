const array1 = [1, 3, 5];
const array2 = [2, 4, 6, 7];

//anonymous
const medianSortedArrays = function (arr1, arr2) {
  const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
  const len = mergedArray.length;

  if (len % 2 === 0) {
    const cen1 = mergedArray[len / 2 - 1];
    const cen2 = mergedArray[len / 2];
    return (cen1 + cen2) / 2;
  } else {
    return mergedArray[Math.floor(len / 2)];
  }
};

console.log(medianSortedArrays(array1, array2));

//IIFE
(function (arr1, arr2) {
  const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
  const len = mergedArray.length;

  if (len % 2 === 0) {
    const cen1 = mergedArray[len / 2 - 1];
    const cen2 = mergedArray[len / 2];
    console.log((cen1 + cen2) / 2);
  } else {
    console.log(mergedArray[Math.floor(len / 2)]);
  }
})(array1, array2);
