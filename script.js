// 1). Переменная lang может принимать 2 значения: 'ru' 'en'.
// const lang = prompt('Выберите язык - ru или en', 'ru'); 

// Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке. Решите задачу

//  a) через if,
const langIf = prompt('Выберите язык - ru или en', 'ru'); 
const daysRu = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
const daysEn = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
if (langIf === 'ru') {
  console.log(daysRu);
} else if (langIf === 'en') {
  console.log(daysEn);
} else {
  console.log('Неверный ввод языка');
}

//  b) через switch-case
const langSwitch = prompt('Выберите язык - ru или en', 'ru'); 
switch (langSwitch) {
  case 'ru':
    console.log(daysRu);
    break;
  case  'en':
      console.log(console.log(daysEn));
      break;
  default:
      console.log('Неверный ввод языка');
}

//  c) через многомерный массив без ифов и switch.
const days = {
  'ru': ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
  'en': ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
};

// Переменная lang, которая может принимать значения 'ru' или 'en'
const langArr = prompt('Выберите язык - ru или en', 'ru');

// Выводим соответствующий массив дней недели в зависимости от выбранного языка
console.log(days[langArr] || 'Неверный ввод языка');

// 2). У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”, если значение “Александр” то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”

const namePerson = prompt('Введите имя', 'Артем');

//  Решить задачу с помощью нескольких тернарных операторов, без использования if или switch

const role = (namePerson === 'Артем') ? console.log('директор') :
             (namePerson === 'Александр') ? console.log('преподаватель') :
             console.log('студент');


