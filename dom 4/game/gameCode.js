var event, ok;
var answers = [];
var hod = [];
function question (a, b ,c, d){
 do {//Выводим первый вопрос
    ok = false;
    event = +prompt(a + b + c + '-1 - Выход из игры');
    if (event == -1) {
        break;
    }
     else if(event = 1){
         ok = isAnswer(d, event);
         hod.push(a + b);
     } 
    else {
        hod.push(c);
        ok = isAnswer(d, event);
    }
} while (!ok);   
};

question(works.a00, works.a1, works.a2, works.a0);
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        question(works.b00, works.b1, works.b2, works.b0);
        switch (event) {
            case 1:
            case 2:// Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                question(works.d00, works.d1, works.d2, works.d0);
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        question(works.c00, works.c1, works.c2, works.c0);
        switch (event) {
            case 1:
            case 2:// Второе действие
                question(works.d00, works.d1, works.d2, works.d0);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру\n' + 'Ваши ответы:\n ' + hod);

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
    
}

