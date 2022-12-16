'use strict'

const arr = ['Alex', 'Anna', 'Oleg', 'Alex']
// console.log(arr)

const set = new Set(arr)
// console.log(set)

set.add('Ivan')
    .add('Anna')

function unique(arr) {
    return Array.from(new Set(arr))
}

// console.log(unique(arr))

// set.delete(value)
// set.has() // проверять value
// set.clear() // полностью очистить набор
// set.size // получить размер нашего набора данных. Сколько там элементов
//
// можно перебрать
// for (const value of set) {
//     console.log(value)
// }

// set.forEach((value, valueAgeing , set)=>{
//     console.log(value, valueAgeing)
// })
// console.log(set)

// console.log(set.values())
// console.log(set.keys())
// console.log(set.entries())


