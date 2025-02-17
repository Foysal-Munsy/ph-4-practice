function sendNotification(email) {
  if (email.indexOf("@") === -1) {
    return "invalid input";
  }
  const myArray = email.split("@");
  return myArray[0] + " sent you an email from " + myArray[1];
}
let email = "fahim234@hotmail.com";
console.log(sendNotification(email));
