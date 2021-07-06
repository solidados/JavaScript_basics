// Типы данных:
// 1. String – строковые (одинарные кавычки)
// var name = 'Vasya';
// name = 1;
//
// console.log(name);
// -----------
// let a = 'Привет';
// let a = "Привет";
//let a = `Привет`; // это синтаксис шаблонных строк,то есть можно формировать строку на основе определённого шаблона
// -----------
// let user = 'Vasya';
// формируем шаблон
// let string = 'Привет, ' + user + '!';
// let string = `Привет, ${user}!`;
// console.log(string);
// -----------
// console.log('первая строка\nвторая строка'); //джля переноса при выполнении кода
// console.log('первая строка\ // для переноса строк при написании кода в IDE
// вторая строка');
// -------------------------------------------------
// 2. Numbers - числа
// let a = 1;
// let b = 3.14;
// let c = -10 / 0;
// console.log(c);
// console.log(typeof c);
// console.log(typeof b);

// В JS встроены все математические функции под Math
// console.log(10 * 'Hi'); // JS – это динамический, типизируемый (typeof = string or number) язык, поэтому 10 * NaN => NaN
// console.log(typeof NaN); // => number

// let i = '3.14';
//
// console.log(typeof i, i);
// i = +i;
// i = -i;
// console.log(typeof i, i);
// console.log(parseInt(i));
// console.log(parseFloat(i));
// console.log(Number(i));
// ---- Десятичные числа ------
// console.log(0xf);
// console.log(2e3);
// console.log(2e-3);

// 3. Boolean (true / false)
// boolean (true / false)
// null
// Object
// symbol

// function foo() {}
// console.log(typeof foo);
// console.log(typeof []);
// console.log([] instanceof Array);
// console.log(typeof null);

// 5. Арифметические операторы
// console.log(6 + 4);
// console.log(6 - 4);
// console.log(6 * 4);
// console.log(6 / 4);
// console.log(6 ** 4);
// console.log(6 % 4);

// let a = 1;
// a += 2; //a = a + 2;
//
// console.log(a);

// console.log('первая строка' + ' вторая строка');
// console.log('1' + '1'); // 11
// console.log('1' + 1); // 11
// console.log(1 + '1'); // 11
// console.log('1' + '1'); // никаких математических действия не будет производиться

// const a = 5; b = 5;
// a > b;
// a >= b;
// a < b;
// a <= b;
// a == b;
// a === b;
// a != b;
// a !== b;
/* Shift+Ctrl+/
*/

/**
 * Some description
 * @param a {number}
 * @param b {number}
 * @returns {number}
 */
// function sum(a:number , b:number) {
// 	return a + b;
// }

// console.log(sum(5, 6));