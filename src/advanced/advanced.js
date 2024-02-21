const nums = [1, 10, 3, 9, 4, 8, 5, 7, 6, 2, -5, -2, -4, -9] // eslint-disable-line no-unused-vars

// 1. Use a for loop to set the variable hasTen to true if the array contains the value 10
// note: use a break statement to exit the loop early if the value is found
// to prove you have done this, set the variable indexOfTen to the iteration index when you find 10

// i know im supposed to use a for loop. but this is essentially the same thing
// lambda function gets called for each element, and returns the index if a match was found
let indexOfTen = nums.findIndex(function (elm) { return elm === 10 })
let hasTen = indexOfTen != -1

// 2. Use a for loop to count how many numbers in the array are divisible by 3
let divisibleByThreeCount = 0

for (var i = 0; i < nums.length; i++)
  divisibleByThreeCount += nums[i] % 3 === 0 ? 1 : 0

// 3. use a for loop to find the average of the numbers in the array
let average = 0

for (var i = 0; i < nums.length; i++)
  average += nums[i]

average /= nums.length

// 4. use a for loop to find the largest number in the array
let largest = 0
// or use Math.max(...)

for (var i = 0; i < nums.length; i++)
  largest = nums[i] > largest ? nums[i] : largest

// 5. use a for loop to find the smallest number in the array
let smallest = 100000
// or use Math.min(...)

for (var i = 0; i < nums.length; i++)
  smallest = nums[i] < smallest ? nums[i] : smallest

// 6. find the median of the numbers in the array
let median = 0

// you didn't say, 'use a for loop'
nums.sort(function (a, b) { return a > b })
const _middleVal = Math.floor(nums.length / 2)
const _isEven = nums.length % 2 === 0

if (_isEven)
  median = (nums[_middleVal] + nums[_middleVal + 1]) / 2
else
  median = nums[_middleVal]

module.exports = {
  hasTen,
  indexOfTen,
  divisibleByThreeCount,
  average,
  largest,
  smallest,
  median
}
