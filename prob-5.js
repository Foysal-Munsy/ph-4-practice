function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
  }
  let done = waitingTimes.length;
  let time = 0;
  for (let num of waitingTimes) {
    time += num;
  }
  let avgTime = Math.round(time / waitingTimes.length);
  --serialNumber;
  serialNumber -= done;
  return avgTime * serialNumber;
}
let a = "[6]",
  b = 9;
console.log(waitingTime(a, b));
