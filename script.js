'use strict'

let result = prompt('Напишите ваще имя?')

confirm(result)






// //
// let res = 0;
// let num = 5;
// let prog = 3;
// let value = 0
// let dash = '---'
// let plus =  " ";
//
// for (let i = 1; i <= prog; i++) {
//     value = num + value
//     plus += res += value
//     if (i < prog){
//         plus += dash
//     }
//     value = 0
// }
// console.log(plus)


// function getMathResult(num, prog) {
//     let res = 0;
//     let value = 0
//     let dash = '---'
//     let plus = " ";
//     if (prog !== '' && prog !== 0 && prog > 0) {
//         for (let i = 1; i <= prog; i++) {
//             value = num + value
//             plus += res += value
//             if (i < prog) {
//                 plus += dash
//             }
//             value = 0
//         }
//     } else{
//         return num
//     }
//     return plus
// }
//
// console.log(getMathResult(10, 3))


// var n = 0;
// var x = 0;
// while (n < 10) {
//     n++;
//     x += n;
// }
// console.log(x)


// let result = ''
//
// for (let i = 0; i < 7; i++) {
//     for (let j = 0; j < i; j++) {
//         result += "*"
//     }
//     result += "\n"
// }
//
// console.log(result)
//


// function sayHello(num, prog) {
//
//     for (let i = 1; i < prog; i++) {
//         return (10 + 10)
//     }
//
// }
//
// sayHello(10, 3)


//
// let plus;
// let minus;
// let array
// return minus = num - 1, plus = num + 1, array = [minus, num, plus]


// 3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число -
// это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку
// (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.
//
//     Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)
//
// Примеры:
//   Вызов функции getMathResult(5, 3) даст ответ 5---10---15
//
// Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30
//
// Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50
//
// Вызов функции getMathResult(10, '5') даст ответ 10
//
// Вызов функции getMathResult(10, 0) даст ответ 10
//
// Вызов функции getMathResult(20, -5) даст ответ 20
//
// Эта задача уже ближе к реальности, когда вам нужно учитывать и тип данных у аргументов,
//     проверять их и продумывать логику работы внутри. Обратите внимание на прогрессию,
//     она рассчитывается по простой формуле умножения. Если первый аргумент 5, а второй 3, то число повторяется 3 раза, каждый раз увеличиваясь на само себя.
//     Это базовая математика, которая и нужна для работы в 95% случае на фронтенде.


//
//


//
// let usdCurr = 63
// // let euroCurr = 70
// let discount = 0.9
//
// function convert(amount, curr){
//     return amount * curr
// }
//
// function promotion(result){
//     console.log(result * discount)
// }
//
//
// const res = convert(100, usdCurr)
// promotion(res)
// // convert(100 ,euroCurr)


// function test() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i)
//         if (i === 3){
//             return
//         }
//     }
//     console.log('Done')
// }
// test();


// function doNothing(){
//
// }


// let usdCurr = 63
// let euroCurr = 70
//
// function convert(amount, curr){
//     console.log(amount * curr )
// }
//
// convert(100 ,usdCurr)
// convert(100 ,euroCurr)


// let num = 30;
// function showFirstMessage(a, b){
//     console.log(a + b)
//     num = 10
// }
// showFirstMessage()
// console.log(num)
//
//
// function calc(a,b){
//     return (a + b) (console.log('Hello World'))
//
// }
//
// console.log(calc(1,2))
// console.log(calc(4,10))


// function ret(){
//     let num = 77
//     return num;
//
// }
//
// let anotherNum = ret();
//
// console.log(anotherNum)
//

// const logger = (a, b) => a + b
//
// console.log(logger(21, 2))


//



//
// let hui = personalMovieDB.count
//
// console.log(personalMovieDB.count+ 'Колл')
//
// let test = hui.length
//
// console.log(test + 'Колл');


// HomeWork


//При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой
// Место для первой задачи
// function firstTask() {
//     // Пишем решение вот тут
//     for (let i = 5; i < 11; i++) {
//         console.log(i)
//     }
//
// }

// function secondTask() {
//     // Пишем решение вот тут
//     for (let i = 21; i >= 10; i--) {
//         console.log(i)
//         if (i === 15) {
//             // return
//         }
//         console.log(i)
//     }
//
// }
//
// secondTask()

// При помощи цикла for вывести числа от 20 до 10 в консоль.
// В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл
// Место для второй задачи
// function secondTask() {
//     // Пишем решение вот тут
//     for (let i = 20; i >= 10; i--) {
//         if (i === 12) {
//             break
//         }
//         console.log(i)
//     }
// }
//
// secondTask()

// При помощи цикла for выведите чётные числа от 2 до 10 включительно
// Место для третьей задачи
// function thirdTask() {
//     // Пишем решение вот тут
//     for (let i = 2; i <= 10; i++) {
//         if (i % 2 == 0) {
//             console.log(i)
//         }
//     }
// }

// thirdTask()


// for (let i = 2; i <= 16; i++) {
//     if (i % 2 == 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }


//Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же.
//Не создайте бесконечный цикл! Иначе браузер может зависнуть.

//  Цикл, который нужно переписать:
// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 == 0) {
//         //continue;
//     }else {
//         console.log(i);
//     }
// }

// function fourthTask() {
//     // Пишем решение вот тут
//     let i = 2;
//     while (i < 16) {
//         i++;
//         if (i % 2 == 0) {
//             continue;
//         } else {
//             console.log(i);
//         }
//     }
// }

// fourthTask()

// Место для пятой задачи

// function fifthTask() {
//     const arrayOfNumbers = [];
//
//     // Пишем решение вот тут
//     for (let i = 5; i <= 10; i++) {
//         arrayOfNumbers.push(i)
//     }
//     // Не трогаем
//     return arrayOfNumbers;
// }
// fifthTask()

// for (let i = 0; i < 3; i++) {
//     console.log('*')
//     for (let j = 0; j < 3; j++) {
//         console.log('*')
//         for (let c = 0; c < 3; c++) {
//             console.log('*')
//         }
//     }
// }

// for (let i = 0; i < 3; i++) {
//     console.log('*')
// }


// homeWork repeat
// let result = ""
// for (let i = 0; i < 7; i++) {
//     for (let j = 0; j < i; j++) {
//         result += '*'
//     }
//     result += '\n'
// }
// console.log(result)


// repeat

// let result = ""


// Mark repeat Перезапускает цикл
// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`)
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`)
//         for (let k = 0; k < 5; k++) {
//             console.log(`Third level: ${k}`)
//              if (k === 4 ) continue first
//         }
//     }
// }


// Break repeat полностью останавливает цикл
// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`)
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`)
//         for (let k = 0; k < 5; k++) {
//             if (k === 2) break first
//             console.log(`Third level: ${k}`)
//         }
//     }
// }


// let result = ''
//
// for (let i = 0; i < 77; i++) {
//     for (let j = 0; j < i; j++) {
//         result += "*"
//     }
//     result += "\n"
// }
//
// console.log(result)
