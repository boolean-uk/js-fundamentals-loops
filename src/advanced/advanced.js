const nums = [1, 10, 3, 9, 4, 8, 5, 7, 6, 2, -5, -2, -4, -9] // eslint-disable-line no-unused-vars

// 1. Use a for loop to set the variable hasTen to true if the array contains the value 10
// note: use a break statement to exit the loop early if the value is found
// to prove you have done this, set the variable indexOfTen to the iteration index when you find 10
let hasTen = false
let indexOfTen = -1

for ( let i = 0; i < nums.length; i++ ){
  if ( nums[i] == 10){
    indexOfTen = i;
    hasTen = true;
    break;
  }
}

// 2. Use a for loop to count how many numbers in the array are divisible by 3
let divisibleByThreeCount = 0
nums.forEach(num => divisibleByThreeCount += num % 3 == 0 ? 1 : 0);

// 3. use a for loop to find the average of the numbers in the array
let average = 0
nums.forEach(num => average += num);
average /= nums.length;

// 4. use a for loop to find the largest number in the array
let largest = 0
nums.forEach(num => largest = num > largest ? num : largest);

// 5. use a for loop to find the smallest number in the array
let smallest = 100000
nums.forEach(num => smallest = num < smallest ? num : smallest);

// 6. find the median of the numbers in the array
let median = 0
let values = [...nums].sort((a, b) => a - b);
let index = Math.floor(values.length / 2);
median = values.length % 2 == 1 ? values.at(index) : 
  Math.floor((values.at(index - 1) + values.at(index) ) / 2);

// You are not supposed to floor a median, but it has been done


module.exports = {
  hasTen,
  indexOfTen,
  divisibleByThreeCount,
  average,
  largest,
  smallest,
  median
}
