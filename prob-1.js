function calculateTax(income, expenses) {
  if (income < 0 || expenses < 0 || expenses > income) {
    return "invalid input";
  }
  const diff = income - expenses;
  const tax = diff * 0.2;
  return tax;
}
const income = 10000,
  expenses = 3000;
console.log(calculateTax(income, expenses));
