// let goodsCount = 10;

// if (goodsCount > 0) {
//     console.log('Количество товара ', goodsCount);
// } else {
// console.log('Корзина пуста');
// }
// === либо можно записать без скобок ========
// if (goodsCount >0) console.log('Количество товара ', goodsCount);
// else console.log('Корзина пуста');

// ====================================
// === тернарный оператор =============
// goodsCount > 0 ?
//      console.log('Количество товара ', goodsCount) :
//      console.log('Корзина пуста');

// const cartInfo = goodsCount > 0 ?
//     'Количество товара ' + goodsCount :
//     'Корзина пуста';

// console.log(cartInfo);

// ====================================
// === Поис стоимости штовара =========
// const good = 'Apples';

// if (good === 'Banannas') {
//     console.log('Banannas cost 50 RUR');
// } else {
//     if (good === 'Mango') {
//         console.log('Mango costs 80 RUR');
//     }
// }
// == < not ended ===


// const good = 'Pears';

// switch (good) {
//     case 'Banannas': console.log('Banannas cost 50 RUB'); break;
//     case 'Mango': console.log('Mango cost 80 RUB'); break;
//     case 'Apple': console.log('Apples const 100 RUB'); break;
//     case 'Pears': console.log('Pears cost 110 RUB'); break;
//     default: console.log('Fruit uknown');
// }

// === Сокращение предыдущего примера ======
// const good = 'Pears';

// switch (good) {
//     case 'Banannas': console.log('Banannas cost 50 RUB'); break;
//     case 'Mango': console.log('Mango cost 80 RUB'); break;
//     case 'Apple': console.log('Apples const 100 RUB'); break;
//     case 'Pears': console.log('Pears cost 110 RUB'); break;
//     default: console.log('Fruit uknown');
// }

// === FUNCTIONS & FUNCTION DECLARATION ==============
// const good = 'Pears';

// function sayPrice(good) {
//     switch (good) {
//         case 'Banannas': console.log('Banannas cost 50 RUB'); break;
//         case 'Mango': console.log('Mango cost 80 RUB'); break;
//         case 'Apple': console.log('Apples const 100 RUB'); break;
//         case 'Pears': console.log('Pears cost 110 RUB'); break;
//         default: console.log('Fruit uknown');
//     }
// }

// sayPrice();
// sayPrice('Banannas');
// sayPrice(good);
// =========================

// const good = 'Mango';
//
// function getPrice(good) {
//     switch (good) {
//         case 'Banannas': return 50;
//         case 'Mango': return 80;
//         case 'Apples': return 100;
//         case 'Pears': return 110;
//         default: return null;
//     }
// }

// console.log(getPrice('Apples') * 10)

// === стоимость товара в зависимости от его количества =========
// function getPriceByCount(good, count = 1) {
//     const price = getPrice(good);
//
//     if (price == null) return null;
//
//     return price * count;
// }

// console.log(getPriceByCount(good, 15));
// console.log(getPriceByCount('Mango', 5));

// ------------------
// const basket = [{}] // n elements
// function calcBasket(goods) {
//     let result = 0;
//     for (let i = 0; i < basket.lenth; i++){
//     result += basket[i].price * basket[i].count;
//     result += getPriceByCount(basket[i].title, basket[i].count);
// }
// return result;
// }
//
// console.log(calcBasket(baskket));

// === FUNCTION EXPRESSION =================
//foo();
// const foo = function () {
//     console.log(123);
// }
// foo();

// === FUNCTION'S ARGUMENTS =======
// function  foo() {
//     console.log(arguments[2]);
// }
//
// foo (1, 6, 9);

// === RECURSION ===============
// выполнение одной и той же логики несколько раз.
// необходимо вывести в консоль последовательность чисел от 1 до n
// function recursion(x) {
//     if (x <= 0 || !Number.isInteger(x)) return 'Задайте целое число больше 0';
//     // во избехание – steck overflow!
//     if (x === 1) return '1';
//     return recursion(x - 1) + ' ' + x;
// }
//
// console.log(recursion(10));

// === Задача: сделвть игру через RECURSION ==========
// let number;
// let attemps;

// function resetGame() {
//     attempts = 5;
//     number = Math.floor(Math.random() * 100);
//     console.log(number);
// }

// function tryGuessNumber() {
//     const userAnswer = parseInt(prompt('Введите число от 0 до 100, для выхода -1'));

//     if (userAnswer === -1) return alert('Игра окончена!');

//     if (isNaN(userAnswer)) {
//         alert('Необходимо ввести целое число от 0 до 100.');
//         tryGuessNumber();
//         return;
//     }
//     attemps++;

//     if (userAnswer > number) {
//         alert('Попробуйте ввести число меньше');
//     } else if (userAnswer < number) {
//         alert('Попробуйте ввести число больше');
//     } else {
//         alert('Поздравляю! Вы угадали загаданное число! Количество попыток: ' + attemps);

//         if (!confirm('Хотите сыграть ещё?')) return alert('Игра окончена');

//         resetGame();
//     }
//     tryGuessNumber();
// }
// resetGame();
// tryGuessNumber();

// === ДОМАШНЕЕ ЗАДАНИЕ 2 ===============

var a = 1,
    b = 1,
    c, d;
c = ++a;
alert(c); // 2
d = b++;
alert(d); // 1
c = (2 + ++a);
alert(c); // 5
d = (2 + b++);
alert(d); // 4
alert(a); // 3
alert(b); // 3