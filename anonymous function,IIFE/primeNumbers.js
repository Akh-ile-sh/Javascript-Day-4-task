var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//anonymous function
var getPrimeNumbers = function (arr) {
  return arr.filter(function (num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  });
};

var primeNumbers = getPrimeNumbers(numbersArray);
console.log(primeNumbers);

//IIFE

(function () {
  function getPrimeNumbers(arr) {
    return arr.filter(function (num) {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return false; // Not a prime number
        }
      }
      return num > 1; // Prime numbers are greater than 1
    });
  }

  var primeNumbers = getPrimeNumbers(numbersArray);
  console.log(primeNumbers);
})();
