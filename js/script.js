let menuItem = document.querySelectorAll(".menu-item"),
    menu = document.querySelector(".menu"),
    fifthElement = document.createElement('li'),
    title = document.querySelector(".title");

menuItem[1].firstChild.textContent = "Второй пункт";
menuItem[2].firstChild.textContent = "Третий пункт";

fifthElement.classList.add("menu-item");
fifthElement.textContent = "Пятый пункт";

menu.appendChild(fifthElement);

document.body.style.backgroundImage = "url('../img/apple_true.jpg')";
title.textContent = "Мы продаем только подлинную технику Apple";

let column = document.querySelectorAll(".column");

column[1].removeChild(column[1].children[1]);
console.log(column);
let userAnswer = prompt("Your opinion about Apple products?");
// column[1].children
column[1].children['prompt'].textContent = userAnswer;
