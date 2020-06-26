function countingValleys(steps, directions) {
  let valley = 0;
  let location = 0;

  for (var i = 0; i < directions.length; i++) {
    if (directions[i] === 'U') {
      ++location;
    }
    if (directions[i] === 'D') {
      --location;
    }

    if (location === -1 && directions[i] === 'D') {
      valley++;
    }
  }
  return valley;
}

console.log(countingValleys(12, 'DDUUDDUDUUUD'));
