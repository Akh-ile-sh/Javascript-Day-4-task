var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//anonymous function
const odd = function (num) {
  var oddArr = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 != 0) {
      oddArr.push(num[i]);
    }
  }
  return oddArr;
};

console.log(odd(numbers));

//IIFE

(function (num1) {
  var oddArr1 = [];
  for (let i = 0; i < num1.length; i++) {
    if (num1[i] % 2 != 0) {
      oddArr1.push(num1[i]);
    }
  }
  console.log(oddArr1);
})(numbers);
