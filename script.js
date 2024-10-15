// 1) Создать массив week и записать в него дни недели в виде строк
// Вывести на экран все дни недели
// Каждый из них с новой строчки
// Выходные дни - курсивом
// Текущий день - жирным шрифтом(использовать объект даты)

week = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']

for (let i=0; i<=week.length; i++) {
  if (i===0 || i === 6) {
    document.write (`<i>${week[i]}</i></br>`)
  } else
  document.write (`${week[i]}</br>`)
}
  
const today = new Date();
const dayOfWeek = today.getDay(); 
console.log('Сегодня:', week[dayOfWeek]); 

console.log(week);
