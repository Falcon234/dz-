 //завдання 8
 //  1
const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let string = '';

for (let i = 0; i < friends.length; i++) {
    string += friends[i];
    if (i < friends.length - 1) {
        string += ', ';
    }
}
const text = friends.join(', ');
console.log(string); 
//2
const cards = [
'Карточка-1',
'Карточка-2',
'Карточка-3',
'Карточка-4',
'Карточка-5',
];
cards.push('Карточка-6');
cards.splice(2, 1);
const index = cards.indexOf('Карточка-4');
if (index !== -1) {
  cards.splice(index, 1, 'Карточка-Оновлена');
}
console.log(cards);
// завдання 9
// Завдання 1
function logItems(array) {
  for (let i = 0; i < array.length; i++) {
      console.log(`${i + 1} - ${array[i]}`);
  }
}

// Завдання 2
function calculateEngravingPrice(message, pricePerWord) {
  return message.split(" ").length * pricePerWord;
}

// Завдання 3
function findLongestWord(string) {
  return string.split(" ").reduce((longest, current) => current.length > longest.length ? current : longest, "");
}

// Завдання 4
function formatString(string) {
  return string.length > 40 ? string.slice(0, 40) + "..." : string;
}

// Завдання 5
function checkForSpam(message) {
  const lowerMessage = message.toLowerCase();
  return lowerMessage.includes("spam") || lowerMessage.includes("sale");
}

// Завдання 6
function sumNumbers() {
  let input;
  const numbers = [];
  let total = 0;

  while (true) {
      input = prompt("Введіть число (натисніть Cancel для завершення)");
      if (input === null) break;
      
      const number = Number(input);
      if (Number.isNaN(number)) {
          alert("Було введено не число, спробуйте ще раз");
      } else {
          numbers.push(number);
      }
  }

  if (numbers.length > 0) {
      total = numbers.reduce((sum, num) => sum + num, 0);
      console.log(`Загальна сума чисел дорівнює ${total}`);
  }
}

// Завдання 7
function isLoginValid(login) {
  return login.length >= 4 && login.length <= 16;
}

function isLoginUnique(allLogins, login) {
  return !allLogins.includes(login);
}

function addLogin(allLogins, login) {
  if (!isLoginValid(login)) {
      return "Помилка! Логін повинен бути від 4 до 16 символів";
  }
  if (!isLoginUnique(allLogins, login)) {
      return "Такий логін уже використовується!";
  }
  allLogins.push(login);
  return "Логін успішно доданий!";
}
//завдання 10
const processArray = (array, callback) => callback(array);
const getSum = arr => arr.reduce((acc, curr) => acc + curr, 0);
const getMin = arr => Math.min(...arr);
const getMax = arr => Math.max(...arr);
console.log(processArray([1, 2, 3, 4, 5], getSum));
console.log(processArray([1, 2, 3, 4, 5], getMin)); 
console.log(processArray([1, 2, 3, 4, 5], getMax)); 
const operate = (a, b, callback) => callback(a, b);
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
console.log(operate(10, 5, subtract));
console.log(operate(10, 5, add));
console.log(operate(10, 5, multiply));
console.log(operate(10, 5, divide));
// завдання 11 година 2 роботи
const bankAccount = {
  ownerName: "John Doe",
  accountNumber: "123456789",
  balance: 1000,
  
  deposit() {
      if (confirm("Бажаєте поповнити рахунок?")) {
          let amount = parseFloat(prompt("Введіть суму для поповнення:"));
          if (!isNaN(amount) && amount > 0) {
              this.balance += amount;
              alert(`Рахунок поповнено. Новий баланс: ${this.balance}`);
          } else {
              alert("Некоректна сума.");
          }
      }
  },
  
  withdraw() {
      if (confirm("Бажаєте зняти гроші?")) {
          let amount = parseFloat(prompt("Введіть суму для зняття:"));
          if (!isNaN(amount) && amount > 0 && amount <= this.balance) {
              this.balance -= amount;
              alert(`Гроші знято. Новий баланс: ${this.balance}`);
          } else {
              alert("Недостатньо коштів або некоректна сума.");
          }
      }
  }
};

const weather = {
  temperature: parseFloat(prompt("Введіть поточну температуру:")),
  humidity: 50,
  windSpeed: 10,
  
  isBelowZero() {
      return this.temperature < 0;
  }
};

if (weather.isBelowZero()) {
  alert("Температура нижче 0 градусів Цельсія");
} else {
  alert("Температура вище або рівна 0 градусів Цельсія");
}

const user = {
  name: "Alice",
  email: "alice@example.com",
  password: "password123",
  
  login() {
      let inputEmail = prompt("Введіть email:");
      let inputPassword = prompt("Введіть пароль:");
      
      if (inputEmail === this.email && inputPassword === this.password) {
          alert("Успішний вхід");
      } else {
          alert("Невірний email або пароль");
      }
  }
};

const movie = {
  title: "Inception",
  director: "Christopher Nolan",
  year: 2010,
  rating: 8.8,
  
  isHighlyRated() {
      return this.rating > 8;
  }
};

console.log(`Назва: ${movie.title}`);
console.log(`Режисер: ${movie.director}`);
console.log(`Рік: ${movie.year}`);
console.log(`Рейтинг: ${movie.rating}`);
console.log(`Фільм має високий рейтинг: ${movie.isHighlyRated()}`);

