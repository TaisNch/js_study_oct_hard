// 1) Создать переменную num со значением 266219 (тип данных число)
const num = 266219;

// 2) Вывести в консоль произведение (умножение) цифр этого числа
const digits = num.toString();
console.log(digits);
let product = 1;
for (let i = 0; i < digits.length; i++) {
   product *= Number(digits[i]);
}
console.log(product);

// 3) Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)
const result = product*product*product;

console.log(result);

// 4) Вывести в консоль первые 2 цифры полученного числа
const digitRslt = result.toString();
console.log(digitRslt.substring(0,2));



