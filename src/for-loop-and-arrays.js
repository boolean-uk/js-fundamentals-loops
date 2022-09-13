/* eslint-disable no-unused-vars */
const nums = [1, 3, 12, 5, 1, 6, 4, 1, 10]
/* eslint-disable no-unused-vars */
const letters = ['H', 'e', 'l', 'l', 'o']
let sum = 0
let word = ''

// TODO: Add code below this line to make the tests pass

// 1. Use a for loop to set the sum variable to the sum of all the values in nums
sum = 0

for (let i = 0; i < nums.length; i++) {
  sum += nums[i]
}

// 2. Use a for loop to populate doubledNums with every value from nums array doubled (i.e [2, 6, 24, etc...])
const doubledNums = []

for (let i2 = 0; i2 < nums.length; i2++)
doubledNums.push(nums[i2]*2)


// 3. Use a for loop to set word equal to all the letters in the letters array
word = ''

for (let i3 = 0; i3 < letters.length; i3++) {
word = letters.join('')
}

// 4. Use a for loop to populate everySecondNum with every second number from the nums array
const everySecondNum = []

for (let i4 = 1; i4 < nums.length; i4+=2) {
  everySecondNum.push(nums[i4])
}

// 5. Use a for loop to populate numsReversed with the numbers from nums in reverse order
const numsReversed = []

for (let i5 = 8; i5 >= 0; i5--) {
  numsReversed.push(nums[i5])
} 
console.log(numsReversed)

// do not change below this line
module.exports = {
  a: sum,
  b: doubledNums,
  c: word,
  d: everySecondNum,
  e: numsReversed
}
