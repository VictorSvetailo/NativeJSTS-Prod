'use state'


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