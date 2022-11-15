const nestedOne = []

for (let i = 1; i <= 10; i++) {
    const insideOne = []
    for (let j = i; j < i * 2; j++) {
      insideOne.push(i)
    }
    nestedOne.push(insideOne)