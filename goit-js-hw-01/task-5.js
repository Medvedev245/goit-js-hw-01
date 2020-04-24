let country = prompt("Введите страну");
country = country.toLowerCase();
let message;

switch (country) {
  case "китай": {
    let price = 100;
    message = `(Доставка в ${country} будет стоить ${price} кредитов)`;
    console.log(message);
    break;
  }
  case "чили": {
    let price = 250;
    message = `(Доставка в ${country} будет стоить ${price} кредитов)`;
    console.log(message);
    break;
  }
  case "австралия": {
    let price = 170;
    message = `(Доставка в ${country} будет стоить ${price} кредитов)`;
    console.log(message);
    break;
  }
  case "индия": {
    let price = 80;
    message = `(Доставка в ${country} будет стоить ${price} кредитов)`;
    console.log(message);
    break;
  }
  case "ямайка": {
    let price = 120;
    message = `(Доставка в ${country} будет стоить ${price} кредитов)`;
    console.log(message);
    break;
  }
  default:
    console.log("В вашей стране доставка не доступна");
    break;
}
