const nums = [1, 3, 12, 5, 1, 6, 4, 1, 10] // eslint-disable-line no-unused-vars
const letters = ['H', 'e', 'l', 'l', 'o'] // eslint-disable-line no-unused-vars
let sum = 0 // eslint-disable-line prefer-const
let word = '' // eslint-disable-line prefer-const

// TODO: Add code below this line to make the tests pass
// 1. Use a for loop to set the sum variable to the sum of all the values in nums
for(a=0;a<nums.length;a++) sum=sum+nums[a]
// console.log(sum);
// 2. Use a for loop to populate doubledNums with every value from nums array doubled (i.e [2, 6, 24, etc...])
const doubledNums = []
for(b=0;b<nums.length;b++)  doubledNums[b]=nums[b] *2
// console.log(doubledNums);
// 3. Use a for loop to set word equal to all the letters in the letters array
for(c=0;c<letters.length;c++) word += letters[c]
// console.log(word);

// 4. Use a for loop to populate everySecondNum with every second number from the nums array
const everySecondNum = []
for(g=0,d=1;d<nums.length;d+=2,g++)  everySecondNum[g]=nums[d]
console.log(everySecondNum);

// 5. Use a for loop to populate numsReversed with the numbers from nums in reverse order
const numsReversed = []
for(f=0,e=nums.length-1;e>0,f<nums.length;f++,e--)  numsReversed[f]=nums[e]
// console.log(numsReversed);
// do not change below this line
module.exports = {
  a: sum,
  b: doubledNums,
  c: word,
  d: everySecondNum,
  e: numsReversed
}
