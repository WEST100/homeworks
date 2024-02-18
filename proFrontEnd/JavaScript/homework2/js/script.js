
// 1. Создать функцию checkEquality с помощью которого проверяем равны ли все 3 значение внутри input-ов или нет
// Например если 3, 3, 3 то в результате должны получать "Все поле равны" если нет то пишем "Все поле не равны"

document.querySelector(".checkEqualityBtn").onclick = checkEquality;

function checkEquality() {
    let input1 = +document.querySelector(".input-1").value;
    let input2 = +document.querySelector(".input-2").value;
    let input3 = +document.querySelector(".input-3").value;

    if (input1 == input2 && input1 == input3) {
        document.querySelector(".result-1").innerText = "Все поля равны"
    } else {
        document.querySelector(".result-1").innerText = "Все поля не равны"
    }
}

// 2. Создать функцию hasZero с помощью которого проверяем есть ли поле которое равно 0 если есть пишем "Да, есть", если нет пишем просто "Нет"
// Например если будет 1, 2, 0 то результат будет "Да, есть", а если будет 1, 2, 3 то результат "Нет"

document.querySelector(".hasZeroBtn").onclick = hasZero;

function hasZero() {
    let input1 = +document.querySelector(".input-4").value;
    let input2 = +document.querySelector(".input-5").value;
    let input3 = +document.querySelector(".input-6").value;

    if (input1 == 0 || input2 == 0 || input3 == 0) {
        document.querySelector(".result-2").innerText = "Да, есть"
    } else {
        document.querySelector(".result-2").innerText = "Нет"
    }
}


// 3. Создать функцию sameOne с помощью которого проверяем есть ли поле которое совпадают, если есть пишем "Да, есть", если нет пишем просто "Нет"
// Например если будет 1, 1, 0 то результат будет "Да, есть", а если будет 1, 2, 3 то результат "Нет"

document.querySelector(".sameOneBtn").onclick = sameOne;

function sameOne() {
    let input1 = +document.querySelector(".input-7").value;
    let input2 = +document.querySelector(".input-8").value;
    let input3 = +document.querySelector(".input-9").value;

    if (input1 == input2 || input2 == input3 || input1 == input3) {
        document.querySelector(".result-3").innerText = "Да, хоть одно поле совпадает"
    } else {
        document.querySelector(".result-3").innerText = "Нет"
    }
}

// 4. Создать функцию sortNumbers которая будет сортировать три числа в порядке возрастания
// Например если 3, 4, 2 то в результате получим "2 3 4"

// 1 -вариант

let numbers = [5, 4, 3, 2, 1];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 3, 4, 5]

// 2-вариант

let numbers2 = [4, 2, 5, 1, 3];
numbers2.sort(function (a, b) {
  return a - b;
});
console.log(numbers2); // [1, 2, 3, 4, 5]

// 3-вариант

let numbers3 = [4, 2, 5, 1, 3];

function compareNumbers(a, b) {
  return a - b;
}

console.log(numbers3.sort(compareNumbers));  // [1, 2, 3, 4, 5]

// ЗАДАЧА 2

// Продолжить задачу по тестам, добавить возможность проверка, добавить еще 5 полей чтобы окончательный результат было 20, далее

// Если ученик получил 18 >, то мы отображаем текст "Вы получили 18, отлично"
// Если ученик получил от 12 до 18, то мы отображаем текст "Вы получили 16, хорошо"
// Если ученик получил от 8 до 12, то мы отображаем текст "Вы получили 11, удовлетворительно"
// Если ученик получил до 8, то мы отображаем текст "Вы получили 7, неудовлетворительно"

function getExamResult(){
    let score = 0;

    let num1 = Number(document.querySelector(".exam-1").value);
    let num2 = Number(document.querySelector(".exam-2").value);
    let num3 = Number(document.querySelector(".exam-3").value);
    let num4 = Number(document.querySelector(".exam-4").value);
    let num5 = Number(document.querySelector(".exam-5").value);
    let num6 = Number(document.querySelector(".exam-6").value);
    let num7 = Number(document.querySelector(".exam-7").value);
    let num8 = Number(document.querySelector(".exam-8").value);
    let num9 = Number(document.querySelector(".exam-9").value);
    let num10 = Number(document.querySelector(".exam-10").value);

    if(num1 === 15){
        score = score + 2;

        document.querySelector(".exam-1").style.border = "1px solid green";
    }else {
        document.querySelector(".exam-1").style.border = "1px solid red";
    }

    if(num2 === 10){
        score = score + 2;
    }

    if(num3 === 12){
        score = score + 2;
    }

    if(num4 === 36){
        score = score + 2;
    }

    if(num5 === 1){
        score = score + 2;
    }

     if(num6 === 7){
        score = score + 2;
    }

     if(num7 === 15){
        score = score + 2;
    }

     if(num8 === 15){
        score = score + 2;
    }

     if(num9 === 30){
        score = score + 2;
    }

     if(num10 === 3){
        score = score + 2;
    }

    if (score > 18) {
        document.querySelector(".result-4").innerText = `Вы получили 20, отлично`;
    }

    if (score >= 12 && score <= 18) {
       document.querySelector(".result-4").innerText = ` Вы получили ${score}, хорошо`;
    }

     if (score >= 8 && score <= 11) {
       document.querySelector(".result-4").innerText = ` Вы получили ${score}, удовлетворительно`;
    }

    if (score >= 0 && score <= 7) {
       document.querySelector(".result-4").innerText = ` Вы получили ${score}, неудовлетворительно`;
    }

}