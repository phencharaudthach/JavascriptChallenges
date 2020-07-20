function staircase(n) {
  var n = parseInt(n);

  for (var i = 0; i < n; i++) {
    var spaces = '';
    for (var j = n - 1; j > i; j--) {
      spaces = spaces + ' ';
    }
    for (var k = 0; k <= i; k++) {
      spaces = spaces + '#';
    }
    console.log(spaces);
  }
}
console.log(staircase(6));

//      #
//     ##
//    ###
//   ####
//  #####
// ######
