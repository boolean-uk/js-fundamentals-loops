const numsZeroToThree = []
const numsFiveToTen = []
const evenNums = []
const countdown = []

// TODO: 1. Write a for loop that adds the numbers 0 to 3 to the numsZeroToThree array
for (let i = 0; i <= 3; i++) {
  numsZeroToThree.push(i)
  console.log('1 -', numsZeroToThree)
}

// TODO: 2. Write a for loop that adds the numbers 5 to 10 to the numsFiveToTen array
for (let j = 5; j <= 10; j++) {
  numsFiveToTen.push(j)
  console.log('2 -', numsFiveToTen)
}

// TODO: 3. Write a for loop that adds all the even numbers between 0 and 6 (0, 2, 4, 6) to evenNums
// 0 1 2 3 4 5 6 --> 0 2 4 6
// ((k / 2) % === 0) === even numbers
// ((k / 2) % === 1) === odd numbers

for (let k = 0; k <= 6; k++) {
  if (k % 2 === 0) {
    evenNums.push(k)
  }
  console.log('3 -', evenNums)
}

// TODO: 4. Write a for loop that adds the numbers 3 to 0 (in that order) to the countdown array
for (let l = 3; l >= 0; l--) {
  countdown.push(l)
  console.log('4 -', countdown)
}
// do not change below this line
module.exports = {
  a: numsZeroToThree,
  b: numsFiveToTen,
  c: evenNums,
  d: countdown
}
