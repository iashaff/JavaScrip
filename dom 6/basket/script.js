var bsk = []; //массив для корзины
var btn = document.querySelectorAll("btn");
var renderedBsk = document.getElementById("bas-ket");
var goods = document.getElementById("list");
var total = document.getElementById("total");


//Массив товаров
var catalog = [
    {
        title: "Фотоаппарат",
        price: 15000,
        image: "./img/1.jpg",
        id: 1
    },
    {
        title: "Наушники",
        price: 7000,
        image: "./img/2.jpg",
        id: 2
    },
    {
        title: "Телефон",
        price: 10000,
        image: "./img/3.png",
        id: 3,
    }
];

//Отрисовываем товары на странице

function renderGoods() {
    for (var i = 0; i < catalog.length; i++) {
        var item = document.createElement('div');
        item.className = 'items';
        item.innerHTML = ` <img src="${catalog[i].image}" />
                            <h2> ${catalog[i].title} </h2>
                             <p> ${catalog[i].price} руб.</p>
                              <button class="btn" data-id = ${catalog[i].id}>Купить</button>`

        goods.appendChild(item)

    }

}
renderGoods();

//Определяем именно тот товар где нажали кнопку купить и добавляем в массив корзины



document.onclick = (event) => {
    if (event.target.classList.contains('btn')) {
        addGoodsInBasket(event.target.dataset.id)
    }


}
// Добавляем выбранный товар в массив и отрисовываем корзину с общей суммой
const addGoodsInBasket = id => {
    var sum = 0
    catalog.forEach(element => {
        if (event.target.dataset.id == element.id) {
            bsk.push({ title: element.title, price: element.price, count: 1 })
        }

    })
    for (let i = 0; i < bsk.length; i++) {
        sum += bsk[i].price
    }

    renderedBsk.innerHTML += `<ul>
        <li>${bsk[bsk.length - 1].title} ${bsk[bsk.length - 1].price} руб.</li>
        </ul>`
    total.textContent = `Итого: ${sum} руб.`

}

