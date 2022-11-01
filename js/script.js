'use strict'



const promise1 = axios.get('https://google.com')
promise1.then((data) => {
    console.log(data)
})


// const obj = {
//     name: '',
//     say(message) {
//         alert(message + ', ' + `${this.name}` )
//     }
// }
//
// obj.name = 'Victor'
// obj.say('Hello')


// function getSum(number) {
//     //...здесь пишем код.
//     let figures = "" + number
//     let sum = 0
//     for (let i = 0; i < figures.length; i++)
//         sum += +figures[i]
//
//         return sum
//
// }
//
//
// console.log(getSum(242424))


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.


// function getTriangleType(a, b, c) {
//     //...здесь пишем код.
//
//     if (a === 0 || b === 0 || c === 0) {
//         return '00' //"треугольника не существует"
//     }
//     if (a === b && a === c && c === b) {
//         return '10' //"равносторонний"
//     }
//     if (a === b && a === c && c !== b) {
//         return '01' //"треугольник равнобедренный"
//     }
//     if (a !== b && a !== c && c === b) {
//         return '01' //"треугольник равнобедренный"
//     }
//     if (a === b && a !== c && c === b) {
//         return '01' //"треугольник равнобедренный"
//     }
//     if (a === b && a !== c && c !== b) {
//         return '01'// "треугольник равнобедренный"
//     }
//     if (a !== b && a === c && c !== b) {
//         return '01' //"треугольник равнобедренный"
//     }
//     if (a !== b && a !== c && c !== b) {
//         return "11" // "треугольник обычный"
//     }
// }
//
// console.log(getTriangleType(123, 123, 0))


// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

// const array = [3, 5, 7, 6, 4, 9]
//
// function sum(...nums) {
//     //console.log(nums)
//     return nums.reduce((a, b) => a + b);
//
// }
//
// console.log(sum(array))


// const pow = (x, n) => {
//     let result = 1
//
//     for(let i = 0; i < n; i++){
//         result *= x;
//     }
//     return result
// }
// debugger
// const pow = (x, n) => {
//     if (n === 1) {
//         return x;
//     } else {
//         debugger
//         return x * pow(x, n - 1)
//         debugger
//     }
// }
//
//
// // pow(2, 3)
//
// console.log(pow(2, 2))


//
//
//
// console.log(document.head)
// console.log(document.documentElement)
// console.log(document.body.firstChild)
// console.log(document.body.lastChild)
// console.log(document.querySelector('#current').parentNode.parentNode)
// console.log(document.querySelector(`[data-current='3']`));
// console.log(document.querySelector(`[data-current='3']`).nextElementSibling);
// console.log(document.querySelector('#current').parentElement)


// console.log(document.body.childNodes)

// for (let node of document.body.childNodes){
//     if (node.nodeName == '#text'){
//         continue;
//     }
//     console.log(node)
// }


// // const btns = document.querySelectorAll('button');
//
// // btn.onclick = function () {
// //     alert('Это был Click')
// // }
// //
// // btn.onclick = function () {
// //     alert('Что то еще!')
// // }
//
// // btn.addEventListener('click', ()=> {
// //     alert('Hello i do React')
// // })
//
//
// // const overlay = document.querySelector('.overlay')
//
// // let i = 0
// // const deleteElement = (e) => {
// //     // e.target.remove()
// //     console.log(e.currentTarget)
// //     console.log(e.type)
//     // i++
//     // if(i == 1){
//     //     btn.removeEventListener('click', deleteElement)
//     // }
// }
// // btn.addEventListener('click', deleteElement)
// // overlay.addEventListener('click', deleteElement)
//
//
// //
// // btns.forEach(btn => {
// //     btn.addEventListener('click', deleteElement, {once: true})
// // })
// //
// //
// // const link = document.querySelector('a');
// // link.addEventListener('click', function(event) {
// //     event.preventDefault()
// //     console.log(event.target)
// // })