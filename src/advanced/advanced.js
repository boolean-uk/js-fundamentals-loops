const nums = [1, 10, 3, 9, 4, 8, 5, 7, 6, 2, -5, -2, -4, -9] // eslint-disable-line no-unused-vars

// 1. Use a for loop to set the variable hasTen to true if the array contains the value 10
// note: use a break statement to exit the loop early if the value is found
// to prove you have done this, set the variable indexOfTen to the iteration index when you find 10
let i = 0
let hasTen = false

for (i; i < nums.length; i++) {
  if (nums[i] === 10) {
    hasTen = true
    break
  }
}
const indexOfTen = i

// 2. Use a for loop to count how many numbers in the array are divisible by 3
const divisibleByThreeCount = count()

function count() {
  let number = 0
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] % 3 === 0) number++
  }
  return number
}

// 3. use a for loop to find the average of the numbers in the array
const average = () => {
  let total = 0
  for (let i = 0; i < nums.length; i++) {
    total += nums[i]
  }
  return total / nums.length
}

// 4. use a for loop to find the largest number in the array
const largest = () => {
  let largest = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) largest = nums[i]
  }
  return largest
}

// 5. use a for loop to find the smallest number in the array
const smallest = () => {
  let smallest = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < smallest) smallest = nums[i]
  }
  return smallest
}

// 6. find the median of the numbers in the array

const median =
  nums.sort().length % 2 === 0
    ? (nums[nums.length / 2 + 1] + nums[nums.length / 2]) / 2
    : nums[Math.floor(nums.length / 2)]

module.exports = {
  hasTen,
  indexOfTen,
  divisibleByThreeCount,
  average: average(),
  largest: largest(),
  smallest: smallest(),
  median
}
