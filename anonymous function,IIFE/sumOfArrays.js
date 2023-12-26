var numbers = [1, 3, 4, 5, 6, 7];

//Anonymous
var ArraySum = function (arr) {
  var sum = 0;
  for (const val of arr) {
    sum += val;
  }
  return sum;
};

console.log(ArraySum(numbers));

//IIFE
(function (arr) {
  var sum = 0;
  for (const val of arr) {
    sum += val;
  }
  console.log(sum);
})(numbers);
