const numsZeroToThree = []
const numsFiveToTen = []
const evenNums = []
const countdown = []

// TODO: 1. Write a for loop that adds the numbers 0 to 3 to the numsZeroToThree array

for (let i = 0; i <= 3; i++) {
  numsZeroToThree.push(i)
  console.log(numsZeroToThree)
  }

// TODO: 2. Write a for loop that adds the numbers 5 to 10 to the numsFiveToTen array

for (let i1 = 5; i1 <= 10 ; i1 ++){
  numsFiveToTen.push(i1)
  console.log(numsFiveToTen)
}
// TODO: 3. Write a for loop that adds all the even numbers between 0 and 6 (0, 2, 4, 6) to evenNums

for (let i2 = 0; i2 <= 6; i2+=2){
  evenNums.push(i2)
  console.log(evenNums)
}
// TODO: 4. Write a for loop that adds the numbers 3 to 0 (in that order) to the countdown array

for(let i3 = 3; i3 >= 0 ; i3--){
  countdown.push(i3)
  console.log(countdown)
}
// do not change below this line
module.exports = {
  a: numsZeroToThree,
  b: numsFiveToTen,
  c: evenNums,
  d: countdown
}
