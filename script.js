// 1) Создайте функцию, которая принимает 1 аргумент (название произвольное)
const newItem = function newExpr(item) {
  // Проверка, является ли аргумент строкой
  if (typeof item !== 'string') {
    return 'У Вас ошибка, нужно ввести строку';
  }
  const noSpaces = item.trim();
  if (noSpaces.length > 30) {
    const trimmedText = noSpaces.substring(0, 30);
    return `${trimmedText}...`; 
  }