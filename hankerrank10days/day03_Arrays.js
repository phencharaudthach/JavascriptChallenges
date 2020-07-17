// return the second largest number

function getSecondLargestNums(nums) {
  var seondLarge = 0;
  for (var i = 0; i < nums.length - 1; i++) {
    // console.log(nums[i]);
    if (nums[i] > nums[i + 1]) {
      var largestNum = nums[i];
      console.log(largestNum);
      console.log(nums.indexOf(nums[i]));
    }
  }
}
console.log(getSecondLargestNums([2, 3, 6, 6, 5]));
