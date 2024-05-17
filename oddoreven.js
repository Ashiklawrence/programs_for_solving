function oddoreven() {
  const array = [1, 2, 3, 4, 5, 6, 7];
  const odd = [];
  const even = [];

  for (i of array) {
    if (i % 2 == 0) {
      even.push(i);
    } else {
      odd.push(i);
    }
  }
  console.log('Odd numbers:',odd);
  console.log('Even numbers:',even);
}

oddoreven();
