// 1. Напишите цикл for, который выводит консоль каждое второе число от 0 до 10

 for (let i = 1; i <= 10; i += 2) {
  console.log(i)
}

// 2. Напишите цикл for, который выводит в консоль все числа от 55 до 20

// 1-вариант
const arr = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55]
for (let i = arr.length - 1; i >= 0; i -= 1) {
  console.log(arr[i])
}
// 2-вариант
for (let i = 55; i >= 20; i--) {
  console.log(`${i}`)
}

// 3. Дан массив numbers. Вывести в консоль все числа из массива
// const numbers = [3, 5, 11, 2, 8, 1, 6];
// Сформировать новый массив numbers_squared и передать в него все элементы из массива numbers,
// возведенные в квадрат

// 1-вариант
const numbers = [3, 5, 11, 2, 8, 1, 6];
const numbers_squared = [];
numbers_squared.push(numbers[0]**2, numbers[1]**2, numbers[2]**2, numbers[3]**2, numbers[4]**2, numbers[5]**2, numbers[6]**2)
console.log(numbers_squared)

// 2-вариант
const numbers1 = [3, 5, 11, 2, 8, 1, 6];
const numbers_squared1 = [];
for (let i = 0; i < numbers1.length; i++) {
  numbers_squared1.push(numbers1[i]**2)
}
console.log(numbers_squared1)

// 4. Создать переменную last_elem и передать в нее последний элемент из сформированного
// массива numbers_squared(обратиться к элементу массива по индексу)

// 1-вариант
const numbers2 = [3, 5, 11, 2, 8, 1, 6];
const numbers_squared2 = [];
numbers_squared2.push(numbers2[0]**2, numbers2[1]**2, numbers2[2]**2, numbers2[3]**2, numbers2[4]**2, numbers2[5]**2, numbers2[6]**2)
console.log(numbers_squared2)
let last_elem = numbers_squared2.pop()
console.log(`lastElem = ${last_elem}`)

// 2-вариант
const numbers3 = [3, 5, 11, 2, 8, 1, 6];
const numbers_squared3 = [];
for (let i = 0; i < numbers3.length; i++) {
  numbers_squared3.push(numbers3[i]**2)
}
console.log(numbers_squared3)
let last_elem2 = numbers_squared3.pop()
console.log(`lastElem = ${last_elem2}`)

// 5. Дан объект user. Используя данные из объекта, сформировать строку в формате:
// ‘User’s name is < FIRST_NAME > <LAST_NAME>. He is <AGE> years old’

const user = {
first_name: 'Ivan',
last_name: 'Ivanov',
age: 20,
salary: 500
}

console.log(`User's name is ${user.first_name} ${user.last_name}. He is ${user.age} years old`)









