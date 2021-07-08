let a = 1000;
let b = '108';
var c = a + b;

document.getElementById("expression").value = `Переменная a – это ${typeof a}
Переменная b – это ${typeof b}
Результат суммы этих переменных имеет тип – ${typeof c} и составляет: ${c}`;