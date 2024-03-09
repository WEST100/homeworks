
let products = [
    // id, title, image, price
    ["1", "GoPro HERO12 Black", "https://m.media-amazon.com/images/I/71p5V8+OnfL._AC_UL320_.jpg", 349],
    ["2", "TP-Link Tapo 1080P", "https://m.media-amazon.com/images/I/61gJcez9unL._AC_UL320_.jpg", 17],
    ["3", "KODAK PIXPRO WPZ2", "https://m.media-amazon.com/images/I/5186bjryKaL._AC_UL320_.jpg", 149],
    ["4", "WYZE 2K HDR Wireless", "https://m.media-amazon.com/images/I/61ixGPWFxlL._AC_UL320_.jpg", 76],
    ["5", "Arlo Essential Spotlight", "https://m.media-amazon.com/images/I/61vjkXGNuQL._AC_UL320_.jpg", 176],
];

function createProducts() {
    let productsElement = document.querySelector(".products");

    productsElement.innerHTML = "";

    products.forEach(product => {
        let itemElement = document.createElement("div");
        itemElement.classList.add("item")

        let imageElement = document.createElement("img");
        imageElement.src = product[2];

        let titleElement = document.createElement("h3");
        titleElement.innerText = product[1];

        let priceElement = document.createElement("p");
        priceElement.innerText = `$ ${product[3]}`;

        let buttonElement = document.createElement("button");
        buttonElement.classList.add("btn");
        buttonElement.innerText = "ADD TO CART";

        itemElement.append(imageElement, titleElement, priceElement, buttonElement);

        productsElement.append(itemElement);
    })
}

function addProduct() {
    let formInputs = document.querySelectorAll(".form .form__input");

    let inputs = [Date.now()];
    formInputs.forEach(item => inputs.push(item.value));
    products.push(inputs);

    createProducts();

    formInputs.forEach(item => item.value = "")
}

createProducts();

document.querySelector(".btn-add").onclick = addProduct;