// k = 4 students, atleast 3 students need to be in attendance
// a = students arrival time, negative means they arrived early. Postive means that they are late.
// YES for class canceled or NO if it is not.

function angryProfessor(k, a) {
  var neededStudents = k[1];
  var studentsOnTime = [];

  for (var i = 0; i < a.length; i++) {
    if (a[i] <= 0) {
      studentsOnTime.push(a[i]);
    }
  }
  console.log(studentsOnTime, neededStudents);
  if (studentsOnTime.length === neededStudents) {
    return 'NO';
  } else {
    return 'YES';
  }
}

console.log(angryProfessor([4, 2], [0, -1, 2, 1]));
