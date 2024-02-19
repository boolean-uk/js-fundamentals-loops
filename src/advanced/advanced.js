const nums = [1, 10, 3, 9, 4, 8, 5, 7, 6, 2, -5, -2, -4, -9] // eslint-disable-line no-unused-vars

// 1. Use a for loop to set the variable hasTen to true if the array contains the value 10
// note: use a break statement to exit the loop early if the value is found
// to prove you have done this, set the variable indexOfTen to the iteration index when you find 10
let hasTen = false
let indexOfTen = -1
for (let i = 0; i <= nums.length; i++)
{
  if (nums[i] === 10)
  {
    hasTen = true;
    indexOfTen = i;
    break;
  }
}

// 2. Use a for loop to count how many numbers in the array are divisible by 3
let divisibleByThreeCount = 0
for (let i = 0; i < nums.length; i++)
{
  if (nums[i]%3 === 0)
  {
    divisibleByThreeCount ++;
  }
}

// 3. use a for loop to find the average of the numbers in the array
let average = 0
let total = 0;
for (let i = 0; i < nums.length; i++)
{
  total += nums[i]
}
average = total/nums.length;

// 4. use a for loop to find the largest number in the array
let largest = 0
for (let i = 0; i <= nums.length; i++)
{
  if (nums[i] > largest)
  {
    largest = nums[i]
  }
  else { largest = largest}
}

// 5. use a for loop to find the smallest number in the array
let smallest = 100000
for (let i = 0; i <= nums.length; i++)
{
  if (nums[i] < smallest)
  {
    smallest = nums[i]
  }
  else { smallest = smallest}
}

// 6. find the median of the numbers in the array
let median = 10000;
nums.sort((a, b) => a - b); // Sort the array in ascending order
const mid = Math.floor(nums.length / 2);

// Calculate the median based on length
if (nums.length % 2 === 0) {
  // Even length: average of two middle elements
  median =  (nums[mid - 1] + nums[mid]) / 2;
} else {
  // Odd length: middle element
  median =  nums[mid];
}
console.log(nums)
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
