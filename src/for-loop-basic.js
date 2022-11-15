const numsZeroToThree = []
const numsFiveToTen = []
const evenNums = []
const countdown = []

// TODO: 1. Write a for loop that adds the numbers 0 to 3 to the numsZeroToThree array

for (let i = 0; i <= 3; i++) {
  numsZeroToThree.push(i)
}

console.log(`Should log an array with numbers 0-3: ${numsZeroToThree}`)

// TODO: 2. Write a for loop that adds the numbers 5 to 10 to the numsFiveToTen array

for (let i = 5; i <= 10; i++) {
  numsFiveToTen.push(i)
}

console.log(`Sould log an array with numbers 5-10: ${numsFiveToTen}`)

// TODO: 3. Write a for loop that adds all the even numbers between 0 and 6 (0, 2, 4, 6) to evenNums

for (let i = 0; i <= 6; i += 2) {
  evenNums.push(i)
}

console.log(`Should log numbers 0, 2, 4, 6: ${evenNums}`)

// TODO: 4. Write a for loop that adds the numbers 3 to 0 (in that order) to the countdown array

for (let i = 3; i >= 0; i--) {
  countdown.push(i)
}

console.log(`Should log 3, 2, 1, 0: ${countdown}`)

// do not change below this line
module.exports = {
  a: numsZeroToThree,
  b: numsFiveToTen,
  c: evenNums,
  d: countdown
}
