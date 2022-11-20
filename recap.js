// @ts-nocheck
// @ts-ignore

import { menuArray } from "./data.js";

let itemsContainer = document.getElementById('items-Container')
let containerOrder = document.getElementById('container-Order')
let pizzaBtn = document.getElementById('command-Btn1');
let hamburgerBtn = document.getElementById('command-Btn2');
let beerBtn = document.getElementById('command-Btn3');
let finalPrice = document.getElementById('final-Price')
let completeOder = document.getElementById('complete-Order')
let projectContainer = document.getElementById('project-Container')


let countSum = 0;
document.addEventListener('click', function(e) {
    if (e.target.id === 'command-Btn1') {
        countSum += menuArray[0].price;
        let htmlSum = `<div id="totalPrice">Total price:</div>
        <div id="sum">${countSum}$</div>`
        finalPrice.innerHTML = htmlSum;
    } else if (e.target.id === 'command-Btn2') {
        countSum += menuArray[1].price;
        let htmlSum = `<div id="totalPrice">Total price:</div>
        <div id="sum">${countSum}$</div>`
        finalPrice.innerHTML = htmlSum;

    } else if (e.target.id === 'command-Btn3') {
        countSum += menuArray[2].price;
        let htmlSum = `<div id="totalPrice">Total price:</div>
        <div id="sum">${countSum}$</div>`
        finalPrice.innerHTML = htmlSum;
    }
    return countSum;
})


document.addEventListener('click', function(e) {
    if (e.target.dataset.deletedpizza) {
        e.target.parentElement.style.display = "none"
        countSum -= menuArray[0].price
        let htmlSum = `<div id="totalPrice">Total price:</div>
        <div id="sum">${countSum}$</div>
        `
        finalPrice.innerHTML = htmlSum;

    } else if (e.target.dataset.deletedhamburger) {
        e.target.parentElement.style.display = "none"
        countSum -= menuArray[1].price
        let htmlSum = `<div id="totalPrice">Total price:</div>
        <div id="sum">${countSum}$</div>`
        finalPrice.innerHTML = htmlSum;

    } else if (e.target.dataset.deletedbeer) {
        e.target.parentElement.style.display = "none"
        countSum -= menuArray[2].price
        let htmlSum = `<div id="totalPrice">Total price:</div>
        <div id="sum">${countSum}$</div>`
        finalPrice.innerHTML = htmlSum;

    }

    if (countSum === 0) {
        finalPrice.style.display = 'none'
        completeOder.style.display = 'none'
    } else {
        finalPrice.style.display = 'block'
        completeOder.style.display = 'block'

    }

    if (countSum === 0) {
        containerOrder.style.display = 'none'
    }
    return countSum


})


pizzaBtn.addEventListener('click', function() {
    containerOrder.style.display = 'block'
    let htmlMode = `<div id='display-None'>
    <div class="pizzaClass" id="pizzaName">${menuArray[0].name}</div>
            <button class = "removeClass" id="remove-Btn" data-deletedpizza="pizzaName" >remove x</button>
    <div id="price-Pizza" >${menuArray[0].price}$</div>
    </div>
    `
    containerOrder.innerHTML += htmlMode
    completeOder.style.display = 'block'

})

hamburgerBtn.addEventListener('click', function() {
    containerOrder.style.display = 'block'
    let htmlMode = `<div id='display-None'>
    <div id="hamburgerName">${menuArray[1].name}</div>
    <button class = "removeClass" id="remove-Btn" data-deletedhamburger="hamburgerName">remove x</button>
    <div id="price-Hamburger" >${menuArray[1].price}$</div>
    </div>`
    containerOrder.innerHTML += htmlMode
    completeOder.style.display = 'block'
})

beerBtn.addEventListener('click', function() {
    containerOrder.style.display = 'block'
    let htmlMode = `<div id='display-None'>
    <div id="beerName">${menuArray[2].name}</div>
    <button class = "removeClass" id="remove-Btn" data-deletedbeer="beerName">remove x</button>
    <div id="price-Beer" >${menuArray[2].price}$</div>
    </div>
    `
    containerOrder.innerHTML += htmlMode
    completeOder.style.display = 'block'
})

let inputName = ``
let inputCard = ``
let inputCVV = ``
let divForm = ``
completeOder.addEventListener('click', function() {

    let completeDates = ``
    completeDates += `<div id = 'divForm'>
    <form  id="formElement">
    <label id="input-Field1">Enter card details</label><br>
    <input type='text' class='input-Field'  id = 'inputName' placeholder= 'Enter your name' required ><br>
    <input type='number' class='input-Field'  id = 'inputCard' placeholder= 'Enter card number' required ><br>
    <input type='number' class='input-Field'  id = 'inputCVV' placeholder= 'Enter CVV' required ><br>
    <div>
        <button type='submit' id= 'pay-Btn' >Pay</button>
    </div>
</form>
</div>
`
    itemsContainer.innerHTML += completeDates
    pizzaBtn.disabled = 'true'
    hamburgerBtn.disabled = 'true'
    beerBtn.disabled = 'true'
    containerOrder.classList.toggle('disabledDiv')
    inputName = document.querySelector('#inputName')
    inputCard = document.querySelector('#inputCard')
    inputCVV = document.querySelector('#inputCVV')
    divForm = document.querySelector('#divForm')
    return completeDates;
})


document.addEventListener('submit', function(e) {

    let completeOrderDiv = document.getElementById('complete-Order-Div')
    let totalPrice = document.querySelector('#totalPrice')
    let sum = document.querySelector('#sum')
    let delimiter = document.getElementById('delimiter')

    let finalMessage = `
     <div id='final-Info'>
      <p id='p-El'>Thank's <span id='span-El'> ${inputName.value}! </span> Your order is on the way</p>
    </div>

    `
    if (e.target.id === 'pay-Btn') {
        if (inputName.value === '') {
            inputName.value.style.placeholder = 'red'
        }
        if (inputCard.value === '') {
            inputCard.value.style.placeholder = 'red'
        }
        if (inputCVV.value === '') {

        }
    }
    e.preventDefault()
    containerOrder.style.display = 'none'
    completeOder.style.display = 'none'
    divForm.style.display = 'none'
    finalPrice.style.display = 'none'
    completeOrderDiv.style.display = 'none'
    totalPrice.style.display = 'none'
    sum.style.display = 'none'
    delimiter.style.display = 'block'
    delimiter.innerHTML += finalMessage

})


function showMenu() {
    itemsContainer.innerHTML += menuItems();
}
showMenu();

function menuItems() {
    let items = ``
    menuArray.forEach(function(item) {
        items += `
        
        <div id="container-Item">
        <div id="symbol-Div">
        <p id="symbol-Item">${item.emoji}</p>
        </div>
        <div id="title-Div" >
        <p id="title-Item" >${item.name}</p>
        </div>
        <div id="description-Div">
        <p id="description-Item">${item.ingredients}</p>
        </div>
        <div id="price-Div">
        <p id="price-Item">${item.price}$</p>
        </div>
            <div id="divide-Items">
            </div>
        </div>
        `
    })
    return items;
}