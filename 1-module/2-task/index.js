/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {

   return name != null && name.length >= 4 && name.indexOf(' ') < 0;

}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    return print(`Welcome back, ${userName}!`);
  } else {
    return print('Некорректное имя');
  }
}
