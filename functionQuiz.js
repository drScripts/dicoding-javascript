function minimal(a, b) {
  if (a === b) {
    return a;
  } else if (a < b) {
    return a;
  } else if (b < a) {
    return b;
  }
}

const coba = minimal(3, 3);

function power(a, b) {
  return a ** b;
}

const coba1 = power(4, 0.5);

function calculate(value) {
  return value < 2 ? value : calculate(value - 1) + calculate(value - 2);
}
