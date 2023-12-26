var array = ["level", "hello"];

var isPalindrome = function (arr) {
  var palindrome = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].split("").reverse().join("")) {
      palindrome.push(arr[i]);
    }
  }
  console.log(palindrome);
};

isPalindrome(array);

//IIFE
(function (arr) {
  var palindrome = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].split("").reverse().join("")) {
      palindrome.push(arr[i]);
    }
  }
  console.log(palindrome);
})(array);
