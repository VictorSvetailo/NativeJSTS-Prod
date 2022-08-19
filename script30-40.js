'use state'




// const str = prompt('', '');
// const products = str.split(', ');
// products.sort()
// console.log(products.join('; '))
//




// arr[99] = 0;
// console.log(arr.length)
// console.log(arr)

// const arr = [2, 13, 26, 8, 10]
// const arr2 = [9, 1, 7, 4, 3]
// arr.sort(compareNum)
// console.log(arr)
//
// function compareNum(a, b) {
//     return a - b;
// }




// arr.forEach(function(item, i,arr ){
//     console.log(`${i}: ${item} внутри массива ${arr}`)
// })


// // console.log(arr)
// // arr.pop()
// //
// arr.push()
// console.log(arr)
//
// for (let i = 0; i <= arr.length; i++) {
//     console.log(arr[i])
// }

// for (let value of arr){
//     console.log(value)
// }















//
// let a = 4;
// let b = 2;


// let result = prompt('Выбери браузер!', '').toLowerCase()
//
//
// if(result === 'edge'){
//     alert( "You've got the Edge!" );
// }else if(result === 'chrome' || result === 'firefox' || result === 'safari' ||  result === 'opera'){
//     alert( 'Okay we support these browsers too' );
// }else{
//     alert( 'Иди в жопу! Ты ничтожество!' );
// }

// || 'Firefox' || 'Safari' || 'Opera'


// let result = +prompt('Выбери браузер!', '')
//
//
// switch (result){
//     case 0:
//         console.log('Вы ввели число 0')
//         break;
//     case 1:
//         console.log('Вы ввели число 1')
//         break;
//     case 2:
//     case 3:
//         console.log('Вы ввели число 2, а может и 3')
//         break;
//     default:
//         console.log('и все-таки, Ты дебил')
// }


// const object = {
//     name: 'Test',
//     width: 1023,
//     height: 1024,
//     colors: {
//         border: "black",
//         bg: 'red'
//     },
//     makeTest: function(){
//         console.log('Test')
//     }
// }
// // object.makeTest()
//
//
// const {border, bg} = object.colors
// console.log(border, bg)


// console.log(object)

// console.log(Object.keys(object).length)


// console.log(object)
// delete object.name
// console.log(object)
// console.log(object.colors)

// console.log(object['colors']['border'])
//
// let counter = 0
// for (let key in object) {
//     counter++
// }
// console.log(counter)


// for (let key in object) {
//     if (typeof (object[key]) === 'object') {
//         for (let i in object[key]) {
//             console.log(`Свойства ${i} имеет значение --- ${object[key][i]}`)
//         }
//     } else {
//         console.log(`Свойства ${key} имеет значение  ${object[key]}`)
//     }
// }


// for (let i = 2; i <= 7; i++){
//     if (i % i == 0) continue
//     c onsole.log(i)
// }

// let i = 0;
// while (i < 3){
//     console.log(`number ${i}!` )
//     i++
// }


// let result;
// do {
//     result = +prompt('Введите число > 100!', '')
//     console.log(result)
//     if (result === 0) {
//         alert('Error')
//         break
//     } else if (result < 100) {
//         alert('Введите число больше пожалуйста!')
//     }
// } while (result < 100)
// alert('You cool!!')


//
// function first(){
// // Do something
//     setTimeout(function (){
//         console.log(1)
//
//     },500)
// }
//
// function second(){
//     console.log(2)
// }
// first()
// second()
//


// function learnJS(lang, callback){
//     console.log(`I learn: ${lang}`)
//    // callback()
// }
//
// function done(){
//     console.log('I go this lesson')
// }
//
// learnJS('JavaScript', done)
//
//


// function first(a, callback){
// // Do something
//     setTimeout(function (){
//         console.log(a)
//         callback()
//     },500);
//
// }
// function second(){
//     console.log(2)
// }
//
// first(1, second)


// const mainName = 'admin'
// const mainPassword = '0077'
// let password;
// let openApp = prompt('Кто ты воин?', '')
//
// if (openApp == null) {
//     alert('Error')
// } else if (openApp !== mainName) {
//     alert('I dont you know')
// } else if (mainName) {
//     password = prompt('Ввведите пароль!', '')
//     if (+password === +mainPassword) {
//         alert('Hello Boss')
//     } else if (password === null) {
//         alert('Error')
//     } else if (+password !== +mainPassword || +password === '') {
//         alert('Incorrect password')
//     }
// }