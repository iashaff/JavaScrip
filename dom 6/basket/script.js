var bsk = []; //массив для корзины
var a = document.getElementsByClassName("name");
var b = document.getElementsByClassName("price");

//Определяем именно тот товар где нажали кнопку купить
function buy() {
    switch (event.target) {
    case i1:
        bsk.push(tovars[0]);
        break;
    case i2:
        bsk.push(tovars[1]);
        break;
    case i3:
        bsk.push(tovars[2]);
        break;
    }
    console.log(bsk);
}

//Массив товаров
var tovars = [
    {
        title: a, 
        price: b, 
        quantity: 1
},
     {
        title: a,
        price: b,
        quantity: 1
},
     {
        title: a,
        price: b,
        quantity: 1
}
];
//Выдергиваем из ключей название товарар и цену.
var i = 0;
   for (tovar of tovars) {
        tovar.title = a [i].innerHTML;
       tovar.price = b [i].innerHTML;
       i++;       
    }   

/*function countBasketPrice(tovars) {
            for (tovar of tovars) {
                tovar.quantity = +prompt("Введите колличество ");
                var p = 0;
                p = (p + tovar.price) * tovar.quantity;
                c = c + p;
            }
            return c;
        }
console.log(countBasketPrice(tovars));*/



