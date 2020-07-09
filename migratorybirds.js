// function migratoryBirds(arr) {
//   var mostCommonBird = 0;
//   var unique = [];
//   var newArray = arr.sort();

//   for (var i = 0; i < newArray.length; i++) {
//     // console.log(mostCommonBird);
//     if (newArray[i + 1] === newArray[i]) {
//       unique.push(newArray[i]);
//     }
//   }
//   return unique;
// }

// console.log(migratoryBirds([1, 1, 2, 3, 3, 3]));

function migratoryBirds(arr) {
  //   var mostCommon = [];
  var count = 0;
  // var type = 0;
  arr.sort();

  for (var i = 0; i < arr.length; i++) {
    var type = arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i]) + 1;
    if (type > count) {
      count = type;
      mostCommon = arr[i];
    }
  }
  return mostCommon;
}
console.log(migratoryBirds([1, 1, 2, 3, 3, 3, 3, 4]));
