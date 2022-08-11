//! условные операторы
//! тернарный оператор
//! условие ? (если условие верно) : (если неверно)

//1
// let currentUser = false;
// currentUser
//   ? alert("Добро пожаловать!")
//   : alert("Зарегистр. или войдите в свой профиль");

//2
// let password = prompt("Введите пароль");
// let passwordConfirm = prompt("Подтвердите пароль");
// password === passwordConfirm
//   ? alert("Вы успешно подтв. пароль")
//   : alert("Пароли не совпадают");

//3
// let age = prompt("Укажите ваш возраст");
// age >= 18 ? console.log("Добро пожаловать!") : console.log("Доступ запрещен");

//4
// let role = "admin";
// role === "admin"
//   ? alert("Вы можете редактировать группу")
//   : alert("У вас нет прав");

//5
// let productsCount = 0;
// productsCount > 0
//   ? alert(`В корзине ${productsCount} товаров`)
//   : alert("Корзина пустая");

//!if/ if...else /if....else if...else if...else

//1
// let name = prompt("Введите имя");
// if (name === "Jonh") {
//   alert(`Привет ${name}`);
// }

//2
// let age = prompt("Укажите ваш возраст");
// let canDrive = null;
// if (age > 17) {
//   canDrive = true;
// } else {
//   canDrive = false;
// }
// console.log(canDrive);

//4
// let num1 = +prompt("первое число");
// let operator = prompt("мат оператор");
// let num2 = +prompt("второе число");
// if (operator === "+") {
//   alert(num1 + num2);
// } else if (operator === "-") {
//   alert(num1 - num2);
// } else if (operator === "*") {
//   alert(num1 * num2);
// } else if (operator === "/") {
//   alert(num1 / num2);
// } else {
//   alert("Ошибка! Введите корректный оператор");
// }

//!switch case
// let season = +prompt("выберите сезон (от 1 до 4)");
// switch (season) {
//   //season === 1
//   case 1:
//     console.log("зима");
//     break;
//   case 2:
//     console.log("весна");
//     break;
//   case 3:
//     console.log("лето");
//     break;
//   case 4:
//     console.log("осень");
//     break;
//   default:
//     console.log("выберите число от 1 до 4");
// }

//CREATE, UPDATE, READ. DELETE
// let action = "CREATE";
// switch (action) {
//   case "CREATE":
//     alert("Создан профиль");
//     break;
//   case "READ":
//     alert("Отображение профиля");
//     break;
//   case "UPDATE":
//     alert("Профиль отредактирован");
//     break;
//   case "DELETE":
//     alert("Профиль удален");
//     break;
//   default:
//     alert("Действие не относиться к CRUD!");
// }

// let dayOfWeek = +prompt("выберите день недели (от 1 до 7)");
// switch (dayOfWeek) {
//   //season === 1
//   case 1:
//     console.log("пн");
//     break;
//   case 2:
//     console.log("вт");
//     break;
//   case 3:
//     console.log("ср");
//     break;
//   case 4:
//     console.log("чт");
//     break;
//   case 5:
//     console.log("пт");
//     break;
//   case 6:
//     console.log("сб");
//     break;
//   case 7:
//     console.log("вс");
//     break;
//   default:
//     console.log("это не день недели");
// }

//!Логической и - &&

// let bread = "лепешка";
// let product1 = "молоко";
// if (bread === "baton" && product1 === "молоко") {
//   alert("Взяли нужное");
// } else {
//   alert("не то, что нужно");
// }

// let password = prompt("Введите пароль");
// const tries = 1;
// if (password === "ps123") {
//   alert("Пароль введен правильно");
// } else {
//   password = prompt("Неверный пароль. Попробуйте снова");
//   console.log(password);
//   if (password === "ps123") {
//     alert("Пароль введен правильно");
//   } else {
//     alert("Ваш аккаунт заблокирован");
//   }
// }

// const email = prompt("Введите эл.почту");
// if (email === "user123") {
//   let password = prompt("Введите пароль");
//   if (password === "ps123") {
//     alert("Вы вошли!");
//   }
// }

// let answer = confirm("Вы хотите покинуть игру?");
// console.log(answer);
// if (answer) {
//   alert("Вы покинули игру");
// } else {
//   alert("Поиграем еще!");
// }

//!Инкремент - увеличить на 1 (++)
//*Инкремент - уменьшить на 1 (--)

// let likes = 5031;
// let answer = confirm("Поставить лайк?");
// if (answer) {
//   likes++;
//   alert(`Вы поставили лайк! Всего лайков ${likes}`);
// }
// answer = confirm("Поставить лайк?");
// if (answer) {
//   likes++;
//   alert(`Вы поставили лайк! Всего лайков ${likes}`);
// }

// let tasksInClassroom = confirm("Вы выполнили задание с классрума?");
// let tasksOnPlatform = confirm("Вы выполнили задания из makers?");
// if (tasksInClassroom && tasksOnPlatform) {
//   alert("У вас будет высокий KPI");
// } else {
//   alert("У вас будет низкий KPI");
// }

//!momentum, teamflow
let homework = "idm";
if (homework === "momentum" || homework === "teamflow") {
  alert("100 баллов");
} else {
  alert("0 баллов");
}
