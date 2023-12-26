var array = ["level", "hello"];

var isPalindrome = (arr) => {
  var palindrome = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].split("").reverse().join("")) {
      palindrome.push(arr[i]);
    }
  }
  console.log(palindrome);
};

isPalindrome(array);
