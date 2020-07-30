function getDayName(dateString) {
  const dayName = new Date(dateString);
  // Write your code here
  const daysOfTheWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  return daysOfTheWeek[dayName.getDay()];
}

console.log(getDayName(11 / 10 / 2010));
