// Необходимо выполнить в отдельном js файле, подключенному к отдельной html странице

// 1) Выведите на страницу текущую дату и время в 2-х форматах:
//     a) 'Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'
//     б) '04.02.2020 - 21:05:33'
newTime1 = document.getElementById('newTime1');
newTime2 = document.getElementById('newTime2');
newTime3 = document.getElementById('newTime3');

week = ['воскресенье', "понедельник", "вторник","среда","четверг","пятница","суббота"];
const months = [
  'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
  'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];
const currentDate = new Date();
const dayOfWeek = currentDate.getDay(); 
const day = currentDate.getDate();      //дата   
const month = currentDate.getMonth() + 1;  
const year = currentDate.getFullYear();  
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();
// 2) Для вывода в формате (а) напишите функцию, которая будет менять склонение слов в зависимости от числа, "час, часов, часа"
let chas ;
if (+hours == 1) {chas ='час'}
else if (+hours >= 2 && +hours <= 4) {chas ='часа'}
else {chas ='часов'};
newTime1.innerHTML  = `<h2>Сегодня ${week[dayOfWeek]}, ${day} ${months[month]} ${year},${hours} ${chas} ${minutes} мин ${seconds} сек </h2>`;


// 3) Для вывода в формате (б) напишите функцию, которая будет добавлять 0 перед значениями которые состоят из одной цифры (из 9:5:3 1.6.2019 сделает 09:05:03 01.06.2019)
function addLeadingZero(value) {
  return value < 10 ? '0' + value : value;
}
newTime2.innerHTML = `<h2>${addLeadingZero(day)}.${addLeadingZero(month)}.${year} -${addLeadingZero(hours)}.${addLeadingZero(minutes)}.${addLeadingZero(seconds)}</h2>`

// 4) С помощью функции setInterval, реализуйте обновление даты и времени каждую секунду
function showTimeInSec(){
  newTime3.innerHTML =`<h2>${addLeadingZero(day)}.${addLeadingZero(month)}.${year} -${addLeadingZero(hours)}.${addLeadingZero(minutes)}.${addLeadingZero(seconds)}</h2>`
}
showTimeInSec();
setInterval(showTimeInSec(), 1000);

