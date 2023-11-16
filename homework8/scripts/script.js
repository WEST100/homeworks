// 1. Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.

// const manyP = document.querySelector(".numbers")
// for (let i = 50; i <= 100; i++) {
//   if (i % 10 === 0) {
// const newPElem = document.createElement("p")
//   newPElem.innerText = [i]
//   manyP.append(newPElem)
//   }
// }

// 2. Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.

// const strArray = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit.", "Nam", "perferendis", "debitis", "reiciendis", "enim", "rerum", "animi", "vero", "obcaecati", "fuga"]

// const rootDiv = document.querySelector(".strings_container")
// for (let i = 0; i <= strArray.length-1; i++) {
//   const newPElem = document.createElement("p")
//   newPElem.innerText = strArray[i]
//   rootDiv.append(newPElem)
// }

// 3. Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.

const data = [
    {
        first_name: "Alex",
        last_name: "West",
        age: '15',
    },
    {
        first_name: "John",
        last_name: "East",
        age: '32',
    },
    {
         first_name: "Eric",
        last_name: "South",
        age: '17',
    },
    {
        first_name: "Anna",
        last_name: "North",
        age: '25',
    }
]

const dataName = document.querySelector(".users_container")
for (let i = 0; i <= data.length; i++) {
  if (data[i].age >= 18) {
    const pElem = document.createElement('p')
    const pElem2 = document.createElement('p')
    const pElem3 = document.createElement('p')
  pElem.innerText = data[i].first_name 
  pElem2.innerText = data[i].last_name 
  pElem3.innerText = data[i].age

  const br = document.createElement("br")
    dataName.append(pElem, pElem2, pElem3, br)
    
}
}