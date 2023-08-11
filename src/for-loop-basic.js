const numsZeroToThree = []
const numsFiveToTen = []
const evenNums = []
const countdown = []

// TODO: 1. Write a for loop that adds the numbers 0 to 3 to the numsZeroToThree array
for (let num = 0; num < 4; ++num) {
  numsZeroToThree.push(num)
}

// TODO: 2. Write a for loop that adds the numbers 5 to 10 to the numsFiveToTen array
for (let num = 5; num < 11; ++num) {
  numsFiveToTen.push(num)
}

// TODO: 3. Write a for loop that adds all the even numbers between 0 and 6 (0, 2, 4, 6) to evenNums
for (let num = 0; num < 7; num += 2) {
  evenNums.push(num)
}

// TODO: 4. Write a for loop that adds the numbers 3 to 0 (in that order) to the countdown array
for (let num = 3; num >= 0; --num) {
  countdown.push(num)
}

// do not change below this line
module.exports = {
  a: numsZeroToThree,
  b: numsFiveToTen,
  c: evenNums,
  d: countdown
}
