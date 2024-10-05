/* Your JS goes in this file */
function isAdult(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

const isAdultResult = isAdult(24);
console.log(isAdultResult);

function didStudentPass(score) {
  if (score >= 70) {
    return true;
  } else {
    return false;
  }
}

const didStudentPassResult = didStudentPass(69);
console.log(didStudentPassResult);

function gradeCalculator(score) {
  if (score < 60) {
    return 'F';
  } else if (score >= 60 && score < 70) {
    return 'D';
  } else if (score >= 70 && score < 80) {
    return 'C';
  } else if (score >= 80 && score < 90) {
    return 'B';
  } else if (score >= 90 && score <= 100) {
    return 'A';
  } else {
    return 'A++';
  }
}

const gradeCalculatorResult = gradeCalculator(103);
console.log(gradeCalculatorResult);

function seasonMessenger(season) {
  if (season === 'summer') {
    return 'it is hot today';
  } else if (season === 'winter') {
    return 'it is cold today';
  } else if (season === 'spring') {
    return 'the flowers are blooming';
  } else if (season === 'autumn' || season === 'fall') {
    return 'the leaves are changing colors';
  } else {
    return 'please enter a valid season';
  }
}

const seasonMessengerResult = seasonMessenger('fall');
console.log(seasonMessengerResult);

function dayDetector(dayOfTheWeek) {
  if (
    dayOfTheWeek === 'Monday' ||
    dayOfTheWeek === 'Tuesday' ||
    dayOfTheWeek === 'Wednesday' ||
    dayOfTheWeek === 'Thursday' ||
    dayOfTheWeek === 'Friday'
  ) {
    return 'It is a weekday!';
  } else if (dayOfTheWeek === 'Saturday' || dayOfTheWeek === 'Sunday') {
    return 'have a good weekend';
  } else {
    return 'please enter a valid day of the week';
  }
}

const dayDetectorResult = dayDetector('Saturday');
console.log(dayDetectorResult);
