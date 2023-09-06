const nums = [1, 3, 12, 5, 1, 6, 4, 1, 10]
const letters = ['H', 'e', 'l', 'l', 'o']
let sum = 0
let word = ''

// 1. Use a for loop to set the sum variable to the sum of all the values in nums
for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
}
console.log("Sum:", sum);




// 2. Use a for loop to populate doubledNums with every value from nums array doubled
const doubledNums = []
for (let i = 0; i < nums.length; i++) {
  doubledNums.push(nums[i] * 2);
}
console.log("Doubled Numbers:", doubledNums);




// 3. Use a for loop to set word equal to all the letters in the letters array
for (let i = 0; i < letters.length; i++) {
  word += letters[i];
}
console.log("Word:", word);




// 4. Use a for loop to populate everySecondNum with every second number from the nums array
const everySecondNum = []
for (let i = 1; i < nums.length; i += 2) { 
  everySecondNum.push(nums[i]);
}
console.log("Every Second Number:", everySecondNum);



// 5. Use a for loop to populate numsReversed with the numbers from nums in reverse order
const numsReversed = []
for (let i = nums.length - 1; i >= 0; i--) {
  numsReversed.push(nums[i]);
}
console.log("Reversed Numbers:", numsReversed);

module.exports = {
  a: sum,
  b: doubledNums,
  c: word,
  d: everySecondNum,
  e: numsReversed
}
