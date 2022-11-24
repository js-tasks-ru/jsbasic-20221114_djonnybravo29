function sumSalary(salaries) {
  let sumOfSalaries = 0;
  for (let key in salaries) {
    if (typeof salaries[key] === "number" && typeof salaries[key] != NaN && salaries[key] != Infinity && salaries[key] != -Infinity) {
      sumOfSalaries += salaries[key]
    }
  }
  return sumOfSalaries
}