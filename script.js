// 1) Создать массив arr = []
const arr= []
// — Записать в него 7 любых многозначных чисел в виде строк
arr.push ('45678', '987654', '1234567', '7654321', '23456789', '87654321', '34567890');
console.log (arr);
// — Вывести в консоль только те, что начинаются с цифры 2 или 4 (Должны присутствовать в массиве)
let arrSort = []
for (let i=0; i<=6;i++) {
 let number = arr[i].substring(0,1)
  if (number ==='7' ||number ==='2'  ||number ==='4') {
    arrSort.push (arr[i])
  }
 }
 console.log (arrSort);

// 2) Вывести в столбик все простые числа от 1 до 100 (сделать при помощи цикла)

let arrPrime = [];
const isPrime = function(num) {
  if (num<=1) {
    return false
  }  
  for (let i=2; i<Math.sqrt(num); i++) {
    if (num%i === 0) {return false}
  } 
  
  return true}


for (let i=1; i<=100;i++) {
   if(isPrime(i)) { arrPrime.push(`${i}: Делители этого числа: 1 и ${i}`);};
  }
 console.log (arrPrime);


