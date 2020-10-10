/**
 * 给定一个整数数组 nums 和一个目标值 target.
 * 请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = nums.length - 1; i >= 0; i--) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [i, map.get(complement)];
    } else {
      map.set(nums[i], i);
    }
  }
};

module.exports = twoSum;
