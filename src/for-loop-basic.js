let numsZeroToThree = []
let numsFiveToTen = []
let evenNums = []
let countdown = []

// TODO: 1. Write a for loop that adds the numbers 0 to 3 to the numsZeroToThree array
numsZeroToThree = [...Array(4).keys()]
// TODO: 2. Write a for loop that adds the numbers 5 to 10 to the numsFiveToTen array
numsFiveToTen = [...Array(6).keys()].map((x) => x + 5)
// TODO: 3. Write a for loop that adds all the even numbers between 0 and 6 (0, 2, 4, 6) to evenNums
evenNums = [...Array(7).keys()].filter((x) => x % 2 === 0)
// TODO: 4. Write a for loop that adds the numbers 3 to 0 (in that order) to the countdown array
countdown = [...numsZeroToThree].reverse()
// do not change below this line
module.exports = {
  a: numsZeroToThree,
  b: numsFiveToTen,
  c: evenNums,
  d: countdown
}
