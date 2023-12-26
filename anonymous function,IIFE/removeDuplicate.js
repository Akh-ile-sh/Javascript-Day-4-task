var array = [1, 3, 1, 3, 4, 5, 6, 4];

//anonymous
const removeDuplicate = function (arr) {
  var res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
};

console.log(removeDuplicate(array));

//IIFE
(function (arr) {
  var res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) {
      res.push(arr[i]);
    }
  }
  console.log(res);
})(array);
