const credits = 23580;
const pricePerDroid = 3000;
let window = prompt("droids");
let totalPrice = window * pricePerDroid;
let message;

if (window === null) {
  message = `Отменено пользователем!`;
  console.log(message);
} else if (totalPrice > credits) {
  message = `Недостаточно средств на счету!`;
  console.log(message);
} else {
  message = `Вы купили ${window} дроидов, на счету осталось ${credits -
    totalPrice} кредитов.`;
  console.log(message);
}
