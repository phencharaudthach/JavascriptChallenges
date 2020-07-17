function staircase(n) {
  var outputStaircase = '#';

  for (var i = 0; i < n; i++) {
    console.log(outputStaircase.padStart(n));
    outputStaircase += '#';
  }
}
console.log(staircase(6));

//      #
//     ##
//    ###
//   ####
//  #####
// ######
