function checkDigitsInName(name) {
  if (typeof name !== "string") return "Invalid Input";
  let isDigit = false;
  for (let ch of name) {
    if (isNaN(ch)) {
      continue;
    } else isDigit = true;
  }
  return isDigit;
}
let re = "Suman";
console.log(checkDigitsInName(re));
