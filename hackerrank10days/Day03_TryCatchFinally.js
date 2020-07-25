function reverseString(s) {
  try {
    var str = s.split('').reverse().join('');
    console.log(str);
  } catch (error) {
    console.log(error.message);
    console.log(s);
  }
}

reverseString('1234');
