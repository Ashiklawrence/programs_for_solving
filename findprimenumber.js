const array = [2, 3, 13, 7, 18 , 8, 19, 15];
let prime = []
function primenumberseries() {
  for (i of array) {
    let isPrime = false;
    for (j = 2; j <= i; j++) {
      if (i % j == 0) {
        break;
      }
      isPrime = true;
    }
    if (isPrime == true) {
      prime.push(i)
    }
  }
  console.log(prime)
}
primenumberseries();
