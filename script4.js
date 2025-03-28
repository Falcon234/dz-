// Завдання 1
let user = {
  name: "John",
  age: 30,
  hobby: "reading",
  premium: true
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

for (const key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}

// Завдання 2
function countProps(obj) {
  return Object.keys(obj).length;
}

// Завдання 3
function findBestEmployee(employees) {
  let maxTasks = 0;
  let bestEmployee = "";

  for (const [employee, tasks] of Object.entries(employees)) {
    if (tasks > maxTasks) {
      maxTasks = tasks;
      bestEmployee = employee;
    }
  }
  return bestEmployee;
}

// Завдання 4
function countTotalSalary(employees) {
  return Object.values(employees).reduce((total, salary) => total + salary, 0);
}

// Завдання 5
function getAllPropValues(arr, prop) {
  return arr.map(obj => obj[prop]).filter(value => value !== undefined);
}

// Завдання 6
function calculateTotalPrice(allProducts, productName) {
  let totalPrice = 0;

  for (const product of allProducts) {
    if (product.name === productName) {
      totalPrice += product.price * product.quantity;
    }
  }

  return totalPrice;
}
