const numsZeroToThree = []
const numsFiveToTen = []
const evenNums = []
const countdown = []

// TODO: 1. Write a for loop that adds the numbers 0 to 3 to the numsZeroToThree array
for (let i=0; i <= 3; i++) {
  numsZeroToThree[i] = i
}

// TODO: 2. Write a for loop that adds the numbers 5 to 10 to the numsFiveToTen array
for(let i=0; i<=5; i++) {
  numsFiveToTen[i] = i + 5
}

// TODO: 3. Write a for loop that adds all the even numbers between 0 and 6 (0, 2, 4, 6) to evenNums
let count = 0;
for (let i=0; i < 4; i++) {
  evenNums[i] = count
  count += 2 
}

// TODO: 4. Write a for loop that adds the numbers 3 to 0 (in that order) to the countdown array
for (let i=0; i<=3; i++) {
  countdown[i] = 3 - i
}

// do not change below this line
module.exports = {
  a: numsZeroToThree,
  b: numsFiveToTen,
  c: evenNums,
  d: countdown
}
