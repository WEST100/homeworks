// 1. Создай функцию calculateSquare(), которая будет принимать значение из поля ввода и выводить квадрат этого числа в
// элемент с классом result. Например, если введено число 5, то функция должна вычислить квадрат числа 5 (25) и вывести
// результат в элемент с классом result ("Результат: 25").

function calculateSquare() {
  let getNumber = prompt('enter a number');
  let result = Math.pow(getNumber, 2);
  alert(result);
}

calculateSquare(); 

// 2. Создай функцию checkEvenOdd(), которая будет принимать значение из поля ввода и выводить сообщение о том,
// является ли число четным или нечетным. Если число четное, то функция должна вывести сообщение "Число <значение> является четным",
// а если число нечетное, то сообщение "Число <значение> является нечетным". Например, если введено число 7, то функция должна
// вывести сообщение "Число 7 является нечетным".

function checkEvenOdd() {
  let getNumber = prompt('enter a number');
  if (getNumber % 2 === 0) {
    alert(`Число ${getNumber} является четным`)
  } else {
    alert(`Число ${getNumber} является нечетным`)
  }
}

checkEvenOdd();

// 3. Продолжить функцию zoom() на экране у нас есть изображение размером w = 200, h = 200. при каждом клике изображения увеличивайте
// его размер на 50 (w+ = 50, h + = 50). Если в результате очередного клика размер изображения превышает 500, то во время всех
// последующих кликов уменьшайте размер изображения на 50.:

let img = document.querySelector(".gallery > img");
let isToggle = true;
let height = 200;
let width = 200;

function zoom() {
  if (isToggle) {
    width += 50;
    height += 50;
    img.style.width = width +'px';
    img.style.height = height + 'px';
      if (width === 500) {
      isToggle = false;
      }
  } else {
    width -= 50;
    height -= 50;
    img.style.width = width +'px';
    img.style.height = height + 'px';
      if (width === 200) {
      isToggle = true;
    }
  }
}

// ЗАДАЧА 2

// Задача состоит в создании формы выбора курсов для студента, где студент может выбрать различные модули: Frontend, Backend и Design,
// а затем выбрать конкретные курсы из каждого модуля. Каждый курс имеет свою стоимость. Студент также должен указать количество приобретаемых курсов.

// После выбора курсов и указания количества, при нажатии кнопки должна отобразиться общая стоимость выбранных курсов.
// Если общая стоимость превышает $3000, студенту предоставляется 30% скидка, и должна отобразиться окончательная сумма со скидкой.

// Например, если студент выбрал курсы JavaScript, PHP и Photoshop, каждый со своей стоимостью, и указал количество 12,
// то должна быть рассчитана общая стоимость (сумма стоимостей каждого выбранного курса, умноженная на количество) и отображена на экране.
// Если общая стоимость превышает $3000, то должна быть применена скидка в размере 30%, и должна быть показана окончательная сумма со скидкой.

// Например, сообщение на экране может быть: "Уважаемый студент, вы должны заплатить $5400". Если общая стоимость превышает $3000,
// то сообщение может быть: "Уважаемый студент, вы должны заплатить $5400, но вы получаете 30% скидку, и окончательная сумма составляет $3780".

function getSum() {
  let productValue = document.querySelector('.kurs_category').value;
  let inputValue = document.querySelector('.count').value;
  let newResult = 0;
  let result = productValue * inputValue;

    if (result < 3000) {
document.querySelector('.sum-result').innerText = `Уважаемый студент, вы должны заплатить $${result}`;
  } else {
    newResult = result * 0.7
    document.querySelector('.sum-result').innerText = `Уважаемый студент, вы должны заплатить $${result}, но вы получаете 30% скидку, и окончательная сумма составляет $${newResult}`;
  }
}