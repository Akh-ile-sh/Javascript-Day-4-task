var names = ["nakulan", "sunny", "ganga", "sridevi"];

//anonumous functions
var titleCaps = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase(); //thsi will convert the uppercases letters in the rest of the string if any
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1); //only change the first letter to uppercase
  }
  return arr;
};

console.log(titleCaps(names));

//IIFE

(function (arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  console.log(arr);
})(names);
