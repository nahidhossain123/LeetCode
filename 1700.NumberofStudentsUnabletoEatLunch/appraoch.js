var countStudents = function (students, sandwiches) {
  let circularSandwiche = 0;
  let squareSandwiche = 0;

  for (let sandwiche of students) {
    if (sandwiche == 0) {
      circularSandwiche++;
    }
    if (sandwiche == 1) {
      squareSandwiche++;
    }
  }

  for (let sandwiche of sandwiches) {
    if (sandwiche == 0 && circularSandwiche == 0) {
      return squareSandwiche;
    } else if (sandwiche == 1 && squareSandwiche == 0) {
      return circularSandwiche;
    }
    if (sandwiche == 0) {
      circularSandwiche--;
    } else {
      squareSandwiche--;
    }
  }
  return 0;
};

console.log("Test Case 1:", countStudents([1, 1, 0, 0], [0, 1, 0, 1]));
console.log(
  "Test Case 2:",
  countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1])
);
