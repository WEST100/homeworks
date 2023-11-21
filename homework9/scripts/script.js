// 1. Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px.

// const newButton = document.createElement("button")
// newButton.innerText = 'Change color'
// const newDiv = document.createElement("div")
// newButton.style.width = "100px"
// newButton.style.height = "50px"
// newDiv.style.width = "200px"
// newDiv.style.height = "200px"
// newDiv.style.backgroundColor = "red"

// document.body.appendChild(newButton)
// document.body.appendChild(newDiv)

// newButton.addEventListener("click", function() {
//   newDiv.style.backgroundColor = "green"
//   newDiv.style.width = "100px"
//   newDiv.style.height = "100px"
// })

// 2. Создать кнопку и розовый квадрат с размерами 200х200px. При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.

// const newButton = document.createElement("button")
// newButton.innerText = 'Change color'
// const newDiv = document.createElement("div")
// newButton.style.width = "100px"
// newButton.style.height = "50px"
// newDiv.style.width = "200px"
// newDiv.style.height = "200px"
// newDiv.style.backgroundColor = "pink"

// document.body.appendChild(newButton)
// document.body.appendChild(newDiv)

// newButton.addEventListener("click", function() {
//   newDiv.style.backgroundColor = "blue"
//   console.log(newDiv.style.backgroundColor);
// })

// 3. Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку увеличивать высоту и ширину квадрата на 20px.

// const newButton = document.createElement("button")
// newButton.innerText = 'increase size +20px'
// const newDiv = document.createElement("div")
// newButton.style.width = "100px"
// newButton.style.height = "50px"
// newDiv.style.width = "150px"
// newDiv.style.height = "150px"
// newDiv.style.backgroundColor = "red"

// document.body.appendChild(newButton)
// document.body.appendChild(newDiv)

// let increase = 170


// newButton.addEventListener("click", function() {
//   newDiv.style.width = `${increase}px`
//   newDiv.style.height = `${increase}px`
//   increase += 20
// })

// 4. Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный.

// const newButton = document.createElement("button")
// newButton.innerText = 'create new paragraf'
// const newDiv = document.createElement("div")
// newDiv.classList.add("root")
// newButton.style.width = "100px"
// newButton.style.height = "50px"
// newDiv.style.width = "150px"
// newDiv.style.height = "150px"
// newDiv.style.backgroundColor = "red"

// document.body.appendChild(newButton)
// document.body.appendChild(newDiv)

//  newButton.addEventListener("click", function() {
//    const newParagraf = document.createElement("p")
//    newParagraf.style.backgroundColor = "blue"
//    newParagraf.style.color = "white"
//    newParagraf.innerText = 'new paragraf'
//    newDiv.appendChild(newParagraf)
// })

// 5. Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий.

// const newButton = document.createElement("button")
// newButton.innerText = 'create new paragraf'
// const newDiv = document.createElement("div")
// newDiv.classList.add("root")
// newButton.style.width = "100px"
// newButton.style.height = "50px"
// newDiv.style.width = "150px"
// newDiv.style.height = "150px"
// newDiv.style.backgroundColor = "red"

// document.body.appendChild(newButton)
// document.body.appendChild(newDiv)

// newButton.addEventListener("mousedown", function() {
//   const newParagraf = document.createElement("p")
//   newParagraf.style.backgroundColor = "blue"
//   newParagraf.style.color = "white"
//   newParagraf.innerText = 'new paragraf1'
//   newDiv.appendChild(newParagraf)
// })

// newButton.addEventListener("mouseup", function() {
//   const newParagraf2 = document.createElement("p")
//   newParagraf2.style.backgroundColor = "green"
//   newParagraf2.style.color = "yellow"
//   newParagraf2.innerText = 'new paragraf2'
//   newDiv.appendChild(newParagraf2)
// })

