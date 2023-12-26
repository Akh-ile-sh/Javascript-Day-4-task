var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var getPrimeNumbers = (arr) => {
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
