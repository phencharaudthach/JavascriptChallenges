//  * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
//  *
//  * Parameter(s):
//  * nums: An array of numbers.
function modifyArray(nums) {
  var result = (n) => (n = n % 2 == 0 ? n * 2 : n * 3);
  var newArray = nums.map(result);
  return newArray;
}

console.log(modifyArray([1, 2, 3, 4, 5]));
