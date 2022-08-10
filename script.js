'use strict'



let num = 30;
function showFirstMessage(a, b){
    console.log(a + b)
    num = 10
}
showFirstMessage()
console.log(num)


function calc(a,b){
    return (a + b) (console.log('Hello World'))

}

console.log(calc(1,2))
console.log(calc(4,10))


















//
// 'use strict';
//
// let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//
//
//
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
//
// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');
//
//         if (a != null && b != null && a !== '' && b !== "" && a.length < 50){
//             personalMovieDB.movies[a] = b;
//             console.log('Done')
//         }else{
//             console.log('Error')
//             i--;
//         }
//
// }
//
// personalMovieDB.count === 0 || '' ? alert("Произошла ошибка") :
//     personalMovieDB.count <= 10 ? alert("Просмотрено довольно мало фильмов") :
//         personalMovieDB.count > 10 && personalMovieDB.count <= 30 ? alert("Вы классический зритель") :
//             personalMovieDB.count > 30 ? alert("Вы киноман") : alert("Произошла ошибка")
//
//
// console.log(personalMovieDB);
//
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