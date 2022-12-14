
// Dynamic typing

// method string
//  №1 string
// console.log(typeof (String(null)))
// console.log(typeof (String(4)))

// method №2 string при сложении со строкой все равно получается строка

// console.log(typeof (undefined + ''))
//
// const num = 5

// console.log('https://vk.com/catalog/' + num)
// console.log(`https://vk.com/catalog/${num}`)

// превращаем в строку для css стилей
// const fontSize = 26 + 'px'
// console.log(fontSize)

// method number
// №1 number
// console.log(typeof (Number('Hello')))

// №2 number унарный плюс
// console.log(typeof ((+'Hello')))

// №3 number pars
// console.log(typeof (parseInt('15px', 10)))
// console.log((parseInt('15px', 10)))

// let answer = +prompt('Hello?', '0')

// method boolean
// 0, '', null, undefined, NaN; это все false все остальное будет правдой в логическом контексте

// #1 boolean
// console.log(typeof (Boolean('4')))

// #2 boolean
// let switcher = null;
//
// if (switcher){
//     console.log('Working...')
// }
// switcher = 1
//
// if (switcher){
//     console.log('Working...')
// }


// #3 boolean 2 знака отрицания
console.log(typeof (!!('4')))




