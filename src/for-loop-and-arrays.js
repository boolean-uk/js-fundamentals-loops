const nums = [1, 3, 12, 5, 1, 6, 4, 1, 10] // eslint-disable-line no-unused-vars
const letters = ['H', 'e', 'l', 'l', 'o'] // eslint-disable-line no-unused-vars
let sum = 0 // eslint-disable-line prefer-const
let word = '' // eslint-disable-line prefer-const

// TODO: Add code below this line to make the tests pass

// 1. Use a for loop to set the sum variable to the sum of all the values in nums
for (let a = 0; a < nums.length; a++) {
  sum = sum + nums[a]
  console.log('1 -', sum)
}

// 2. Use a for loop to populate doubledNums with every value from nums array doubled (i.e [2, 6, 24, etc...])
const doubledNums = []
for (let b = 0; b < nums.length; b++) {
  doubledNums.push(nums[b] * 2)
  console.log('2 -', doubledNums)
}

// 3. Use a for loop to set word equal to all the letters in the letters array
for (let c = 0; c < letters.length; c++) {
  word += letters[c]
  console.log('3 -', word)
}
// 4. Use a for loop to populate everySecondNum with every second number from the nums array
const everySecondNum = []
for (let d = 0; d < nums.length; d++) {
  if (d % 2 === 1) {
    everySecondNum.push(nums[d])
  }

  console.log('4 - ', everySecondNum)
}
// 5. Use a for loop to populate numsReversed with the numbers from nums in reverse order
const numsReversed = []
for (let e = nums.length - 1; e > -1; e--) {
  numsReversed.push(nums[e])
  console.log('5 - ', numsReversed)
}

// do not change below this line
module.exports = {
  a: sum,
  b: doubledNums,
  c: word,
  d: everySecondNum,
  e: numsReversed
}
