const numsZeroToThree = []
const numsFiveToTen = []
const evenNums = []
const countdown = []

// TODO: 1. Write a for loop that adds the numbers 0 to 3 to the numsZeroToThree array
let i = 0
while (i < 4) {
  numsZeroToThree.push(i)
  i++
}

// TODO: 2. Write a for loop that adds the numbers 5 to 10 to the numsFiveToTen array
i = 5
while (i < 11) {
  numsFiveToTen.push(i)
  i++
}

// TODO: 3. Write a for loop that adds all the even numbers between 0 and 6 (0, 2, 4, 6) to evenNums
i = 0
while (i < 7) {
  if (i % 2 === 0) evenNums.push(i)
  i++
}

// TODO: 4. Write a for loop that adds the numbers 3 to 0 (in that order) to the countdown array
i = 3
while (i >= 0) {
  countdown.push(i)
  i--
}

// do not change below this line
module.exports = {
  a: numsZeroToThree,
  b: numsFiveToTen,
  c: evenNums,
  d: countdown
}
