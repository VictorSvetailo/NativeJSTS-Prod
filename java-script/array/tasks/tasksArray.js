const films = [{
    name: 'Titanic', rating: 9
}, {
    name: 'Die hard 5', rating: 5
}, {
    name: 'Matrix', rating: 8
}, {
    name: 'Some bad film', rating: 4
}];

function showGoodFilms(arr) {
    const res = arr.filter(el => el.rating >= 8)
    return arr.filter(film => film.rating >= 8);
    console.log(res)
}

// showGoodFilms(films)

function showListOfFilms(arr) {
    return arr
        .map(el => el.name)
        .reduce((sum, current) => `${sum}, ${current}`)
}

// console.log(showListOfFilms(films))


function setFilmsIds(arr) {
    return arr.map((el, i) => {
        let arr = Object.assign({}, el);
        arr.id = i;
        return arr
    })
}



const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    const res = arr.every(film => film.id || film.id === 0 ? true : false)
    // const res = arr.map(el => el.id >= 0)
    console.log(res)
}
checkFilms(tranformedArray)


// Задания на работу с методами массивов
// В этих заданиях мы с вами потренируемся работать с методами массивов.
//     Учтите, что проверка кода в таких заданиях осуществляется автоматически, через программу. Поэтому нужно четко следовать инструкции.
//     Вы можете сначала решить у себя в редакторе кода, а потом вставить сюда.
//     Все данные для решения задач мы с вами рассмотрели в предыдущих обязательных уроках.
//     Каждая задача проверяется отдельно, но по порядку, так что вы будете получать разные уведомления при проверке.

//     Задачи:

// 1) У вас есть список фильмов с рейтингом в виде массива объектов. Напишите функцию showGoodFilms,
// которая будет принимать этот массив, а возвращать будет массив объектов только с теми фильмами, у которых рейтинг больше или равен 8.
// P.S. Это довольно типичная задача в программировании. Вспомните, на самых разных сайтах можно так фильтровать любые товары/фильмы/сериалы...

// 2) Напишите функцию showListOfFilms, которая будет принимать этот же массив, а возвращать будет строку, которая содержит названия фильмов через запятую.
//     Пример:
// showListOfFilms(films) => "Titanic, Die hard 5, Matrix, Some bad film"

// 3) Напишите функцию setFilmsIds, которая будет принимать этот же массив, а возвращать будет такой же массив с фильмами, но у каждого фильма будет новое поле id. Значение этого поля установите по нумерации фильма.
//     Пример:
// setFilmsIds(films)  => [   { name: 'Titanic', rating: 9, id: 0 },   { name: 'Die hard 5', rating: 5, id: 1 },   { name: 'Matrix', rating: 8, id: 2 },   { name: 'Some bad film', rating: 4, id: 3 } ]

// 4) Запишите результат предыдущей функции в переменную tranformedArray. Напишите функцию checkFilms,
// которая будет проверять, что в каждом из фильмов есть поле id.
// Если это так - функция возвращает true. Очевидно, что сейчас условие должно выполняться, если мы передаем checkFilms(tranformedArray); :)

// P.S. Вот тут вы столкнетесь с интересным моментом, который я хочу, чтобы вы запомнили. Внимательно проследите за тем, что происходит внутри коллбэка и что будет проверяться. Дополнительно расписал этот момент в комментариях в ответах.
//     Ответ с кодом этих задач можно найти тут: ссылка
// Если у вас получилось немного по другому, но решение засчитывается - то все в порядке. Помните, что вариантов решения всегда несколько.
//  Но постарайтесь решить самостоятельно 🙂