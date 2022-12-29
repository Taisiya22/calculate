// Створити калькулятор вартості продукту в залежності від ціни. При роботі з подіями використовувати делагування. Відрендерити всю розмітку через JS

// При змінні данних в інпуті №1 чи №2 автоматично має перераховуватися загальна вартість

// Завжди має відображатися валюта - гривня

// Загальна сума відображається з копійками (2 знаки після коми)

// В підписі другого інпута має бути кольорова підказка скільки кілограм вибрав користувач на другому інпуті.

// Кольорова підказка має змінювати своє значення при перетягувані повзунка.

// В інпуті №2 мін і мах поріг встановлюєте самостійно.

// При завантаженні сторінки сприпт має автоматично розрахувати вартість на основі даних за замовчуванням які ви встановите в розмітці.


data = {
    price: 0,
    quantity: 0,
    calculateTotal() { 
        return (this.price * this.quantity).toFixed(2);
    }

}


 
const mainForm = document.getElementById('form');
const priceInput = document.getElementById('price');
const quantitytInput = document.getElementById('quantity');
const amount= document.getElementById('amount');
const total = document.getElementById('total');


dataFill()
displayTotal()


mainForm.addEventListener("input", onChangeInputForm);


function onChangeInputForm(e) {
 
    
// if(e.target === priceInput) {
//     data.price = e.target.value;
   
// }
if(e.target === quantitytInput) {
     amount.textContent = e.target.value;
    data.quantity = e.target.value;
    }

   
    e.target.setAttribute('value', e.target.value);
     dataFill();
     displayTotal(); 
    console.log(data)
}

function dataFill() {
data.quantity = quantitytInput.getAttribute("value");
data.price = priceInput.getAttribute("value");
 }

function displayTotal() {
total.textContent = data.calculateTotal() + "грн";
 }