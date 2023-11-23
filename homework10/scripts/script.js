// 1. Создать в html форму с тремя инпутами (имя, фамилия, возраст). Написать скрипт, который при отправке формы выводит собранные данные в консоль.

// const dataForm = document.querySelector("#first_form")
// const searchTextInp = document.querySelector(".search_text")
// const searchTextInp2 = document.querySelector(".search_text2")
// const searchTextInp3 = document.querySelector(".search_text3")
// dataForm.addEventListener("submit", function (e) {
//   e.preventDefault()
//   console.log(searchTextInp.value)
//   console.log(searchTextInp2.value)
//   console.log(searchTextInp3.value)
// })

// 2. Доработать процесс таким образом, чтобы при отправке формы данные из нее добавлялись в массив users(array) в виде объекта.

const array = []
const dataForm = document.querySelector("#first_form")
const searchTextInp = document.querySelector(".search_text")
const searchTextInp2 = document.querySelector(".search_text2")
const searchTextInp3 = document.querySelector(".search_text3")

dataForm.addEventListener("submit", function (e) {
  e.preventDefault() // отменяет действие по умолчанию, и вместо того чтобы отправить форму, задерживает ее на екране.

const data = {
    firstName: searchTextInp.value,
    secondName: searchTextInp2.value,
    age: +searchTextInp3.value
  }

  array.push(data)
  rerender()

  dataForm.reset()
  console.log(data)
})

// 3. Реализовать функцию rerender. Эта функция очищает контейнер с карточками и создает множество карточек с пользователями из массива. Настроить rerender при добавлении нового пользователя.
// ===========   +   =============
// 4. Доработать rerender таким образом, чтобы при двойном клике по карточке из массива удалялся пользователь по id и вызывался rerender.
function createDataCard({firstName, secondName, age}) {

  const pFirstName = document.createElement('p')
  pFirstName.innerText = firstName
  const pSecondName = document.createElement('p')
  pSecondName.innerText = secondName
  const pAge = document.createElement('p')
  pAge.innerText = age
  const dataCard = document.createElement('div')
  dataCard.classList.add("data_card")

  dataCard.append(pFirstName, pSecondName, age)

  return dataCard
}

const dataListDiv = document.querySelector(".data_list_container")
function rerender() {
  dataListDiv.innerHTML = "" // очищаем контейнер с карточками
  
  for(let i = 0; i < array.length; i++) {
    const dataCardElem = createDataCard(array[i])

    dataCardElem.addEventListener("dblclick", function () {
    array.splice(i, 1) // индекс продукта в массиве array
      rerender()
    })

    dataListDiv.append(dataCardElem)
  }
}




