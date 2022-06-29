/*
Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function recursiveBinarySearch(nums, target, start = 0, end = nums.length) {
  // If we are only searching a single element, return the index of that element.
  if (start === end) return start;

  // Find the index of the middle of our range.
  // Use right bitwise shift to quickly divide and truncate the result.
  const middle = ((end - start) >> 1) + start;

  // If the middle of our range has our target, return that index.
  if (nums[middle] === target) return middle;

  // If the middle value of the range we're searching is less than our target, search the upper half of the range, otherwise search the lower half of the range.
  return (nums[middle] < target) 
      ? recursiveBinarySearch(nums, target, middle + 1, end) 
      : recursiveBinarySearch(nums, target, start, middle);
}

var searchInsert = function(nums, target) {
    return recursiveBinarySearch(nums, target);    
};
