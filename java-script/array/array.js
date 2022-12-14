const arr = [9, 2, 14, 8, 3, 7, 152]
// console.log(arr)
//удаляет последний элемент из массива
// arr.pop()
// console.log(arr)

//добавляет элемент в конец массива
// arr.push(666)
// console.log(arr)

// перебрать массив 
// for (let i = 0; i <= arr.length; i++) {
//     console.log(arr[i])
// }

// перебрать массив при помощи for of
// for (let value of arr) {
//     console.log(value)
// }

// length у нас состоит из последнего index что есть у нас в массиве плюс 1
// arr[99] = 0
//
// console.log(arr.length)
// console.log(arr)

// Метод forEach
// 1) первый аргумент это тот элемент который мы сейчас перебираем
// 2) второй аргумент это номер по порядку 0,1,2...
// 3) третий аргумент собственно массив который нужно перебрать
// arr.forEach((item, i,arr)=>{
//     console.log(`${i}: ${item} внутри массива ${arr}`)
//         item = 'hello'
// })

// метод map
// const test = arr.map(e =>{
//     return e = e + 1
// })
// console.log(test)
// console.log(arr)


// метод split
// const str = prompt('', '')
// const products = str.split(', ')
// console.log(products)

// объединение элементов массива
// const str = prompt('', '')
// const products = str.split(', ')
// products.sort()
// console.log(products.join('; '))

// метод sort всегда сортирует элементы внутри массива как строки по этой причине сортировка чисел будет плохая
// можно сказать как именно можно сортировать массив
// console.log(arr)
// arr.sort(compareNum)
// console.log(arr)

// сортировка по числам - Алгоритм быстрой сортировки используется внутри sort
// function compareNum(a, b) {
//     return a - b
// }


// псевдо массив это объект структура которого совпадает со структурой оригинального массива
// у псевдо массивов нет методов к примеру forEach



// создание копии массива
// const oldArray = ['a', 'b', 'c', 'd', 'f']
// const newArray = oldArray
//slice
// const newArray = oldArray.slice()

//map
// const newArray = oldArray.map(e => e)

// spread operator оператор разворота
const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'github', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook', 'ok']

// console.log(internet)

// console.log(newArray)

// console.log(oldArray === newArray)


function log(a, b, c, d, f) {
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    console.log(f)
}
const num = [5, 6, 7, 10]

log(...num)
