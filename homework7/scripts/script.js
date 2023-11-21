// 1. Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.

// function num(a, b) {
//   if (a < b) {
//     return a
//   } else {
//       return b
//     }
// }
  
// let minNum = num(3, 4)
// console.log(minNum);


// 2. Напишите функцию, которая принимает два числовых аргумента
// и выводит в консоль все четные числа от большего к меньшему.

  
// function num1(a, b) {
//   let resultA = 0
//   let resultB = 0
//   if (a % 2 === 0) {
//     resultA = resultA + a
//     console.log(resultA);
//   }
//   if (b % 2 === 0){
//     resultB = resultB + b
//     console.log(resultB);
//   }
//   if (resultA > resultB) {
//     console.log(resultA, resultB)
//   } else {
//     console.log(resultB, resultA)
//   }
//   }

// 3. Напишите функцию power, которая принимает два числовых аргумента
// (основание степени и саму степень) и возвращает число в указанной степени.
//  Значение степени должно быть указано по умолчанию 2.

// function power(a, b = 2) {
//   console.log(a**b)
// }

// power(3)

// 4. Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.

// function getsum(n){
//     let sum = 0
//     for(let i=1; i<n; i++){
//         sum += i;
//     }
//     return sum;
// }

// console.log(getsum(5));

// 5. Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму
// четных чисел и нечетных чисел от n до m.Суммы выведите
// в консоль(в начале сумму четных чисел, а затем сумму нечетных).

// function num3(n, m) {
//   let evenSum = 0
//   let oddSum = 0

//   for(let i = 0; i < num3.length; i++) {
//   if (n % 2 === 0) {
//     evenSum += n
//   } else if (m % 2 === 0) {
//     oddSum += m
//   }
// }

//   console.log(evenSum);
//   console.log(oddSum);
// }

// 6. Напишите функцию, которая принимает в качестве аргументов массив строк,
// а возвращает первый самый длинный элемент массива.Если входной массив пуст,
// функция возвращает null.Если есть несколько одинаковых по длине элементов -
// функция возвращает первый из этих элементов.
// Пример: [ 'one', 'two', 'three' ] => 'three'

// function isArray(arr) {
//   for(let i = word.length - 1; i >= 0; i--) {
    
//   }
// }

// console.log(arr(["one", 'two', 'three', 'four', 'five' ]));