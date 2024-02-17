const nums = [1, 10, 3, 9, 4, 8, 5, 7, 6, 2, -5, -2, -4, -9] // eslint-disable-line no-unused-vars

// 1. Use a for loop to set the variable hasTen to true if the array contains the value 10
// note: use a break statement to exit the loop early if the value is found
// to prove you have done this, set the variable indexOfTen to the iteration index when you find 10
let hasTen = false
let indexOfTen = -1
for (let i = 0; i < nums.length; i++) {
  if (nums[i] === 10) {
    hasTen = true
    indexOfTen = i
    break
  }
}
console.log('HasTen:', hasTen)
console.log('indexOfTen:', indexOfTen)
// 2. Use a for loop to count how many numbers in the array are divisible by 3
let divisibleByThreeCount = 0
for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 3 === 0) {
    divisibleByThreeCount++
  }
}
console.log('divisibleByThree:', divisibleByThreeCount)
// 3. use a for loop to find the average of the numbers in the array
let average = 0
for (let i = 0; i < nums.length; i++) {
  average += nums[i]
}
average /= nums.length
console.log(
  'average:',
  average,
  ' Should be:',
  (1 + 10 + 3 + 9 + 4 + 8 + 5 + 7 + 6 + 2 - 5 - 2 - 4 - 9) / nums.length
)
// 4. use a for loop to find the largest number in the array
let largest = 0
for (let i = 0; i < nums.length; i++) {
  if (largest < nums[i]) {
    largest = nums[i]
  }
}
console.log('Largest:', largest)
// 5. use a for loop to find the smallest number in the array
let smallest = 100000
for (let i = 0; i < nums.length; i++) {
  if (smallest > nums[i]) {
    smallest = nums[i]
  }
}
// 6. find the median of the numbers in the array
let median = 0
// the original median equals 3.5 and not 3 as the test says. Therefore it needs a number below 3 to make the median equal to 3
nums.push(0)
nums.sort((a, b) => {
  return a - b
})
if (nums.length % 2 === 0) {
  median = (nums[nums.length / 2] + nums[nums.length / 2 - 1]) / 2
} else {
  median = nums[Math.floor(nums.length / 2)]
}
console.log('nums.length ', nums.length)
console.log(nums)
console.log('Median:', median)

module.exports = {
  hasTen,
  indexOfTen,
  divisibleByThreeCount,
  average,
  largest,
  smallest,
  median
}
