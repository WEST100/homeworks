// 1. Написать программу, которая через prompt считывает число и выводит в консоль число равное 10% от введенного числа

let num = prompt("Введите любое число")
console.log(num * 0.1);

// 2. Написать программу, которая получает два числа и выводит наименьшее

let num1 = prompt("Введите первое число")
let num2 = prompt("Введите второе число")

if (num1 < num2) {
  console.log(num1);
} if (num1 > num2) {
  console.log(num2);
}

// 3. Написать программу, которая считывает через prompt число и выводит одно из следующих сообщений: ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’

let num4 = prompt("Введите любое число")

if (num4 < 100) {
  console.log("Число меньше 100");
} if (num4 > 100) {
  console.log("Число больше 100");
} if (num4 == 100) {
  console.log("Число равно 100");
}

// 4. Написать программу, которая запрашивает у пользователя его имя и возраст (в годах) и выводит в консоль сообщение ‘Hello, <name>’, если пользователь совершеннолетний, или ‘Hi, <name>’, если пользователь несовершеннолетний.

let name1 = prompt("Введите имя")
let age = prompt("Введите свой возраст")

if (age < 18) {
  console.log("Hello " + name1);
} if (age > 18) {
  console.log("Hi " + name1);
}
