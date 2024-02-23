const nums = [1, 10, 3, 9, 4, 8, 5, 7, 6, 2, -5, -2, -4, -9] // eslint-disable-line no-unused-vars

// 1. Use a for loop to set the variable hasTen to true if the array contains the value 10
// note: use a break statement to exit the loop early if the value is found
// to prove you have done this, set the variable indexOfTen to the iteration index when you find 10
const hasTen = nums.includes(10)
const indexOfTen = nums.indexOf(10)

// 2. Use a for loop to count how many numbers in the array are divisible by 3
let divisibleByThreeCount = 0
for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 3 === 0) {
    divisibleByThreeCount++
  }
}
console.log(divisibleByThreeCount)

// 3. use a for loop to find the average of the numbers in the array
let sum = 0
for (let i = 0; i < nums.length; i++) {
  sum += nums[i]
}
const average = sum / nums.length
// 4. use a for loop to find the largest number in the array
let largest = 0

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > largest) {
    largest = nums[i]
  }
}

// 5. use a for loop to find the smallest number in the array
let smallest = 100000
for (let i = 0; i < nums.length; i++) {
  if (nums[i] < smallest) {
    smallest = nums[i]
  }
}
// 6. find the median of the numbers in the array
let median = 0
const sortedNums = nums.sort((a, b) => a - b)
if (nums.length % 2 === 0) {
  const midIndex = sortedNums.length / 2 - 1
  const midIndex2 = sortedNums.length / 2
  median = Math.floor((sortedNums[midIndex] + sortedNums[midIndex2]) / 2)
} else {
  const midIndex = Math.floor(sortedNums.length / 2)
  median = sortedNums[midIndex]
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
