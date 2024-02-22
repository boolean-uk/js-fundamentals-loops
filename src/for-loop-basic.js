const { e } = require("./for-loop-and-arrays")

const numsZeroToThree = []
const numsFiveToTen = []
const evenNums = []
const countdown = []

// TODO: 1. Write a for loop that adds the numbers 0 to 3 to the numsZeroToThree array
for (let count = 0; count <=3; count++) {
  numsZeroToThree.push(count)
}
  console.log(numsZeroToThree)
// TODO: 2. Write a for loop that adds the numbers 5 to 10 to the numsFiveToTen array
for ( let count = 5; count <= 10 ; count++) {
  numsFiveToTen.push(count)
}
console.log(numsFiveToTen)

// TODO: 3. Write a for loop that adds all the even numbers between 0 and 6 (0, 2, 4, 6) to evenNums

for ( let count = 0; count <=6; count+= 2) {
  evenNums.push(count) 
    console.log(evenNums);
}


console.log(evenNums)
// TODO: 4. Write a for loop that adds the numbers 3 to 0 (in that order) to the countdown array

for ( let count = 3; count >=0; count-= 1) {
  countdown.push(count)
  console.log(countdown);

}
// do not change below this line
module.exports = {
  a: numsZeroToThree,
  b: numsFiveToTen,
  c: evenNums,
  d: countdown
}
