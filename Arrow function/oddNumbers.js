var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const odd = (num) => {
  var oddArr = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 != 0) {
      oddArr.push(num[i]);
    }
  }
  return oddArr;
};

console.log(odd(numbers));
