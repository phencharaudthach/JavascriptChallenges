/*
 * Create the function factorial here
 */
function factorial(n) {
  var answer = 1;

  for (var i = 2; i <= n; i++) answer = answer * i;
  return answer;
}

console.log(factorial(4));
