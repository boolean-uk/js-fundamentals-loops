const numsZeroToThree = [];
const numsFiveToTen = [];
const evenNums = [];
const countdown = [];

// TODO: 1. Write a for loop that adds the numbers 0 to 3 to the numsZeroToThree array
for (let n = 0; n <= 3; n++) {
  numsZeroToThree.push(n);
}

// TODO: 2. Write a for loop that adds the numbers 5 to 10 to the numsFiveToTen array
for (let n = 5; n <= 10; n++) {
  numsFiveToTen.push(n);
}

// TODO: 3. Write a for loop that adds all the even numbers between 0 and 6 (0, 2, 4, 6) to evenNums
for (let n = 0; n <= 6; n++) {
  if (n % 2 === 0) {
    evenNums.push(n);
  }
}

// TODO: 4. Write a for loop that adds the numbers 3 to 0 (in that order) to the countdown array
for (let n = 0; n <= 3; n++) {
  countdown.unshift(n);
}
console.log(countdown)
// do not change below this line
module.exports = {
  a: numsZeroToThree,
  b: numsFiveToTen,
  c: evenNums,
  d: countdown
};
