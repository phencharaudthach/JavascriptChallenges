// return the second largest number

function getSecondLargestNums(nums) {
  // nums = parseInt(nums);
  var largestNum = 0;
  var secondLarge = 0;
  for (var i = 0; i < nums.length; i++) {
    // console.log(nums[i]);
    if (nums[i] > largestNum) {
      largestNum = nums[i];
    }
    if (nums[i] < largestNum) {
      secondLarge = nums[i];
    }
  }
  console.log(largestNum);
  return secondLarge;
}
console.log(getSecondLargestNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
