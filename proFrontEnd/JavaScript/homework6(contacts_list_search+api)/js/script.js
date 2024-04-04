// Задача: Создание контактного списка с использованием API RandomUser.me

// Получение данных из API RandomUser.me:

// Используйте запрос к API RandomUser.me для получения случайных пользовательских данных.

// Пример запроса: https://randomuser.me/api/?results=10 (этот запрос вернет 10 случайных пользователей).

// Вывод данных на странице:

// Создайте HTML-разметку для отображения списка контактов.

// После получения данных из API, обработайте их и выведите информацию о каждом пользователе на странице.

// Например, вы можете отобразить имя, фамилию, номер телефона

// Добавление функционала поиска:

// Создайте поле ввода для поиска контактов.

// Напишите JavaScript-функцию для обработки ввода пользователя.

// При вводе текста в поле поиска, фильтруйте список контактов в соответствии с введенным текстом и отображайте только соответствующие контакты.
//-------------------------------------------------------

// 1 option

let users = [];

let inputElem = document.querySelector('.inputElem');
 let contactFooter = document.querySelector(".contact__footer");

const fetchData = async(url) => {
    try {
        let res = await fetch(url);
        let data = await res.json();
      return data;
      
    } catch (err) {
        console.log(err);
    }
}

function renderContacts(users) {
  contactFooter.innerHTML = '';
  users && users.forEach(element => {
      let mainDiv = document.createElement('div');
      mainDiv.classList.add('mainDiv');
      let firstDiv = document.createElement("div");
      let img = document.createElement('img');
      img.classList.add('imgELem');
      img.src = element.picture.thumbnail;
      let secondDiv = document.createElement('div');
      let nameSpan = document.createElement('span');
      nameSpan.innerText = `${element.name.first} `;
      let surnameSpan = document.createElement('span');
      surnameSpan.innerText = element.name.last;
      let br = document.createElement('br');
      let telSpan = document.createElement('span');
      telSpan.innerText = element.phone;
      firstDiv.append(img);
      secondDiv.append(nameSpan, surnameSpan, br, telSpan);
      mainDiv.append(firstDiv, secondDiv)
      contactFooter.append(mainDiv);

    });
}

const render = async () => {
  let data = await fetchData("https://randomuser.me/api/?results=10");
  users = data.results;
  renderContacts(users)

}

function searchElements(e) {
  let inpVal = e.target.value;

  let filtredUsers = users.filter(elem => elem.name.first.includes(inpVal) || elem.name.last.includes(inpVal) || elem.phone.includes(inpVal));
  renderContacts(filtredUsers);
}

render()

inputElem.addEventListener('keyup', (event) => searchElements(event));



// ------------------------------------------------------------
    // <div class="contact__footer">
    //     <div class="contact__footer_img">
    //       <img class="imgELem" src="https://randomuser.me/api/portraits/thumb/men/74.jpg" alt="foto" />
    //     </div>
    //     <div class="contact__footer_info">
    //       <span class="pElemName">name</span>
    //       <span class="pElemSurName">surname</span> <br />
    //       <span class="pElemTel">tel</span>
    //     </div>
    //   </div>
//--------------------------------------------------------------


// 2 option-------------------------------------------------
  
//  let inputElem = document.querySelector('.inputElem');

// function getDatas() {
//     fetch('https://randomuser.me/api/?results=10')
//         .then(response => response.json())
//         .then(data => createContactsElements(data))
//         .catch(error => console.log('error'))
// }

// function createContactsElements(contacts) {
//   let contactFooter = document.querySelector(".contact__footer");
//   contacts = contacts.results;
//   console.log(contacts);
//   contacts && contacts.forEach(element => {
//     let mainDiv = document.createElement('div');
//     mainDiv.classList.add('mainDiv');
//       let firstDiv = document.createElement("div");
//       let img = document.createElement('img');
//       img.classList.add('imgELem');
//       img.src = element.picture.thumbnail;
//       let secondDiv = document.createElement('div');
//       let nameSpan = document.createElement('span');
//       nameSpan.innerText = `${element.name.first} `;
//       let surnameSpan = document.createElement('span');
//       surnameSpan.innerText = element.name.last;
//       let br = document.createElement('br');
//       let telSpan = document.createElement('span');
//       telSpan.innerText = element.phone;
//       firstDiv.append(img);
//       secondDiv.append(nameSpan, surnameSpan, br, telSpan);
//       mainDiv.append(firstDiv, secondDiv)
//       contactFooter.append(mainDiv);
//     });

// }

// getDatas();

// inputElem.addEventListener('keyup', (event) => searchElements(event));