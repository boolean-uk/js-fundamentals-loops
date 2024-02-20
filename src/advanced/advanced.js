const nums = [1, 10, 3, 9, 4, 8, 5, 7, 6, 2, -5, -2, -4, -9] // eslint-disable-line no-unused-vars

// 1. Use a for loop to set the variable hasTen to true if the array contains the value 10
// note: use a break statement to exit the loop early if the value is found
// to prove you have done this, set the variable indexOfTen to the iteration index when you find 10
let hasTen = false
let indexOfTen = -1

if (nums.includes(10)) {
  hasTen = true
  indexOfTen = nums.indexOf(10)
}

// 2. Use a for loop to count how many numbers in the array are divisible by 3
let divisibleByThreeCount = 0
for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 3 === 0) {
    divisibleByThreeCount++
  }
}

// 3. use a for loop to find the average of the numbers in the array
// let average = nums.reduce((acc, curr) => acc + curr) / nums.length
let average = 0
for (let i = 0; i < nums.length; i++) {
  average += nums[i]
}
average = average / nums.length

// 4. use a for loop to find the largest number in the array
const largest = nums.reduce((a, b) => Math.max(a, b), -Infinity)

// 5. use a for loop to find the smallest number in the array
const smallest = nums.reduce((a, b) => Math.min(a, b), Infinity)

// 6. find the median of the numbers in the array
let median = 0
nums.sort((a, b) => a - b)
if (nums.length % 2 === 0) {
  const index = nums.length / 2 - 1
  const middleNumber1 = nums[index]
  const middleNumber2 = nums[index + 1]
  median = Math.floor((middleNumber1 + middleNumber2) / 2)
} else {
  const index = nums.length / 2 - 1
  median = Math.floor(nums[index])
}

module.exports = {
  hasTen,
  indexOfTen,
  divisibleByThreeCount,
  average,
  largest,
  smallest,
  median
}
