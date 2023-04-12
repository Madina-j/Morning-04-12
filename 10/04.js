const Array1 = [2, 1, 10];

Array1.sort(compareF);
console.log(Array1);

function compareF(a, b) {
  if (a > b) {
    return -1;
  } else {
    return 1;
  }
}

const sumArraydifference = () => {
  let total = 0;
  for (i = 0; i < Array1.length - 1; i++) {
    let a = Array1[i] - Array1[i + 1];
    console.log(a);
    total += a;
  }
  console.log(total);
};
sumArraydifference();
