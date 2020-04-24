const ADMIN_PASSWORD = "jqueryismyjam";
let window = prompt("Password");
let message;

if (window === null) {
  message = `Отменено пользователем`;
  console.log(message);
} else if (window === ADMIN_PASSWORD) {
  message = `Добро пожаловать!`;
  console.log(message);
} else {
  message = `Доступ запрещен, неверный пароль!`;
  console.log(message);
}
