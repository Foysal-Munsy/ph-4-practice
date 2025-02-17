function calculateFinalScore(obj) {
  if (typeof obj !== "object") return "Invalid Input";
  let marks = obj.schoolGrade + obj.testScore;
  if (obj.isFFamily === true) marks += 20;

  return marks >= 80 ? true : false;
}
let h = { name: "Rajib", testScore: 15, schoolGrade: 25, isFFamily: true };
console.log(calculateFinalScore(h));
