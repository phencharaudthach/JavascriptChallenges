function Rectangle(a, b) {
  var length = a;
  var width = b;
  var perimeter = 2 * (a + b);
  var area = a * b;

  return { length, width, perimeter, area };
}

console.log(Rectangle(4, 5));
