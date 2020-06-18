// Complete the countApplesAndOranges function in the editor below. It should print the number of apples and oranges that land on Sam's house, each on a separate line.

// countApplesAndOranges has the following parameter(s):

// s: integer, starting point of Sam's house location.
// t: integer, ending location of Sam's house location.
// a: integer, location of the Apple tree.
// b: integer, location of the Orange tree.
// apples: integer array, distances at which each apple falls from the tree.
// oranges: integer array, distances at which each orange falls from the tree.

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  var applesResults = '';
  var howManyApples = 0;
  for (var i = 0; i < apples.length; i++) {
    applesResults = apples[i] + a;
    console.log('this is the array apples + a', applesResults);
    if (applesResults >= s && applesResults <= t) {
      howManyApples += 1;
    }
    // console.log('this is the apple array', apples[i]);
  }
  console.log('this is how many', howManyApples);

  var orangesResults = '';
  var howManyOranges = 0;
  for (var i = 0; i < oranges.length; i++) {
    orangesResults = oranges[i] + b;
    console.log('this is the array oranges + a', orangesResults);
    if (orangesResults >= s && orangesResults <= t) {
      howManyOranges += 1;
    }
    // console.log('this is the apple array', apples[i]);
  }
  console.log('this is how many', howManyOranges);
}
countApplesAndOranges(2, 3, 1, 5, [-2], [-1]);
