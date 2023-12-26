var array = [1, 3, 4, 5, 6];
var times = 2;

const rotateArray = function (arr, k) {
  var temp;
  for (let i = 0; i < k; i++) {
    temp = arr.pop();
    arr.unshift(temp);
  }
  return arr;
};

console.log(rotateArray(array, times));
