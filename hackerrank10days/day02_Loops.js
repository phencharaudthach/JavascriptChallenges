// a
// a
// i
// o
// o
// j
// v
// s
// c
// r
// p
// t
// l
// p
// s

function vowelsAndConsonants(s) {
  var consonantLetters = [];
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  for (var i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      console.log(s[i]);
    } else {
      consonantLetters.push(s[i]);
    }
  }
  for (var i = 0; i < consonantLetters.length; i++) {
    console.log(consonantLetters[i]);
  }
}
vowelsAndConsonants('javascriptloops');
