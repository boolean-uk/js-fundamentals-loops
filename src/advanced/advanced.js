const nums = [1, 10, 3, 9, 4, 8, 5, 7, 6, 2, -5, -2, -4, -9] // eslint-disable-line no-unused-vars

// 1. Use a for loop to set the variable hasTen to true if the array contains the value 10
// note: use a break statement to exit the loop early if the value is found
// to prove you have done this, set the variable indexOfTen to the iteration index when you find 10
let hasTen = false
let indexOfTen = -1

for (let i= 0; i <nums.length; i++) {
  if (nums[i] === 10) {
    hasTen = true 
    indexOfTen = 1
    break
  }
}
console.log(indexOfTen)

// 2. Use a for loop to count how many numbers in the array are divisible by 3
let divisibleByThreeCount = 0
let divisibleByThree = 0
for (let i =0; i < nums.length; i++)  {
  divisibleByThree = nums[i] / 3
  if (Number.isInteger(divisibleByThree)) {
    divisibleByThreeCount += 1
  }
}
console.log(divisibleByThreeCount)
// 3. use a for loop to find the average of the numbers in the array
let average = 0
let total = 0
for (let i = 0; i < nums.length; i++) {
  total += nums[i]
  }
average = total / nums.length

console.log(average)

// 4. use a for loop to find the largest number in the array
let largest = 0
for (let i = 0; i < nums.length; i++) {
  if (nums[i] > largest) {
    largest = nums[i]
  }
}
console.log(largest)

// 5. use a for loop to find the smallest number in the array
let smallest = 100000
for (let i = 0; i < nums.length; i++) {
  if (nums[i] <smallest) {
    smallest = nums[i]
  }
}
console.log(smallest)

// 6. find the median of the numbers in the array
let median = 0
const sortedNums = nums.sort()
const half = Math.floor(sortedNums.length /2)

if (sortedNums.length % 2 === 0) {
  median = ( sortedNums[half -1] + sortedNums[half]) /2
  median = Math.ceil(median)
}

console.log(median)

module.exports = {
  hasTen,
  indexOfTen,
  divisibleByThreeCount,
  average,
  largest,
  smallest,
  median
}
